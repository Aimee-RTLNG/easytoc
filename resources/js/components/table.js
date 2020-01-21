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
let previous_case;
let selected_case;
let next_case;

let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');
let initial_content = '<div id="generated-table" class="theme-white">\n\t<span class="table-title table-text" id="table-title" contenteditable=true data-tag="title">Titre du tableau</span>\n\t<table data-tag="table" id="full-table">\n\t\t<caption class="table-caption" id="table-caption">\n\t\t\t<span class="table-text" contenteditable="true" data-tag="caption">Dinosaurs in the Jurassic period</span>\n\t\t</caption>\n\t\t<thead data-tag="header">\n\t\t\t<tr>\n\t\t\t\t<th contenteditable="true" data-tag="cell-header">Ceci est un test</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td contenteditable="true" data-tag="cell">Ceci est un test</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>';

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
        "insert-header": "<thead class='table-head'></thead>",
        "insert-row": "<tr class='table-row'></tr>",
        "insert-footer": "<tfoot class='table-footer'></tfoot>"
    },
    "type-unique" : {
        "insert-header" : "<th class='table-header-cell cell-text'></th>",
        "insert-cell" : "<td class='table-cell cell-text'></td>"
    }
};

export function getOldContent() {
    // On rend l'ancien contenu modifiable
    $('#full-table .cell-text').attr('contenteditable', true);
    $('#full-table .table-text').attr('contenteditable', true);

    // Theme
    let actual_theme = $("#generated-table").attr('class');
    console.log(actual_theme);
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

export function addElement(element_type) {
    
    // TODO

    console.log(element_type);

}

// ANCHOR Ajout d'un élément
$('.add-element').on('click', function () {
    let element_type = $(this).attr("id");
    addElement(element_type);
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
        // TODO Erreur
        if(!$('#title-input').val()){
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
        console.log(tag);
        if (tag != "title" && tag != "caption") { // si ce n'est pas le titre ou la caption

            $('.cell-action').removeAttr('disabled');

            let position_left = $('.content-editable-selected').position().right - $('.content-editable-selected').position().left;
            $('.side-tool.vertical-tools').css("margin-top", $('.content-editable-selected').position().top + "px");
            $('.side-tool.horizontal-tools').css("margin-left", position_left + "px");
    
            // Side tool : déplacemet haut bas et suppression 
            $('.side-tool').show();

        } else {
            // Si on a sélectionné le titre principal
            $('.cell-action').attr('disabled', 'true');
            $('.side-tool').hide();
        }

        updatecontent();
    })
    // quand on déselectionne un élement...
    .on('blur', '[contenteditable=true]', function (e) {
        // e.preventDefault();
        let element_select_before = window.getSelection().getRangeAt(0).startContainer;
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
            $(element_select).removeClass('text-justify');
            $(element_select).removeClass('text-center');
            $(element_select).addClass('text-left');
            updatecontent();
            break;
        case 'justify-center':
            $(element_select).removeClass('text-justify');
            $(element_select).removeClass('text-left');
            $(element_select).addClass('text-center');
            updatecontent();
            break;
        case 'justify-full':
            $(element_select).removeClass('text-left');
            $(element_select).removeClass('text-center');
            $(element_select).addClass('text-justify');
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