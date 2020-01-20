// Imports
import { alertMsg, getTranslation } from "../app";
import { getOldContent, addElement, addOption, element_types, refreshMoveButtons } from "./form";

// Variables
let message;
let success = true;
let element_selected_container;
let previous_element;
let next_element;
let required_count = 0;

// ORDRE DES VALEURS
// Type, Texte du label, Nom/Name, Lien, Options (reset/post), Theme/Style, Placeholder, Maxlength 
// Après ça : liste d'items si item présent dans l'élément (option) :  Item 1 Value 1 Item 2 Value 2...

$('#import-data').on('click', function () {
    var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/;
    // FORMAT CSV
    if (regex_csv.test($("#imported_data").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let formatted_csv = { type: "", title: "", url: "", options: "", style: "", items: [] };
            var reader = new FileReader();
            reader.onload = function (e) {
                var rows = e.target.result.split("\r\n");
                for (var i = 1; i < rows.length - 1; i++) {
                    let row = rows[i].split(";");
                    if (i == 1) {
                        // Première ligne : paramètres généraux
                        formatted_csv.type = row[0];
                        formatted_csv.title = row[1];
                        formatted_csv.url = row[3];
                        let form_options = row[4].split(",");
                        formatted_csv.options = { method: form_options[0], reset: form_options[1] };
                        formatted_csv.style = row[5];
                    } else if (i > 1) {
                        // On récupère les items si présents
                        let items = [];
                        if (row[9] && (row[0] == "unordered-list" || row[0] == "ordered-list")) {
                            for (var y = 9; y < row.length; y = y + 1) {
                                let item = row[y];
                                items.push(item);
                            }
                        } else if (row[9]) {
                            for (var y = 9; y < row.length; y = y + 2) {
                                let item = { value: row[y + 1], name: row[y] };
                                items.push(item);
                            }
                        }
                        // On ajoute l'élément au tableau
                        formatted_csv.items.push({ type: row[0], content: row[1], name: row[2], url: row[3], options: row[4].split(","), style: row[5].split(","), placeholder: row[6], maxlength: row[7], answertype: row[8], items: items });
                    }
                }
                importData(formatted_csv);
            }
            reader.readAsText($("#imported_data")[0].files[0]);
        }
        // FORMAT JSON
    } else if (regex_json.test($("#imported_data").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                let formatted_json = e.target.result;
                // On formatte en mode JSON
                try {
                    formatted_json = JSON.parse(formatted_json);
                    // On importe les données dans le générateur
                    importData(formatted_json);
                    success = true;
                } catch (e) {
                    success = false;
                    console.log(e);
                    message = "Votre fichier est invalide. Merci de réessayer.";
                    alertMsg(message, "error");
                }
            }
            reader.readAsText($("#imported_data")[0].files[0]);
        }
    }
    else {
        message = "Format de fichier incorrect";
        alertMsg(message, "error");
    }
});

// ANCHOR Générer un exemple
$('#generate-example').on('click', function () {
    let formatted_json = $.getJSON(baseUrl + '/templates/form_template.json')
        .done(function (json) {
            importData(json);
        })
        .fail(function (jqxhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            message = "Erreur dans le chargement de l'exemple";
            alertMsg(message, "error");
        })
});

