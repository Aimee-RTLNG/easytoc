// Imports
import { alertMsg } from "../app";
import { getOldContent, addElement, addOption } from "./form";

// Variables
let message;

// ORDRE DES VALEURS
// Type, Texte du label, Nom/Name, Lien, Options (reset/post), Theme/Style, Placeholder, Maxlength 
// Après ça : liste d'items si item présent dans l'élément (option) :  Item 1 Value 1 Item 2 Value 2...

$('#import-data').on('click', function () {
    var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/;
    if (regex_csv.test($("#imported_data").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            console.log('Format CSV');
            let formatted_csv = {type: "", title: "", url: "", options: "", style: "", items:[]};
            var reader = new FileReader();
            reader.onload = function (e) {
                var rows = e.target.result.split("\r\n");
                for (var i = 1; i < rows.length-1; i++) {
                    let row = rows[i].split(";");
                    if(i == 1){
                        // Première ligne : paramètres généraux
                        formatted_csv.type = row[0];
                        formatted_csv.title = row[1];
                        formatted_csv.url = row[3];
                        let form_options = row[4].split(",");
                        formatted_csv.options = {method : form_options[0], reset: form_options[1]};
                        formatted_csv.style = row[5];
                    }else if ( i > 1 ){
                        let items = [];
                        if(row[8]){
                            for (var y = 8; y < row.length; y=y+2) {
                                let item = {value : row[y+1], name:  row[y]};
                                items.push(item);
                            }
                        }
                        formatted_csv.items.push({type: row[0], content: row[1], name: row[2], url: row[3], options: row[4].split(","), style: row[5].split(","), placeholder: row[6], maxlength: row[7], items: items}); 
                    }
                }
                importData(formatted_csv);
            }
            reader.readAsText($("#imported_data")[0].files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else if (regex_json.test($("#imported_data").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            console.log('Format JSON');
            var reader = new FileReader();
            reader.onload = function (e) {
                let formatted_json = e.target.result;
                // On formatte en mode JSON
                formatted_json = JSON.parse(formatted_json)
                // On importe les données dans le générateur
                importData(formatted_json);
            }
            reader.readAsText($("#imported_data")[0].files[0]);
        } else {
            message = "Votre fichier est invalide. Merci de réessayer.";
            alertMsg(message, "error");
        }
    }
    else {
        message = "Format de fichier incorrect";
        alertMsg(message, "error");
    }
})

function importData(form) {
    console.log(form);
    message = "Données récupérées";

    // On modifie les informations de base du formulaire
    $("#generated-form").attr('class', 'theme-'+form.style);
    $("#generated-form").attr('action', form.url);
    $("#generated-form").attr('method', form.options.method);
    $("#form-title").text(form.title);
    if(form.options.reset && !$('#reset-button').prop('checked')){
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
        element_type_name = "insert-"+element_type_name;
        // Si ce n'est pas un élément question
        if(element_type_name == "insert-title" || element_type_name == "insert-paragraph" || element_type_name == "insert-link" || element_type_name == "insert-ordered_list" || element_type_name == "insert-unordered_list" || element_type_name == "insert-horizontal_rule"){
            addElement("type-layout", element_type_name);
            // Si l'élément contient du texte
            if(items_list[key].content){
                $('.content-editable-selected .layout-text').text(items_list[key].content);
                $('.content-editable-selected a').attr('href', items_list[key].url);
            }
            if(items_list[key].items){
                let item_options_list = items_list[key].items;
                for(var i = 0; i < item_options_list.length; i++){
                    if(item_options_list[i].name){
                        let base_item = $('.content-editable-selected ul, .content-editable-selected ol').html();
                        $('.content-editable-selected ul, .content-editable-selected ol').append("<li>"+item_options_list[i].name+"</li>");
                    }
                }
            }
        }else{
            addElement("type-question", element_type_name);
            if(items_list[key].content){
                $('.content-editable-selected .label-text').text(items_list[key].content);
                $('.content-editable-selected input, .content-editable-selected textarea').attr('placeholder', items_list[key].placeholder);
                $('.content-editable-selected input, .content-editable-selected textarea').attr('name', items_list[key].name);
                console.log(items_list[key]);
                // placeholder, options, etc...
            }
            if(items_list[key].items){
                let item_options_list = items_list[key].items;
                for(var i = 0; i < item_options_list.length; i++){
                    addOption(element_type_name);
                    $('.content-editable-selected .label-option-text').last().text(item_options_list[i].name);
                }
            }
        }
    });

    // On rend le contenu modifiable 
    getOldContent();

    alertMsg(message, "success");
}
