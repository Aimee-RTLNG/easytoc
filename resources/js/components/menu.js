// ANCHOR Données initiales

// On importe les variables et fonctions externes (qui sont définie dans app.js)
import { 
    lang,  // la variable lang est soit "en" soit "fr" et permet de définir le contenu des messages
    setSideWindow, // c'est un fonction qui permet d'ajuster la side tools box quand on scroll.
    alertMsg // fonction qui affiche le message pop up en bas à droite
} from "../app"; 

let element; 
let element_selected_container;
let previous_element; 
let selected_element;
let next_element;
let previous_sublink; 
let selected_sublink;
let next_sublink; 

let message; 

let user_id = $('input[name=user_id]').val(); 
let type_id = $('input[name=type_id]').val(); 
let csrf_token = $('meta[name="csrf-token"]').attr('content'); 

// ANCHOR Caractères restants Description du projet
// Permet d'afficher "x caractères restants" lorsque l'on écrit dans le textarea description
$('#desc-input').keypress(function (e) {
    var tval = $('#desc-input').val(),
        tlength = tval.length,
        set = $('#desc-input').attr('maxlength'),
        remain = parseInt(set - tlength);
    if( lang == "en" ){
        $('#chara-desc-remains').text(remain + " characters left");
    } else {
        $('#chara-desc-remains').text(remain + " caractères restants");
    }
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('#desc-input').val((tval).substring(0, tlength - 1))
    }
})

// ANCHOR Caractères restants Titre du projet
// Permet d'afficher "x caractères restants" lorsque l'on écrit dans l'input de titre
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

// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// Cette liste est hyper importante : chaque élément qu'on ajoute dans le contenu doit être listé ici : cela permet d'être sûr d'avoir toujours les bonnes classes
// et la bonne structure. 
// \t = tabulation,  \n = saut de ligne :: permet au code d'être indenté lors de la génération du menu
export let element_types; // En exportant ce tableau objet, on permet au fichier import_data_... de générer du contenu en fonction des données importées
// le fichier import_data_menu/form/table appelera donc un élément de se tableau grâce aux index (ne pas oublier d'importer cette variable dans le fichier import)
// par exemple, si dans le CSV, j'ai un élément de type 'link', alors il cherchera dans ce tableau objet element_types['type-layout']['insert-link]
if( lang == "en" ){
    element_types = {
        "type-info": {
            "insert-title": "\t<span contenteditable='true' id='menu-title' data-tag='menu-title' class='menu-title'>Mon menu</span>\n",
            "insert-img": "\t<div id='menu-logo' class='menu-logo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
            "insert-banner": "\t<div class='menu-logo menu-logo-solo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
            "insert-separator": "\t<span class='menu-separator'></span>\n",
        },
        "type-menu": {
            "insert-menu_link": '\t<div class="menu-item"><a href="/link" class="menu-link" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
            "insert-sub_link": '\t<div class="menu-item"><a href="/link" class="menu-link has-submenu" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
            "insert-sub_menu": '\t<div class="menu-submenu"><ul></ul></div>\n'
        }
    };
} else {
    element_types = {
        "type-info": {
            "insert-title": "\t<span contenteditable='true' id='menu-title' data-tag='menu-title' class='menu-title'>Mon menu</span>\n",
            "insert-img": "\t<div id='menu-logo' class='menu-logo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
            "insert-banner": "\t<div class='menu-logo menu-logo-solo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
            "insert-separator": "\t<span class='menu-separator'></span>\n",
        },
        "type-menu": {
            "insert-menu_link": '\t<div class="menu-item"><a href="/link" class="menu-link" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
            "insert-sub_link": '\t<div class="menu-item"><a href="/link" class="menu-link has-submenu" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
            "insert-sub_menu": '\t<div class="menu-submenu"><ul></ul></div>\n'
        }
    };
}

// FIXME A verifier
export function getOldContent() {
    // On rend l'ancien contenu modifiable
    $('#full-menu .menu-item-title').attr('contenteditable', true);
    $('#full-menu #menu-title').attr('contenteditable', true);
    
    // On récupère les paramètres
    // Theme
    let actual_theme = $("#generated-menu").attr('class');
    actual_theme = actual_theme.replace('theme-', '');
    let selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
    selected_theme.prop('checked', true);

    // Titre (non présent pour les menu)
    let actual_title = $("#full-menu #menu-title").text();
    $("#menu-creator-title").val(actual_title);

    // Lien (non présent pour les menu)
    let actual_link = $("#menu-logo").css('background-image');
    console.log(actual_link);
    $("#menu-creator-link").val(actual_link);

    // sublink de réinitialisation (non présent pour les menu)
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
    blueprint_content = blueprint_content.replace(/ content-editable-selected/g, "");
    // on remplace les doubles sauts de lignes
    blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n");

    // on update le code par rapport au blueprint
    $('#raw-code').html(blueprint_content);
    var code_content = $('<div>').text($('#raw-code').text()).html();

    // prettify (permet de rendre le code joli)
    $("#formatted-code").html(PR.prettyPrintOne(code_content));
};

