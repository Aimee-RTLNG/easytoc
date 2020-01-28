// ANCHOR Données initiales
let element;
let element_selected_container;
let input;
let intitule;
let previous_col;
let next_col;
let previous_row;
let next_row;
let message;
let previous_cell;
let selected_cell;
let next_cell;
let cell_index;
let selected_cell_index;
let selected_col;
let selected_row;

let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');
let initial_content = '<div id="generated-table" class="theme-white">\n\t<span class="table-title table-text" id="table-title" contenteditable=true data-tag="title">Titre</span>\n\t<table data-tag="table" id="full-table">\n\t\t<caption class="table-caption" id="table-caption">\n\t\t\t<span class="table-text" contenteditable="true" data-tag="caption">Légende</span>\n\t\t</caption>\n\t\t<thead data-tag="header">\n\t\t\t<tr>\n\t\t\t\t<th class="table-header-cell cell-text" contenteditable="true" data-tag="cell-header" scope="col">Ceci est un test</th>\n\t\t\t\t<th class="table-header-cell cell-text" contenteditable="true" data-tag="cell-header" scope="col">Ceci est un test</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td contenteditable="true" data-tag="cell">Ceci est un test</td>\n\t\t\t\t<td contenteditable="true" data-tag="cell">Ceci est un test</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>';

// Imports
import { alertMsg } from "../../js/app";

