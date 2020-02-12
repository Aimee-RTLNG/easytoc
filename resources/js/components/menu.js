// ANCHOR Données initiales
import { lang } from "../app";

// ANCHOR Données initiales
let element;
let input;
let intitule;
let message;
let previous_element;
let next_element;

let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');


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
    if( lang == "en" ){
            $('#chara-title-remains').text(remain + " characters left");
    } else {
            $('#chara-title-remains').text(remain + " caractères restants");
    }
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#title-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Liste de tous les tags possibles dans un formulaire
const tags_list = ["ul", "li", "a"];


// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
export let element_types = {
    "type-menu": {
        "insert-menu": "\n\t<ul data-tag='menu' contenteditable='true'></ul>",
        "insert-sous-menu": "\n\t\t<li data-tag='sous-menu' contenteditable='true'></li>"    
    },
    "type-layout": {
        "insert-link": "<a href='' contenteditable='true' class='layout-text' data-tag='label-text'>Nom du lien</a>"
    } 
};


export function getOldContent() {
    // On rend l'ancien contenu modifiable
    $('#full-menu #menu-title, #full-menu, #full-menu, #full-menu ul, #full-menu ul li, #full-menu li, #full-menu ul a, #full-menu ul li a').attr('contenteditable', true);
    // On récupère les paramètres

    // Theme
    let actual_theme = $("#generated-menu").attr('class');
    actual_theme = actual_theme.replace('theme-', '');
    let selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
    selected_theme.prop('checked', true);

    // Titre
    let actual_title = $("#menu-title").text();
    $("#menu-creator-title").val(actual_title);

    // Methode
    let actual_method = $("#generated-menu").attr('method');
    $("#menu-creator-method").val(actual_method);

    // Lien
    let actual_link = $("#generated-menu").attr('action');
    $("#menu-creator-link").val(actual_link);

    // Option de réinitialisation
    let actual_reset = $("#content-created-blueprint").find('input[type=reset]');
    if (actual_reset.length > 0) {
        $('#reset-button').prop('checked', true);
    }
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


// ANCHOR Initialisation du meu
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
$('#menu-creator-title').on('keyup', function () {
    $('#menu-title').text($('#menu-creator-title').val());
    updatecontent();
});

// ANCHOR Changement de lien
$('#menu-creator-link').on('keyup', function () {
    $('#generated-menu').attr("action", $('#menu-creator-link').val());
    updatecontent();
});



// APPEND d'une liste pour le menu
/*
$('#insert-menu').on('click', function () {
    $("insert-menu").append("<ul contenteditable='true'>Test</ul>");
});


$('#insert-sous_menu').on('click',  function () {
    $("insert-menu").appendChild("<ul><li contenteditable='true'> </li></ul>");
});
*/


// Ajout de menu
export function addMenu() {
    let ul = element_types["type-menu"]["insert-menu"];
    let li = element_types["type-menu"]["insert-sous-menu"];
    menu_html = "\n\t\t\t\t" + menu_html + "\n\t\t\t";
    menu_header_html = "\n\t\t\t\t" + menu_header_html + "\n\t\t\t";



    
    // on récupère l'ancien contenu 
    let previous_content = $('#content-created-blueprint #full-menu').html();
    
    // en fonction du type , différentes actions 
    let actions_content = $('#form-actions').html();

    // on ajoute le contenu sauf si c'est lié au bouton RESET (doit être ajouté ou enlevé)
    if (element_type_name == "reset-button") {
        if (actions_content.indexOf('type="reset"') > -1 || actions_content.indexOf("type='reset'") > -1) {
            $('#form-actions input[type="reset"]').remove();
        } else {
            let previous_content = $('#form-actions').html();
            $('#form-actions').html(element_content + actions_content);
        }
        actions_content = $('#form-actions').html();
    } else {
        // et on y ajoute l'élément voulu
        $('#content-created-blueprint #full-menu').html(previous_content + element_content);
    }
    let new_element = $('.element-container').last();
    $(new_element).find('[contenteditable=true]').first().focus();

    message = "Element ajouté";
    alertMsg(message, "success");
    updatecontent();

}

// ANCHOR Ajout d'un élément
$('.add-element').on('click', function () {
    let element_type = $(this).attr("class");
    let element_type_name = $(this).attr("id");
    addElement(element_type, element_type_name);
});


// Ajout de sous-menu
/*
export function addSousMenu() {
    let add_sous_menu = element_types["type-container"]["insert-sous-menu"];
    sousMenu_html = "\n\t\t\t\t" + sous-menu_html + "\n\t\t\t";
    sousMenu_header_html = "\n\t\t\t\t" + sous-menu_header_html + "\n\t\t\t";
}
*/


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
         element = $(".content-editable-selected").removeClass('content-editable-selected');
         element = element.detach();
    },
    undo: function () {
        element.appendTo("#full-menu");
    }
});

// ANCHOR Sauvegarde définitive
$('#btn-save-project').on('click', function () {
    updatecontent();
    let post_url = $("#full-menu-post").attr('action');
    console.log(post_url);
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

// ANCHOR Mise en forme du texte (gras, italic, underline...)
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


// ANCHOR Activer / désactiver les boutons de déplacement
export function refreshMoveButtons(previous_element, next_element, option) {
    if (option) {
        if (previous_element) {
            if (previous_element.attr("disabled") != "true" && previous_element.attr('data-tag') == "option") {
                $('#action-move-ul-right').removeAttr('disabled');
            } else {
                $('#action-move-ul-right').attr('disabled', true);
            }
            if (next_element.attr("disabled") != "true" && next_element.attr('data-tag') == "option") {
                $('#action-move-ul-left').removeAttr('disabled');
            } else {
                $('#action-move-ul-left').attr('disabled', true);
            }
        } else {
            $('#action-move-ul-right').attr('disabled', true);
            $('#action-move-ul-left').attr('disabled', true);
        }
    } else {
        if (previous_element) {
            if ((previous_element.attr("id") == "menu-title" || previous_element.hasClass("indicator-required")) || !$(previous_element).hasClass("element-container")) {
                $('#action-move--ul-up').attr('disabled', true);
            } else {
                $('#action-move-ul-up').removeAttr('disabled');
            }
            if (!$(next_element).hasClass("element-container")) {
                $('#action-move-ul-left').attr('disabled', true);
            } else {
                $('#action-move-ul-left').removeAttr('disabled');
            }
        } else {
            $('#action-move-ul-up').attr('disabled', true);
            $('#action-move-ul-left').attr('disabled', true);
        }
    }
}


// ANCHOR Theme
$('input[name="theme"]').on('change', function () {
    let theme = "theme-" + $(this).val();
    $('#generated-menu').attr('class', theme);
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