// ANCHOR Initialisation du formulaire
if ($('#raw-code').val().length <= 0) {
    // Il n'y a aucun contenu précédent : on est donc en création à partir de 0
    updatecontent();
} else {
    // Il y a du contenu déjà crée : on est en modification ou en génération de contenu
    getOldContent();
    updatecontent();
}

// ANCHOR Changement de titre du menu
$('#menu-creator-title').on('keyup', function () {
    $('#full-menu #menu-title').text($('#menu-creator-title').val());
    updatecontent();
});

// ANCHOR Afficher ou non le titre du menu
$('#menu-creator-title-display').on('click', function () {
    if( $(this).is(":checked") ){
        $('#full-menu .menu-identity .menu-separator').before( element_types["type-info"]["insert-title"] );
        $('#full-menu .menu-identity #menu-title').text( $('#menu-creator-title').val() );
        if( $('#menu-creator-link-display').is(":checked") ){
            $('#full-menu .menu-identity #menu-logo').removeClass('menu-logo-solo');
            $('#full-menu .menu-identity').removeClass('hidden');
            $('#menubar-easytoc').removeClass('full-width');
        } else {
            $('#full-menu .menu-identity').removeClass('hidden');
            $('#menubar-easytoc').removeClass('full-width');
        }
    } else {
        $('#full-menu #menu-title').remove();
        if( $('#menu-creator-link-display').is(":checked") ){
            $('#full-menu .menu-identity #menu-logo').addClass('menu-logo-solo');
            $('#full-menu .menu-identity').removeClass('hidden');
            $('#menubar-easytoc').removeClass('full-width');
        } else {
            $('#full-menu .menu-identity').addClass('hidden');
            $('#menubar-easytoc').addClass('full-width');
        }
    }

});

// ANCHOR Changement de lien du logo
$('#menu-creator-link').on('keyup', function () {
    $("#menu-logo").css('background-image', 'url('+$('#menu-creator-link').val()+')');
    updatecontent();
});

// ANCHOR Afficher ou non le logo
$('#menu-creator-link-display').on('click', function () {
   if( $(this).is(":checked") ){
     $('#full-menu .menu-identity').prepend(element_types["type-info"]["insert-img"]);
     $('#full-menu .menu-identity #menu-logo').css('background-image', 'url('+$('#menu-creator-link').val()+')');
     if( !$('#menu-creator-title-display').is(":checked") ){
        $('#full-menu .menu-identity #menu-logo').addClass('menu-logo-solo');
        $('#full-menu .menu-identity').removeClass('hidden');
        $('#menubar-easytoc').removeClass('full-width');
     } else {
        $('#full-menu .menu-identity').removeClass('hidden');
        $('#menubar-easytoc').removeClass('full-width');
     }
   } else {
     $('#full-menu #menu-logo').remove();
     if( $('#menu-creator-title-display').is(":checked") ){
        $('#full-menu .menu-identity').removeClass('hidden');
        $('#menubar-easytoc').removeClass('full-width');
     } else {
        $('#full-menu .menu-identity').addClass('hidden');
        $('#menubar-easytoc').addClass('full-width');
     }
   }
});

// ANCHOR Fonction centrale !! Permet d'ajouter du contenu à l'espace de création
// Cette fonction se base sur la liste d'élément précédemment définis element_types 
export function addLink( type ) {
    // permettra d'identifier l'élément (lui donne un ID aléatoire)
    let element_id = Math.random().toString(36).substr(2, 9);

    // on récupère le type de l'élément
    if ( type == "link" ) {
        let added_content = element_types["type-menu"]["insert-menu_link"];
        let id_replace_regex = /REPLACEID/g;
        element_content = added_content.replace(id_replace_regex, element_id);
    } else if ( type == "sub_link" ) {
        let added_content = element_types["type-menu"]["insert-sub_link"];
        let id_replace_regex = /REPLACEID/g;
        element_content = added_content.replace(id_replace_regex, element_id);
    } else if ( type == "sub_menu" ) {
        let added_content = element_types["type-menu"]["insert-sub_menu"];
        let id_replace_regex = /REPLACEID/g;
        element_content = added_content.replace(id_replace_regex, element_id);
    }
}