// ANCHOR Caractères restants Description du projet
$('#desc-input').keypress(function (e) {
    var tval = $('#desc-input').val(),
        tlength = tval.length,
        set = $('#desc-input').attr('maxlength'),
        remain = parseInt(set - tlength);
    $('#chara-desc-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#desc-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Caractères restants Titre du projet
$('#title-input').keypress(function (e) {
    var tval = $('#title-input').val(),
        tlength = tval.length,
        set = $('#title-input').attr('maxlength'),
        remain = parseInt(set - tlength);
    $('#chara-title-remains').text(remain + " caractères restants");
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#title-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Liste de tous les tags possibles dans un tableau
const tags_list = ["table", "tr", "th", "td", "abbr"];

// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
var element_types = {
    "type-container": {
        "insert-header": "\n\t\t<thead class='table-head' data-tag='header'></thead>",
        "insert-row": "\n\t\t\t<tr class='table-row' data-tag='row'></tr>",
        "insert-footer": "\n\t\t<tfoot class='table-footer' data-tag='footer'></tfoot>"
    },
    "type-unique": {
        "insert-header-col": "\n\t\t\t\t<th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='col'>&#160</th>",
        "insert-header-row": "\n\t\t\t\t<th class='table-header-cell cell-text' contenteditable=true data-tag='cell-header' scope='row'>&#160</th>",
        "insert-cell": "\n\t\t\t\t<td class='table-cell cell-text' contenteditable=true data-tag='cell'>&#160</td>"
    }
};

export function getOldContent() {
    // On rend l'ancien contenu modifiable
    $('#full-table .cell-text').attr('contenteditable', true);
    $('#full-table .table-text').attr('contenteditable', true);

    // Theme
    let actual_theme = $("#generated-table").attr('class');
    actual_theme = actual_theme.replace('theme-', '');
    let selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
    selected_theme.prop('checked', true);

    // Titre
    let actual_title = $("#table-title").text();
    $("#table-creator-title").val(actual_title);

}

// ANCHOR Fonction de sauvegarde
function updatecontent() {

    // on récupère le contenu
    var blueprint_content = $('#content-created-blueprint').html();
    // on trie les éléments à ne pas inclure dans le code 
    blueprint_content = blueprint_content.replace(/ contenteditable="(.*?)\"/g, "");
    blueprint_content = blueprint_content.replace(/ disabled="(.*?)\"/g, "");
    blueprint_content = blueprint_content.replace(/ option-selected /g, "");
    blueprint_content = blueprint_content.replace(/ content-editable-selected/g, "");
    // on remplace les doubles sauts de lignes
    blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n");

    // on update le code par rapport au blueprint
    $('#raw-code').html(blueprint_content);
    var code_content = $('<div>').text($('#raw-code').text()).html();

    // prettify
    $("#formatted-code").html(PR.prettyPrintOne(code_content));
};

// ANCHOR Initialisation du tableau
if ($('#raw-code').val().length <= 0) {
    console.log("Création");
    $('#content-created-blueprint').html(initial_content);
    updatecontent();
} else {
    console.log("Modification");
    getOldContent();
    updatecontent();
}

// ANCHOR Changement de titre
$('#table-creator-title').on('keyup', function () {
    $('#table-title').text($('#table-creator-title').val());
    updatecontent();
});

// ANCHOR Changement de caption
$('#table-creator-caption').on('keyup', function () {
    $('#table-caption span').text($('#table-creator-caption').val());
    updatecontent();
});

// ANCHOR Changement du nombre de lignes via INPUT
$('#table-row-nb').on('change', function () {
    let new_nb_row = $(this).val();
    if(new_nb_row < 2){
        message = "A quoi sert un tableau sans lignes ?";
        alertMsg(message, "error");
        (this).val("2");
        return;
    }
    let actual_nb_row = $("#full-table").find('tr').length;
    if (new_nb_row > actual_nb_row) {
        let nb_new_row = new_nb_row - actual_nb_row;
        for (let i = 0; i < nb_new_row; i++) {
            addRow("down");
            message = "Ligne ajoutée";
            alertMsg(message, "success");
        }
    } else if (new_nb_row < actual_nb_row) {
        let nb_new_row = actual_nb_row - new_nb_row;
        for (let i = 0; i < nb_new_row; i++) {
            let is_removed = removeRow($("#full-table").find('tr').last());
            if (!is_removed) {
                break;
            } else {
                message = "Ligne supprimée";
                alertMsg(message, "success");
            }
        }
    }
    $('.content-editable-selected').focus();
    updatecontent();
});

// ANCHOR Changement du nombre de colonnes via INPUT
$('#table-col-nb').on('change', function () {
    let new_nb_col = $(this).val();
    if(new_nb_col < 2){
        message = "A quoi sert un tableau sans colonnes ?";
        alertMsg(message, "error");
        $(this).val("2");
        return;
    }
    let actual_nb_col = $("#full-table").find('tr').first().find('th').length;
    if (new_nb_col > actual_nb_col) {
        let nb_new_col = new_nb_col - actual_nb_col;
        for (let i = 0; i < nb_new_col; i++) {
            addCol("right");
            message = "Colonne ajoutée";
            alertMsg(message, "success");
        }
    } else if (new_nb_col < actual_nb_col) {
        let nb_new_col = actual_nb_col - new_nb_col;
        let actual_nb_row = $("#full-table").find('tr').length;
        let col_cells = [];
        for (let x = 0; x < nb_new_col; x++) {
            for (let i = 0; i < actual_nb_row; i++) {
                let actual_row = $("#full-table tr")[i];
                col_cells[i] = $(actual_row).find('th, td').last();
            }
            let col_removed = removeCol(col_cells);
            if (col_removed) {
                message = "Colonne supprimée";
                alertMsg(message, "success");
            } else {
                break;
            }
        }
    }
    $('.content-editable-selected').focus();
    updatecontent();
});

// Ajout de colonne
export function addCol(side) {
    let actual_nb_col = $("#full-table").find('tr').first().find('th').length;
    let row_html = element_types["type-container"]["insert-row"];
    let cell_header_html = element_types["type-unique"]["insert-header-col"];
    let cell_html =  element_types["type-unique"]["insert-cell"];
    cell_html = "\n\t\t\t\t" + cell_html + "\n\t\t\t";
    cell_header_html = "\n\t\t\t\t" + cell_header_html + "\n\t\t\t";
    if (side == "left") {
        if ($(".content-editable-selected").length) {
            cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index();
            $("#full-table tr").each(function (index, tr) {
                $(cell_html).insertBefore($(tr).find("td")[cell_index]);
                if (index == 0) {
                    $(cell_header_html).insertBefore($(tr).find("th")[cell_index]);
                }
            })
        } else {
            $("#full-table tr").each(function (index, tr) {
                $(cell_html).insertBefore($(tr).find("td").first());
                if (index == 0) {
                    $(cell_header_html).insertBefore($(tr).find("th").first());
                }
            })
        }
    } else if (side == "right") {
        if ($(".content-editable-selected").length) {
            cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index();
            $("#full-table tr").each(function (index, tr) {
                $(cell_html).insertAfter($(tr).find("td")[cell_index]);
                if (index == 0) {
                    $(cell_header_html).insertAfter($(tr).find("th")[cell_index]);
                }
            })
        } else {
            $("#full-table tr").each(function (index, tr) {
                $(cell_html).insertAfter($(tr).find("td").last());
                if (index == 0) {
                    $(cell_header_html).insertAfter($(tr).find("th").last());
                }
            })
        }
    }
}

// Ajout de ligne
export function addRow(side) {
    let inserted_row;
    let actual_nb_col = $("#full-table").find('tr').first().find('th').length;
    let row_html = element_types["type-container"]["insert-row"];
    let col_header = $('#lateral-header-button').prop('checked');
    // Ligne au dessus
    if (side == "up") {
        if ($('.content-editable-selected').length) {
            $(row_html + "\n\t\t\t").insertBefore($(".content-editable-selected").closest('tr'));
            inserted_row = $(".content-editable-selected").closest('tr').prev();

        } else {
            $(row_html + "\n\t\t\t").insertBefore($("#full-table").find('tbody tr').first());
            inserted_row = $("#full-table").find('tbody tr').first();
        }
    }
    // Ligne en dessous
    else if (side == "down") {
        if ($('.content-editable-selected').length) {
            $(row_html + "\n\t\t\t").insertAfter($(".content-editable-selected").closest('tr'));
            inserted_row = $(".content-editable-selected").closest('tr').next();

        } else {
            $(row_html + "\n\t\t\t").insertAfter($("#full-table").find('tr').last());
            inserted_row = $("#full-table").find('tbody tr').last();
        }
    }
    // On ajoute les colonnes
    for (let i = 0; i < actual_nb_col; i++) {
        let cell_html;
        if (col_header && i == 0) {
            cell_html = element_types["type-unique"]["insert-header-row"];
        } else {
            cell_html = element_types["type-unique"]["insert-cell"];
        }
        inserted_row.append("\n\t\t\t\t" + cell_html + "\n\t\t\t");
    }
}

// Suppression de ligne
function removeRow(row) {
    // On vérifie que la ligne soit vide
    let is_filled = false;
    let actual_nb_col = row.find('td, th').length;
    for (let i = 0; i < actual_nb_col; i++) {
        let actual_cell = row.find('td, th')[i];
        if ($(actual_cell).text().trim()) {
            is_filled = true;
        }
    }
    // Si la ligne est remplie : on demande confirmation
    if (is_filled) {
        if (confirm('Attention : il y a du contenu dans la ligne en question. Voulez-vous vraiment supprimer ?')) {
            row.remove();
            return true;
        }
        // Si on annule la suppression
        else {
            $("#table-row-nb").val($("#full-table").find('tr').length);
            return false;
        }
    }
    // Si il n'y a rien : on supprime
    else {
        row.remove();
        return true;
    }
}

// Déplacement de ligne
function moveRow(side){
    if(side == "up"){
        $(selected_row).insertBefore(previous_row);
    }else if(side == "down"){
        $(selected_row).insertAfter(next_row);
    }
}

// Déplacement de colonne
function moveCol(side){
    let col_id = selected_cell_index;
    let cols;
    let rows = $('#full-table tr');

    if(side == "left"){
        rows.each(function(){
            cols = $(this).children('th, td');
            cols.eq(col_id).detach().insertBefore(cols.eq(col_id-1));
        });

    }else if(side == "right"){
        rows.each(function(){
            cols = $(this).children('th, td');
            cols.eq(col_id).detach().insertAfter(cols.eq(col_id+1));
        });
    }
}

function moveCell(side){
    let text_cell = $(".content-editable-selected").text();
    let text_other;
    let other_cell;

    if(side == "up"){
        other_cell = $(".content-editable-selected").parent().prev().find('td, th')[selected_cell_index];
        text_other = $(other_cell).text();
    }else if(side == "down"){
        other_cell = $(".content-editable-selected").parent().next().find('td, th')[selected_cell_index];
        text_other = $(other_cell).text();
    }else if(side == "left"){
        other_cell = $(".content-editable-selected").prev();
        text_other = $(other_cell).text();
    }else if(side == "right"){
        other_cell = $(".content-editable-selected").next();
        text_other = $(other_cell).text();
    }

    $(".content-editable-selected").text(text_other);
    $(other_cell).text(text_cell);
    $(other_cell).focus();
}

function mergeCell(side, cell, other_cell){
    if(side == "row"){
        let previous_colspan;
        if($(cell).attr('colspan')){
            previous_colspan = $(cell).attr('colspan')
        }else{
            previous_colspan = 1;
        }
        $(cell).attr('colspan', previous_colspan+1);
        $(other_cell).detach();
    }else if(side == "col"){
        let previous_rowspan;
        if($(cell).attr('rowspan')){
            previous_rowspan = $(cell).attr('rowspan');
        }else{
            previous_rowspan = 1;
        }
        $(cell).attr('rowspan', previous_rowspan+1);
        $(other_cell).detach();
    }

}

function splitCell(cell){
    if($(cell).attr('rowspan')){
        // TODO Enlever cet attribut
        // Ajouter une case à droite
    }
    if($(cell).attr('colspan')){
        // TODO Enlever cet attribut
        // Ajouter une case en bas
    }
}

// Suppression de colonne
function removeCol(cells) {
    // ATTENTION : cells doit être un array d'item
    if (Array.isArray(cells)) {
        // On vérifie que la ligne soit vide
        let is_filled = false;
        cells.forEach(function (item, index) {
            let actual_cell = item;
            if ($(actual_cell).text().trim()) {
                is_filled = true;
            }
        });
        // Si la ligne est remplie : on demande confirmation
        if (is_filled) {
            if (confirm('Attention : il y a du contenu dans la colonne en question. Voulez-vous vraiment supprimer ?')) {
                cells.forEach(function (item, index) {
                    let actual_cell = item;
                    actual_cell.remove();
                });
                return true;
            }
            // Si on annule la suppression
            else {
                $("#table-col-nb").val($("#full-table").find('tr').first().find('th').length);
                return false;
            }
        }
        // Si il n'y a rien : on supprime
        else {
            cells.forEach(function (item, index) {
                let actual_cell = item;
                actual_cell.remove();
            });
            return true;
        }
    } else {
        console.warn('Erreur dans la suppression de colonne : not an array.');
        return false;
    }
}

$('.cell-action').on('click', function () {
    let element_action = $(this).attr("data-action");
    let nb_col = $('#table-col-nb').val();
    let nb_row = $('#table-row-nb').val();

    // Vider la case
    if (element_action == "empty-cell") {
        $('.content-editable-selected').text("");

    // DEPLACER LIGNE VERS LE HAUT
    } else if (element_action == "move-row-up") {
        moveRow("up");

    // DEPLACER LIGNE VERS LE BAS
    } else if (element_action == "move-row-down") {
        moveRow("down");

    // DEPLACER COLONNE VERS LA DROITE
    } else if (element_action == "move-col-right") {
        moveCol("right");

    // DEPLACER COLONNE VERS LA GAUCHE
    } else if (element_action == "move-col-left") {
        moveCol("left");
       
    // DEPLACER CASE VERS LE HAUT
    } else if (element_action == "move-cell-up") {
        moveCell("up");

    // DEPLACER CASE VERS LE BAS
    } else if (element_action == "move-cell-down") {
        moveCell("down");

    // DEPLACER CASE VERS LA DROITE
    } else if (element_action == "move-cell-right") {
        moveCell("right");

    // DEPLACER CASE VERS LA GAUCHE
    } else if (element_action == "move-cell-left") {
        moveCell("left");

    } else if (element_action == "merge-right") {
        if($('.content-editable-selected').next().length){
            mergeCell("row", $('.content-editable-selected'), $('.content-editable-selected').next());
        }else{
            message = "Fusion impossible : pas de case à droite";
            alertMsg(message, "error");
        }

    } else if (element_action == "merge-down") {
        let other_cell = next_row.find('td, th')[selected_cell_index];
        if(next_row.length){
            mergeCell("col", $('.content-editable-selected'), other_cell);
        }else{
            message = "Fusion impossible : pas de case en bas";
            alertMsg(message, "error");
        }

    // TODO ATTENTION à la fusion avec des cellules déjà fusionnées !!

    // Supprimer la colonne
    }else if (element_action == "delete-col") {
        if (selected_col && nb_col > 2) {
            let col_removed = removeCol(selected_col);
            if (col_removed) {
                $('#table-col-nb').val(parseInt(nb_col) - 1);
                message = "Colonne supprimée";
                alertMsg(message, "success");
            }
        }else{
            message = "A quoi sert un tableau sans colonnes ?";
            alertMsg(message, "error");
        }
    }
    // Supprimer la ligne
    else if (element_action == "delete-row") {
        if (selected_row && nb_row > 2) {
            let row_removed = removeRow(selected_row);
            if (row_removed) {
                $('#table-row-nb').val(parseInt(nb_row) - 1);
                message = "Colonne supprimée";
                alertMsg(message, "success");
            }
        }else{
            message = "A quoi sert un tableau sans lignes ?";
            alertMsg(message, "error");
        }
        // TODO unfocus total;
    }

    $('.content-editable-selected').focus();
    updatecontent();
});

// ANCHOR Ajout d'un élément
$('.add-element').on('click', function () {
    let element_type = $(this).attr("id");
    let nb_col = $('#table-col-nb').val();
    let nb_row = $('#table-row-nb').val();

    // AJOUT DE LIGNE EN HAUT
    if (element_type == "insert-row_up") {
        addRow("up");
        $('#table-row-nb').val(parseInt(nb_row) + 1);

        // AJOUT DE LIGNE EN BAS
    } else if (element_type == "insert-row_down") {
        addRow("down");
        $('#table-row-nb').val(parseInt(nb_row) + 1);

    // AJOUT DE COL A DROITE
    } else if (element_type == "insert-col_right") {
        addCol("right");
        $('#table-col-nb').val(parseInt(nb_col) + 1);

    // AJOUT DE COL A DROITE
    } else if (element_type == "insert-col_left") {
        addCol("left");
        $('#table-col-nb').val(parseInt(nb_col) + 1);

    // PIED DE TABLEAU 
    } else if (element_type == "footer-button") {
       
        if ($(this).prop('checked')) {
            // On active le footer
            let footer_html = element_types["type-container"]["insert-footer"];
            $('#full-table').append(footer_html);

            // On ajoute une ligne 
            let row_html = element_types["type-container"]["insert-row"];
            $('#full-table tfoot').append(row_html);

            // On ajoute les cases
            let cell_html = element_types["type-unique"]["insert-cell"];
            let cols = $('#full-table tbody tr').first().find('td, th').length;
            for(let x = 0; x < cols; x++){
                $('#full-table tfoot tr').append(cell_html);
            }
            message = "Pied de tableau ajouté";
            alertMsg(message, "success");
        }else{
            // On enlève le footer (déjà activé)
            let is_removed = removeRow($("#full-table tfoot tr").last());
            if (is_removed) {
                $("#full-table tfoot").remove();
                message = "Pied de tableau supprimée";
                alertMsg(message, "success");
            }
        }

    // PREMIERE COLONNE EN HEADER
    } else if (element_type == "lateral-header-button") {
        let rows = $('#full-table').find('tr');
        if ($(this).prop('checked')) {
            rows.each(function (index) {
                if (index != 0) {
                    let new_header = $(this).find('th, td').first();
                    let old_text = $(new_header).text();
                    let new_cell_html = element_types["type-unique"]["insert-header-row"];
                    $(new_header).replaceWith(new_cell_html);
                    $(new_header).text(old_text);
                    $(this).find('th').first().text(old_text);
                }
            });
        } else {
            rows.each(function (index) {
                if (index != 0) {
                    let new_cell = $(this).find('th, td').first();
                    let old_text = $(new_cell).text();
                    let new_cell_html = element_types["type-unique"]["insert-cell"];
                    $(new_cell).replaceWith(new_cell_html);
                    $(this).find('td').first().text(old_text);
                }
            });
        }
    }

    $('.content-editable-selected').focus();
    updatecontent();

});

// ANCHOR Sauvegarde définitive
$('#btn-save-project').on('click', function () {
    updatecontent();
    let post_url = $("#full-form-post").attr('action');
    $.ajax({
        method: "POST",
        url: post_url,
        data: {
            "_token": csrf_token,
            "type_id": type_id,
            "user_id": user_id,
            "title": $('#title-input').val(),
            "description": $('#desc-input').val(),
            "html": $('#raw-code').val()
        }
    }).done(function (msg) {
        console.log(msg);
        window.location.href = "profile/" + user_id + "/view";
        $("#title-input").removeClass('required-failed');
    }).fail(function (xhr, status, error) {
        console.log(xhr.responseText);
        console.log(status);
        console.log(error);
        // Erreur
        if (!$('#title-input').val()) {
            $("#title-input").addClass('required-failed');
            $("#title-input").focus();
        }
        message = "Votre projet n'a pas de titre : veuillez remplir le champ en rouge.";
        alertMsg(message, "error");
    });
})


// ANCHOR Action sur l'élement
let element_select;
$(document.body)

    .off('keyup') // ré-initialisation

    // Quand on sélectionne un élément éditable
    .on('focus', '[contenteditable=true]', function (e) {

        // on récupère l'élément sélectionné et on focus sur l'élément parent
        if (e.target) {
            $(".content-editable-selected").removeClass("content-editable-selected");
            element_selected_container = e.target;
        }

        $(element_selected_container).addClass("content-editable-selected");

        let tag = $(this).attr('data-tag');
        if (tag != "title" && tag != "caption") { // si ce n'est pas le titre ou la caption

            $('.cell-action').removeAttr('disabled');
            let cell_width = parseInt($('.content-editable-selected').css("width").replace("px", ""));
            let position_left = parseInt($('.content-editable-selected').position().left) + 15;
            let position_top = $('.content-editable-selected').position().top + 100 + "px";
            $('.side-tool.vertical-tools').css("margin-top", position_top);
            $('.side-tool.horizontal-tools').css("margin-left", position_left);
            $('.side-tool.horizontal-tools').css("width", cell_width);

            // Side tool : déplacemet haut bas et suppression 
            $('.side-tool').show();

            // Si l'élément est dans le header
            let parent_tag = $('.content-editable-selected').parent().parent().prop("tagName");
            if (parent_tag == "THEAD" || parent_tag == "TFOOT") {
                $('#insert-row_up').attr('disabled', true);
                $('#insert-row_down').attr('disabled', true);
                $('.side-tool.vertical-tools').hide();
                $('.action-delete-row').attr('disabled', true);
            }
            // Si l'élément est un header latéral
            else if ($('.content-editable-selected').hasClass('table-header-cell')) {
                $('#insert-col_left').attr('disabled', true);
            }
            // Si l'élément n'est ni un header horizontal ni vertical
            else {
                $('#insert-col_left').removeAttr('disabled');
                $('#insert-row_up').removeAttr('disabled');
                $('#insert-row_down').removeAttr('disabled');
            }

            // Gestion des lignes
            selected_row = $(".content-editable-selected").parent();
            previous_row = $(".content-editable-selected").parent().prev("tr");
            next_row = $(".content-editable-selected").parent().next("tr");

            // Si il n'y a pas de ligne au dessus, on ne peut pas le déplacer vers le haut
            if (previous_row.length == 0) {
                $('#action-move-up').hide();
                $('.action-move-cell-up').attr('disabled', true);
                $('.action-move-row-up').attr('disabled', true);
            } else {
                $('.action-move-cell-up').attr('disabled', false);
                $('.action-move-row-up').attr('disabled', false);
                $('#action-move-up').show();
            }

            // Si il n'y a pas de ligne en dessous, on ne peut pas le déplacer vers le bas
            if (next_row.length == 0) {
                $('#action-move-down').hide();
                $('.action-move-cell-down').attr('disabled', true);
                $('.action-move-row-down').attr('disabled', true);
            } else {
                $('.action-move-cell-down').attr('disabled', false);
                $('.action-move-row-down').attr('disabled', false);
                $('#action-move-down').show();
            }

            // Si il n'y a plus qu'une ligne
            if( previous_row.length == 0 && next_row.length == 0){
                $('.action-delete-row').attr('disabled', true);
            }else{
                $('.action-delete-row').attr('disabled', false);
            }

            // Gestion des cases
            next_cell = $(".content-editable-selected").next();
            previous_cell = $(".content-editable-selected").prev();
            selected_cell = $(".content-editable-selected");
            selected_cell_index = $(".content-editable-selected").parent().find(".content-editable-selected").index();

            // Gestion des colonnes 
            selected_col = [];
            previous_col = [];
            next_col = [];
            $("#full-table tr").each(function (i, element) {
                let actual_row = $("#full-table tr")[i];
                if(selected_cell_index - 1 >= 0){
                    previous_col[i] = $(actual_row).find('th, td')[selected_cell_index - 1];
                }
                selected_col[i] = $(actual_row).find('th, td')[selected_cell_index];
                if(selected_cell_index + 1 < $(actual_row).find('th, td').length){
                    next_col[i] = $(actual_row).find('th, td')[selected_cell_index + 1];
                }
            });

            // Si il n'y a plus qu'une colonne
            if( selected_row[0].cells.length <= 2 ){
                $('.action-delete-col').attr('disabled', true);
            }else{
                $('.action-delete-col').attr('disabled', false);
            }

            // Si il n'y a pas de colonne à gauche , on ne peut pas le déplacer vers la gauche
            // console.log(previous_col);
            if (previous_col.length == 0) {
                $('#action-move-left').hide();
                $('.action-move-cell-left').attr('disabled', true);
                $('.action-move-col-left').attr('disabled', true);
            } else {
                $('.action-move-cell-left').attr('disabled', false);
                $('.action-move-col-left').attr('disabled', false);
                $('#action-move-left').show();
            }

            // Si il n'y a pas de colonne à droite, on ne peut pas le déplacer vers la droite
            // console.log(next_col);
            if (next_col.length == 0) {
                $('.action-move-cell-right').attr('disabled', true);
                $('.action-move-col-right').attr('disabled', true);
                $('#action-move-right').hide();
            } else {
                $('.action-move-cell-right').attr('disabled', false);
                $('.action-move-col-right').attr('disabled', false);
                $('#action-move-right').show();
            }

            // Si la case a été merged
            if( $('.content-editable-selected').attr('colspan') || $('.content-editable-selected').attr('rowspan')){
                $('.action-split').attr('disabled', false);
            }else{
                $('.action-split').attr('disabled', true);
            }

        } else {
            // Si on a sélectionné le titre principal
            $('.cell-action').attr('disabled', true);
            $('.add-element').attr('disabled', true);
            $('.side-tool').hide();
        }

        updatecontent();
    })
    // ANCHOR Modification du texte via l'intérieur du formulaire
    .on('keyup', '#table-title', function () {

        $('#table-creator-title').val($('#table-title').text());
        updatecontent();

    })

    .on('keyup', '#table-caption', function () {

        $('#table-creator-caption').val($('#table-caption span').text());
        updatecontent();

    });


// ANCHOR Masquer les sidetools au changement d'onglet
$("#nav-code-tab").on('click', function () {
    $('.side-tool').hide();
    updatecontent();
})

// ANCHOR Fonction Undo/Redo suppression
function command(instance) {
    this.command = instance;
    this.done = [];

    this.execute = function execute() {
        this.command.execute();
        this.done.push(this.command);
    };
    this.undo = function undo() {
        var command = this.done.pop();
        command.undo();
    };
}

// ANCHOR Fonction Suppression
var deletecommand = new command({
    execute: function () {
        // element = $(".content-editable-selected").removeClass('content-editable-selected');
        // element = element.detach();
    },
    undo: function () {
        element.appendTo("#full-table");
    }
});

// ANCHOR Mise en tablee du texte (gras, italic, underline...)
$('.text-formatting').on("click", function () {
    // TODO NS_ERROR_FAILURE
    switch ($(this).attr('id')) {
        case 'element-bold':
            document.execCommand('bold');
            updatecontent();
            break;
        case 'element-italic':
            document.execCommand('italic');
            updatecontent();
            break;
        case 'element-underline':
            document.execCommand('underline');
            updatecontent();
            break;
        case 'justify-left':
            $('.content-editable-selected').attr('style', 'text-align: left');
            updatecontent();
            break;
        case 'justify-center':
            $('.content-editable-selected').attr('style', 'text-align: center');
            updatecontent();
            break;
        case 'justify-right':
            $('.content-editable-selected').attr('style', 'text-align: right');
            updatecontent();
            break;
    }
    updatecontent();
})

// ANCHOR Theme
$('input[name="theme"]').on('change', function () {
    let theme = "theme-" + $(this).val();
    $('#generated-table').attr('class', theme);
})

// ANCHOR Copier le contenu code 
$("#copy-raw-code, #copy-css-link").on('click', function () {
    message = "Code copié !";
    $(".copy-container button").text("Copier");
    $(this).text(message);
    alertMsg(message);
})
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code');