function importData(form) {

    // On modifie les informations de base du formulaire
    $("#generated-form").attr('class', 'theme-' + form.style);
    $("#generated-form").attr('action', form.url);
    $("#generated-form").attr('method', form.options.method);
    $("#form-title").text(form.title);
    if (form.options.reset && !$('#reset-button').prop('checked')) {
        $("#reset-button").click();
    }

    // On enlève le contenu précédent sauf le titre
    $("#full-form .element-container").remove();
    $('.side-tool').hide();
    $("#actions-interface").hide();

    // On ajoute les items du formulaire uploadé
    let items_list = form.items;
    Object.keys(items_list).forEach(key => {
        let element_type_name = items_list[key].type;
        element_type_name = element_type_name.replace(/-/g, "_");
        element_type_name = "insert-" + element_type_name;
        // Si ce n'est pas un élément question
        if (element_types["type-layout"][element_type_name]) {
            addElement("type-layout", element_type_name);
            // Si l'élément contient du texte
            if (items_list[key].content) {
                $('.content-editable-selected .layout-text').text(items_list[key].content);
                $('.content-editable-selected a').attr('href', items_list[key].url);
            }
            if (items_list[key].items) {
                let item_options_list = items_list[key].items;
                for (var i = 0; i < item_options_list.length; i++) {
                    if (item_options_list[i]) {
                        let base_item = $('.content-editable-selected ul, .content-editable-selected ol').html();
                        $('.content-editable-selected ul, .content-editable-selected ol').append("<li>" + item_options_list[i] + "</li>");
                    }
                }
            }
        } else if (element_types["type-question"][element_type_name]) {
            addElement("type-question", element_type_name);
            if (items_list[key].content) {
                $('.content-editable-selected .label-text').text(items_list[key].content);
                // Placeholder
                $('.content-editable-selected input, .content-editable-selected textarea').attr('placeholder', items_list[key].placeholder);
                $('.content-editable-selected select option').first().text(items_list[key].placeholder);
                // Name
                $('.content-editable-selected input, .content-editable-selected textarea, .content-editable-selected select').attr('name', items_list[key].name);
                // Maxlength
                $('.content-editable-selected input, .content-editable-selected textarea').attr('maxlength', items_list[key].maxlength);
                // Options
                if (items_list[key].options) {
                    if (items_list[key].options.includes("required") && element_type_name != "insert-one_answer" && element_type_name != "insert-many_answer") {
                        $('.content-editable-selected input, .content-editable-selected textarea, .content-editable-selected select').attr('required', 'required');
                        // Attribut required : petite étoile à côté du label
                        var required_star = element_types["type-special"]["make-required"];
                        $(required_star).insertAfter($('.content-editable-selected').find(".label-text"));
                        $('.content-editable-selected').addClass('field-required');
                        required_count += 1;
                    }
                    if (items_list[key].options.includes("multiple-choice")) {
                        $('.content-editable-selected select').attr('multiple', 'multiple');
                    }
                }
                // Type de réponse input text (email, nombre...)
                if (items_list[key].answertype) {
                    $('.content-editable-selected input').attr('type', items_list[key].answertype);
                }
                // On retire les options initiales ajoutées automatiquement 
                $('.content-editable-selected option').last().remove();
                if (element_type_name != "insert-binary_answer") {
                    $('.content-editable-selected fieldset label').last().remove();
                } else if (items_list[key].items[0]) {
                    $('.content-editable-selected fieldset .label-option-text').text(items_list[key].items[0].name);
                    $('.content-editable-selected fieldset input').attr('name', items_list[key].items[0].value);
                }

            } else {
                success = false;
            }
            if (items_list[key].items && element_type_name != "insert-binary_answer") {
                let item_options_list = items_list[key].items;
                for (var i = 0; i < item_options_list.length; i++) {
                    if (item_options_list[i].name) {
                        addOption(element_type_name);
                        $('.content-editable-selected .label-option-text').last().text(item_options_list[i].name);
                        $('.content-editable-selected option').last().text(item_options_list[i].name);
                        $('.content-editable-selected input, .content-editable-selected option').last().attr('value', item_options_list[i].value);
                        $('.content-editable-selected input').attr('name', items_list[key].name);
                        element_selected_container = $('.content-editable-selected').last();
                        previous_element = element_selected_container.prev();
                        next_element = element_selected_container.next();

                        refreshMoveButtons(previous_element, next_element, true);
                    }
                }
            }
        } else {
            success = false;
        }
    });

    // On ajoute le message d'information sur les champs requis s'il y en a 
    if(required_count > 0 && $(".indicator-required").length() == 0) {
        var required_indicator = element_types["type-special"]["indicator-required"];
        $(required_indicator).insertAfter($("#form-title"));
    }

    // On rend le contenu modifiable 
    getOldContent();

    if (success) {
        message = "Données récupérées";
        alertMsg(message, "success");
    } else {
        message = "Erreur dans l'importation des données";
        alertMsg(message, "error");
    }

    if($('.content-editable-selected').last()){
        $('.content-editable-selected').last().click();
    }
}