// ANCHOR Ajout d'un élément : quand on clique sur un bouton avec la classe .add-element
$('.add-element').on('click', function () {
    let element_type = $(this).attr("class"); // récupère le type d'élément à ajouter
    let element_type_name = $(this).attr("id"); // récupère le nom spécifique d'élément à ajouter
    addElement(element_type, element_type_name); // on ajoute l'élement
    setSideWindow();
});

// ANCHOR Sauvegarde définitive (quand on clique sur le bouton d'enregistrement ) ( normalement à ne pas toucher )
$('#btn-save-project').on('click', function () {
    updatecontent();
    let post_url = $("#full-menu-post").attr('action');
    $.ajax({
        method: "POST",
        url: post_url,
        data: {
            "_token": csrf_token,
            "type_id": type_id,
            "user_id": user_id,
            "title": $('#title-input').val(),
            "description": $('#desc-input').val(),
            "html": $('#raw-code').text()
        }
    }).done(function (msg) {
        // console.log(msg);
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
        if( lang == "en" ){
            message = "Some informations are missing : please fill the empty fields.";
        } else {
            message = "Il manque des informations à votre projet : veuillez remplir les champs manquants.";
        }
        alertMsg(message, "error");
    });
})

// ANCHOR Action sur l'élement
let element_select;
$(document.body)

    .off('keyup') // ré-initialisation pour empêcher les écouteurs d'évenements de se lancer plusieurs fois

    // Empêcher la redirection
    .on('click', '#full-menu a', function (e) {
        e.preventDefault();
    })

    // Quand on clique sur un sous menu
    .on('click', '#full-menu .has-submenu li', function (e) {
        $('.content-editable-selected').removeClass('content-editable-selected');

        // $(this).closest('.element-container').addClass('content-editable-selected');
        $(this).addClass('content-editable-selected');

        selected__link = $(this).parent();
        previous_sublink = selected_sublink.prev();
        next_sublink = selected_sublink.next();

        updatecontent();
    })

    // Quand on sélectionne un élément éditable (c'est là le plus important)
    .on('focus', '[contenteditable=true]', function (e) {

        // on récupère les paramètres du lien 

        updatecontent();
    })
    // ANCHOR Modification du texte via l'intérieur du formulaire
    .on('keyup', '#full-menu #menu-title', function () {

        $('#menu-creator-title').val( $('#full-menu #menu-title').text().trim() );
        updatecontent();

    });

// ANCHOR Masquer les sidetools au changement d'onglet
$("#nav-code-tab").on('click', function () {
    updatecontent();
})

// ANCHOR Actions sur l'élément ciblé
$(".form-element-action").on('click', function (e) {


    updatecontent();

}).on('change', function (e) {


    updatecontent();

}).on('keyup', function (e) {

    updatecontent();

});

// ANCHOR Selection de tout le texte au clic
// NOTE Non utilisé : permet en gros de sélectionner tout le texte au clic sur un element contenteditabme
function selectText(element) {
    var sel, range;
    var el = element[0];
    if (window.getSelection && document.createRange) { //Browser compatibility
        sel = window.getSelection();
        if (sel.toString() == '') { //no text selection
            window.setTimeout(function () {
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range); //add Range to a Selection.
            }, 1);
        }
    } else if (document.selection) { //older ie
        sel = document.selection.createRange();
        if (sel.text == '') { //no text selection
            range = document.body.createTextRange(); //Creates TextRange object
            range.moveToElementText(el); //sets Range
            range.select(); //make selection.
        }
    }
};

// ANCHOR Fonction d'ajout d'sublink ( osef ça concerne pas les menus )
export function addlink() {
    


}

// ANCHOR Fonction de suppression d'sublink dans un select ( osef ça concerne pas les menus )
function deleteLink() {
    

}

// ANCHOR Fonction Undo/Redo suppression ( à ne pas toucher )
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
        element.appendTo("#full-form");
    }
});

// ANCHOR Mise en forme du texte (gras, italic, underline...) ( à ne pas toucher )
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

// ANCHOR Permet d'actualiser le thème choisi via les boutons radios en haut à droite ( à ne pas toucher )
$('input[name="theme"]').on('change', function () {
    let theme = "theme-" + $(this).val();
    $('#generated-menu').attr('class', theme);
    updatecontent();
})

// ANCHOR Copier le contenu code rapidement grâce aux boutons ( à ne pas toucher )
$("#copy-raw-code, #copy-css-link").on('click', function () {
    if( lang == "en" ){
        message = "Code copied !";
        $(".copy-container button").text("Copy");

    } else {
        message = "Code copié !";
        $(".copy-container button").text("Copier");
    }
    $(this).text(message);
    alertMsg(message, "success");
})
new ClipboardJS('#copy-css-link'); // pas touche
new ClipboardJS('#copy-raw-code'); // pas touche
