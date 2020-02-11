// Imports
import { alertMsg } from "../app";
import { getOldContent, addElement, addOption, element_types, refreshMoveButtons } from "./form";

// Variables
let message;
let success = true;
let element_selected_container;
let previous_element;
let next_element;
let required_count = 0;

// ORDRE DES VALEURS
// Type, Texte du label, Nom/Name, Lien, Options (reset/post), Theme/Style, Maxlength 
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
    let formatted_json = $.getJSON(baseUrl + '/templates/menu_template.json')
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

    // On modifie les informations de base du menu
    $("#generated-menu").attr('class', 'theme-' + form.style);
    $("#generated-menu").attr('action', form.url);
    $("#generated-menu").attr('method', form.options.method);
    $("#menu-title").text(form.title);
    if (form.options.reset && !$('#reset-button').prop('checked')) {
        $("#reset-button").click();
    }

    // On enlève le contenu précédent sauf le titre
    $("#full-menu .element-container").remove();
    $('.side-tool').hide();
    $("#actions-interface").hide();

    // On ajoute les items du menu uploadé
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
                        let base_item = $('.content-editable-selected ul').html();
                        $('.content-editable-selected ul').append("<li>" + item_options_list[i] + "</li>");
                    }
                }
            }
        }else {
            success = false;
        }
    });

    // On ajoute le message d'information sur les champs requis s'il y en a 
    if(required_count > 0 && $(".indicator-required").length() == 0) {
        var required_indicator = element_types["type-special"]["indicator-required"];
        $(required_indicator).insertAfter($("#menu-title"));
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