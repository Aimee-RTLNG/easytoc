// Imports
import { alertMsg } from "../app";
import { getOldContent, updateContent, removeCol, element_types } from "./table";

// Variables
let message;
let success = true;
let element_selected_container;
let previous_element;
let next_element;
let required_count = 0;

// ORDRE DES VALEURS
// Type; Title; Caption; Theme; Header top; Header left; Footer; Headers row;
// table; ""  ; ""     ; ""   ; true/false; true/false ; true/f; INT        ;
// Headers row > Nb de lignes de header horizontal


$('#import-data').on('click', function () {
    var regex_csv = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    var regex_json = /^([a-zA-Z0-9\s_\\.\-:])+(.json)$/;
    // FORMAT CSV
    if (regex_csv.test($("#imported_data").val().toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            let formatted_csv = { type: "", title: "", caption: "", options: "", theme : "", items: { thead : [], tbody : [], tfoot : [] }, size: [] };
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                var rows = data.split("\r\n");
                var filtered_rows = [];
                rows.forEach(function(element, index){
                    let row = element.split(";");
                    let row_empty = 0;
                    row.forEach(function(cell){
                        if(!cell){
                            row_empty = row_empty + 1;
                        }
                    });
                    if(row_empty < row.length){
                        filtered_rows.push(row);
                    }
                });
                for (var i = 1; i < filtered_rows.length; i++) {
                    let row = filtered_rows[i];
                    if (i == 1) {
                        // Première ligne : paramètres généraux
                        formatted_csv.type = row[0];
                        formatted_csv.title = row[1];
                        formatted_csv.caption = row[2];
                        formatted_csv.theme = row[3];
                        formatted_csv.options = {
                            header_top: row[4],
                            header_left: row[5],
                            footer: row[6]
                        };
                        formatted_csv.size = {
                            header_row: row[7]
                        };
                    } else if (i > 1) {
                        let row_type;
                        if(formatted_csv.options.header_top == 'true' && i <= parseInt(formatted_csv.size.header_row) + 1){  // On ajoute + 1 à cause de la ligne skippée 
                            row_type = "thead";
                            formatted_csv.items.thead.push(row);
                        }else if( i == filtered_rows.length - 1 && formatted_csv.options.footer == 'true'){
                            row_type = "tfoot";
                            formatted_csv.items.tfoot.push(row);
                        }else{
                            row_type = "tbody";
                            formatted_csv.items.tbody.push(row);
                        }
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
    let formatted_json = $.getJSON(baseUrl + '/templates/table_template.json')
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

function importData(table) {

    console.log(table);

    $("#generated-table #full-table").empty();
    $("#generated-table #table-title").text(table.title);
    $("#generated-table #full-table").append(element_types["type-container"]["insert-caption"]);
    
    // Caption
    $("#generated-table #table-caption span").text(table.caption);
    
    // Theme
    $("#generated-table").attr('class', 'theme-' + table.theme);

        // HEADER
        if(table.options.header_top == "true"){
            $('#central-header-button').prop('checked', true);
            $("#full-table").append(element_types["type-container"]["insert-header"]);
            table.items.thead.forEach(function(header_row, index){
                $("#full-table thead").append(element_types["type-container"]["insert-row"]);
                header_row.forEach(function(element, index){
                    $("#full-table thead tr").last().append(element_types["type-unique"]["insert-header-col"]);
                    $("#full-table thead tr th").last().text(element);
                });
            });
        }else{
            $('#central-header-button').prop('checked', false);
        }

        // BODY
        $("#full-table").append("<tbody></tbody>");
            table.items.tbody.forEach(function(body_row){
                $("#full-table tbody").append(element_types["type-container"]["insert-row"]);
                body_row.forEach(function(element, index){
                    if( index == 0 && table.options.header_left == "true"){
                        $("#full-table tbody tr").last().append(element_types["type-unique"]["insert-header-row"]);
                        $("#full-table tbody tr th").last().text(element);
                        $('#lateral-header-button').prop('checked', true);
                    }else{
                        $("#full-table tbody tr").last().append(element_types["type-unique"]["insert-cell"]);
                        $("#full-table tbody tr td").last().text(element);
                    }
                });
        });

        // FOOTER
        if(table.options.footer == "true" ){
            $('#footer-button').prop('checked', true);
            $("#full-table").append(element_types["type-container"]["insert-footer"]);
            $("#full-table tfoot").append(element_types["type-container"]["insert-row"]);
            let footer_row = table.items.tfoot[0];
            footer_row.forEach(function(element, index){
                $("#full-table tfoot tr").last().append(element_types["type-unique"]["insert-cell"]);
                $("#full-table tfoot tr td").last().text(element);
            });
        }

    // On rend le contenu modifiable 
    getOldContent();

    // On supprime les lignes vides
    $('#full-table tbody tr').each(function() {
        if(!$(this).text()){
            $(this).remove();
        }
    });

    // On supprime les lignes vides
    $("#full-table tbody tr td, #full-table tbody tr th").each(function (i, element) {
        let selected_cell_index = $(element).parent().find("td, th").last().index();
        let selected_col = [];
        $("#full-table tr").each(function (i, element) {
            let actual_row = $("#full-table tr")[i];
            selected_col[i] = $(actual_row).find('th, td')[selected_cell_index];
        });
        let empty_col = false;
        selected_col.forEach(function(element){
            if(!$(element).text()){
                empty_col = true;
            }else{
                empty_col = false;
            }
        });
        if(empty_col){
            removeCol(selected_col);
        }
    });

    // Nb colonnes
    let nb_col = $("#full-table tbody tr").first().find('th, td').length;
    $('#table-col-nb').val(nb_col);

    // Nb lignes
    let nb_row = $("#full-table tr").length;
    $('#table-row-nb').val(nb_row);

    if (success) {
        message = "Données récupérées";
        alertMsg(message, "success");
    } else {
        message = "Erreur dans l'importation des données";
        alertMsg(message, "error");
    }

    updateContent();
    $('#full-table tr td').last().focus();
}



