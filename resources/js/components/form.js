// ANCHOR Données initiales

// On importe les variables et fonctions externes (qui sont définie dans app.js)
import { 
    lang,  // la variable lang est soit "en" soit "fr" et permet de définir le contenu des messages
    alertMsg // fonction qui affiche le message pop up en bas à droite
} from "../app"; 

// Ce code était orienté formulaire, il y a donc les variables de contenu générés par la section d’un élément : 
// les titres des variables sont assez explicites, tu peux t’imaginer déjà le nom des variables qui existeraient pour les menu : element, link, intitule etc…
// chacune de ses variables est redéfinie quand on clique sur un element qui a la classe '.element-container'
let element; // sert à identifier 
let element_selected_container; // sert à identifier tout le container qui contient l'élement sélectionenr (généralement la racine de '.element-container' )
let intitule; // par exemple menu_title
let input; // par exemple menu_link
let previous_element; // par exemple : previous_menu
let next_element; // par exemple : next_menu
let previous_option; // par exemple : previous_lower_menu
let selected_option; // par exemple : selected_lower_menu
let next_option; // par exemple : next_lower_menu

let message; // variable qui contient les messages qui apparaissent dans l'infobulle en bas à droite (et qui sera définie en fonction de la variable lang)

let user_id = $('input[name=user_id]').val(); // récupère l'id de l'utilisateur pour la sauvegarde AJAX
let type_id = $('input[name=type_id]').val(); // récupère l'id du type (menu, form, table) pour la sauvegarde AJAX
let csrf_token = $('meta[name="csrf-token"]').attr('content'); // sans ce token, on ne peut pas envoyer le formulaire en AJAX

// ANCHOR Caractères restants Description du projet ( à ne pas toucher )
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

// ANCHOR Caractères restants Titre du projet ( à ne pas toucher )
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

// ANCHOR Liste de tous les tags possibles dans un formulaire
// Pourrait donc être remplacé par une liste, des liens etc...
const tags_list = ["form", "fieldset", "legend", "input", "button", "label", "a", "p", "h1", "h2", "h3", "h4", "h5",
    "select", "optgroup", "option", "hr", "textarea", "abbr"
];

// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// Cette liste est hyper importante : chaque élément qu'on ajoute dans le contenu doit être listé ici : cela permet d'être sûr d'avoir toujours les bonnes classes
// et la bonne structure. 
// \t = tabulation,  \n = saut de ligne :: permet au code d'être indenté lors de la génération du menu
export let element_types; // En exportant ce tableau objet, on permet au fichier import_data_... de générer du contenu en fonction des données importées
// le fichier import_data_menu/form/table appelera donc un élément de se tableau grâce aux index (ne pas oublier d'importer cette variable dans le fichier import)
// par exemple, si dans le CSV, j'ai un élément de type 'link', alors il cherchera dans ce tableau objet element_types['type-layout']['insert-link]
if( lang == "en" ){
    element_types = {
        "type-question": {
            "insert-short_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Question</span>\n\t\t\t<input id='REPLACEID' type='text' name='REPLACENAME' class='form-control' placeholder='Short answer' data-tag='input-text'/>\n\t\t</label>",
            "insert-long_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Question</span>\n\t\t\t<textarea id='REPLACEID' type='textarea' name='REPLACENAME' class='form-control' placeholder='Long answer' data-tag='input-text'/></textarea>\n\t\t</label>",
            "insert-binary_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Caption</span></legend>\n\t\t\t<label for='REPLACEID' data-tag='option'>\n\t\t\t\t<input class='input-option' type='checkbox' id='REPLACEID' name='REPLACENAME' data-tag='input-checkbox' checked>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>I Agree</span>\n\t\t\t</label>\n\t\t</fieldset>\n",
            "insert-one_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Caption</span></legend>\n\t</fieldset>\n",
            "insert-many_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Caption</span></legend>\n\t</fieldset>\n",
            "insert-list_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Question</span>\n\t\t<select id='REPLACEID' name='REPLACENAME' class='form-control' data-tag='option' >\n\t\t\t<option value='' disabled selected data-tag='option'> Choose an option </option>\n\t\t</select>\n</label>"
        },
        "type-answer-option": {
            "insert-one_answer": "\t\t<label for='REPLACEID' data-tag='option' >\n\t\t\t\t<input class='input-option' type='radio' id='REPLACEID' name='REPLACENAME' value='answer-value'>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span>\n\t\t\t</label>\n\t\t",
            "insert-many_answer": "\t\t<label for='REPLACEID' data-tag='option' >\n\t\t\t\t<input class='input-option' type='checkbox' id='REPLACEID' name='REPLACENAME' value='answer-value'>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span>\n\t\t\t</label>\n\t\t",
            "insert-list_answer": "\t<option class='select-option'  value='answer-value' data-tag='option'><span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span></option>\n"
        },
        "type-layout": {
            "insert-title": "<h2 contenteditable='true' class='layout-text' data-tag='text'>Title</h2>",
            "insert-paragraph": "<p contenteditable='true'class='layout-text' data-tag='text'>Paragraph</p>",
            "insert-link": "<a href='' contenteditable='true' class='layout-text' data-tag='label-text'>Name of the link</a>",
            "insert-ordered_list": "<ol contenteditable='true' class='layout-text' data-tag='text'>Name of the list<li>A</li><li>B</li><li>C</li></ol>",
            "insert-unordered_list": "<ul contenteditable='true' class='layout-text' data-tag='text'>Name of the list<li>A</li><li>B</li><li>C</li></ul>",
            "insert-horizontal_rule": "<hr contenteditable='true'>",
        },
        "type-special": {
            "indicator-required": "\t<i class='indicator-required'>All fields marked with an asterisk are required.</i>\n",
            "make-required": "\t<abbr title='required' aria-label='required'>*</abbr>\n",
            "reset-button": "\n\t<input type='reset' value='Reset' form='generated-form' title='Reset the form'>"
        }
    };
} else {
    element_types = {
        "type-question": {
            "insert-short_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Exemple de question</span>\n\t\t\t<input id='REPLACEID' type='text' name='REPLACENAME' class='form-control' placeholder='Exemple de réponse courte' data-tag='input-text'/>\n\t\t</label>",
            "insert-long_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Exemple de question</span>\n\t\t\t<textarea id='REPLACEID' type='textarea' name='REPLACENAME' class='form-control' placeholder='Exemple de réponse longue' data-tag='input-text'/></textarea>\n\t\t</label>",
            "insert-binary_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Légende</span></legend>\n\t\t\t<label for='REPLACEID' data-tag='option'>\n\t\t\t\t<input class='input-option' type='checkbox' id='REPLACEID' name='REPLACENAME' data-tag='input-checkbox' checked>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Affirmation</span>\n\t\t\t</label>\n\t\t</fieldset>\n",
            "insert-one_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Légende</span></legend>\n\t</fieldset>\n",
            "insert-many_answer": "\t<fieldset>\n\t\t\t<legend><span class='label-text' data-tag='label-text' contenteditable='true'>Légende</span></legend>\n\t</fieldset>\n",
            "insert-list_answer": "\t<label for='REPLACEID' data-tag='label'><span class='label-text' data-tag='label-text' contenteditable='true'>Exemple de question</span>\n\t\t<select id='REPLACEID' name='REPLACENAME' class='form-control' data-tag='option' >\n\t\t\t<option value='' disabled selected data-tag='option'> Choisir une option </option>\n\t\t</select>\n</label>"
        },
        "type-answer-option": {
            "insert-one_answer": "\t\t<label for='REPLACEID' data-tag='option' >\n\t\t\t\t<input class='input-option' type='radio' id='REPLACEID' name='REPLACENAME' value='answer-value'>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span>\n\t\t\t</label>\n\t\t",
            "insert-many_answer": "\t\t<label for='REPLACEID' data-tag='option' >\n\t\t\t\t<input class='input-option' type='checkbox' id='REPLACEID' name='REPLACENAME' value='answer-value'>\n\t\t\t\t<span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span>\n\t\t\t</label>\n\t\t",
            "insert-list_answer": "\t<option class='select-option'  value='answer-value' data-tag='option'><span class='label-option-text' data-tag='label-option-text' contenteditable='true'>Option</span></option>\n"
        },
        "type-layout": {
            "insert-title": "<h2 contenteditable='true' class='layout-text' data-tag='text'>Titre</h2>",
            "insert-paragraph": "<p contenteditable='true'class='layout-text' data-tag='text'>Paragraphe</p>",
            "insert-link": "<a href='' contenteditable='true' class='layout-text' data-tag='label-text'>Nom du lien</a>",
            "insert-ordered_list": "<ol contenteditable='true' class='layout-text' data-tag='text'>Nom de la liste<li>A</li><li>B</li><li>C</li></ol>",
            "insert-unordered_list": "<ul contenteditable='true' class='layout-text' data-tag='text'>Nom de la liste<li>A</li><li>B</li><li>C</li></ul>",
            "insert-horizontal_rule": "<hr contenteditable='true'>",
        },
        "type-special": {
            "indicator-required": "\t<i class='indicator-required'>Tous les champs marqués par une étoile sont requis.</i>\n",
            "make-required": "\t<abbr title='required' aria-label='required'>*</abbr>\n",
            "reset-button": "\n\t<input type='reset' value='Réinitialiser' form='generated-form'>"
        }
    };
}
// Bien séparer le contenu en fonction des langues si le texte à l'intérieur des balises peut se traduire : pas la peine si uniquement le mot "Menu" apparait.
// Par contre, si le mot Lien est écrit, alors il faudra un équivalent Link

// ANCHOR Rendre l'ancien contenu dynamique ( à ne pas toucher )
// Cette fonction, utilisée à la fois sur ce fichier et sur le fichier import_machin, permet de rendre le contenu HTML dynamique
// c'est à dire : imaginons que je load un "<h1>Titre</h1>" dans l'espace de création, soit parce que je suis en modification, soit parce que j'ai importé des données
// mon contenu ne possède pas les bons attributs pour permettre le changement dynamique ( contenteditable ) car, lors de la sauvegarde, ceux-ci sont enlevés (logique)
// il faut alors remettre des "contenteditable" sur chaque élément modifiable dans le texte.
// de plus, cette fonction permet de récupèrer les paramètre du contenu généré (titre du formulaire, lien, theme, options).... 
export function getOldContent() {
    // On rend l'ancien contenu modifiable
    $('#full-form .label-text').attr('contenteditable', true);
    $('#full-form .label-option-text').attr('contenteditable', true);
    $('#full-form #form-title, #full-form h2,#full-form p,#full-form a,#full-form ol,#full-form ul,#full-form hr').attr('contenteditable', true);
    
    // On récupère les paramètres
    // Theme
    let actual_theme = $("#generated-form").attr('class');
    actual_theme = actual_theme.replace('theme-', '');
    let selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
    selected_theme.prop('checked', true);

    // Titre (non présent pour les menu)
    let actual_title = $("#full-form #form-title").text().trim();
    $("#form-creator-title").val(actual_title);

    // Methode (non présent pour les menu)
    let actual_method = $("#generated-form").attr('method');
    $("#form-creator-method").val(actual_method);

    // Lien (non présent pour les menu)
    let actual_link = $("#generated-form").attr('action');
    $("#form-creator-link").val(actual_link);

    // Option de réinitialisation (non présent pour les menu)
    let actual_reset = $("#content-created-blueprint").find('input[type=reset]');
    if (actual_reset.length > 0) {
        $('#reset-button').prop('checked', true);
    }
}

// ANCHOR Fonction de sauvegarde ( à ne pas toucher )
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

    // prettify (permet de rendre le code joli)
    $("#formatted-code").html(PR.prettyPrintOne(code_content));
};

// ANCHOR Initialisation du formulaire ( à ne pas toucher )
if ($('#raw-code').val().length <= 0) {
    // Il n'y a aucun contenu précédent : on est donc en création à partir de 0
    updatecontent();
} else {
    // Il y a du contenu déjà crée : on est en modification ou en génération de contenu
    getOldContent();
    updatecontent();
}

// ANCHOR Changement de titre ( n'existe pas pour les menu : concerne le titre du formulaire [et non du projet] )
$('#form-creator-title').on('keyup', function () {
    $('#form-title').text($('#form-creator-title').val());
    updatecontent();
});

// ANCHOR Changement de lien ( n'existe pas pour les menu : concerne le titre du formulaire [et non du projet] )
$('#form-creator-link').on('keyup', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    updatecontent();
});

// ANCHOR Changement de méthode ( n'existe pas pour les menu : concerne le titre du formulaire [et non du projet] )
$('#form-creator-method').on('change', function () {
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});

// ANCHOR Fonction centrale !! Permet d'ajouter du contenu à l'espace de création
// Cette fonction se base sur la liste d'élément précédemment définis element_types 
export function addElement(element_type, element_type_name) {
    // permettra d'identifier l'élément (lui donne un ID aléatoire)
    let element_id = Math.random().toString(36).substr(2, 9);
    let element_name = Math.random().toString(36).substr(2, 9);

    // on différencie les éléments questions, layout, special etc 
    element_type = element_type.match(/type-([^ ]+)/gi);
    element_type = element_type[0];

    // on récupère le type de l'élément

    let element_content;
    if (element_type_name != "reset-button") {
        let added_content = element_types[element_type][element_type_name];
        element_content = "\t<div data-id=" + element_id + " data-elementType='" + element_type + "' data-elementTypeName='" + element_type_name + "' class='element-container " + element_type + " " + element_type_name + "'>\n\t" + added_content + "\n\t</div>\n";
        /* on attribue les id au contenu interne */
        let id_replace_regex = /REPLACEID/g;
        element_content = element_content.replace(id_replace_regex, element_id);
        let name_replace_regex = /REPLACENAME/g;
        element_content = element_content.replace(name_replace_regex, element_name);
    } else {
        element_content = element_types[element_type][element_type_name];
    }

    // on récupère l'ancien contenu 
    let previous_content = $('#content-created-blueprint #full-form').html();

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
        $('#content-created-blueprint #full-form').html(previous_content + element_content);
    }

    let new_element = $('.element-container').last();
    $(new_element).find('[contenteditable=true]').first().focus();

    if (element_type == "type-question" && (element_type_name == "insert-one_answer" || element_type_name == "insert-many_answer" || element_type_name == "insert-list_answer")) {
        // on ajoute une option exemple
        addOption();
    }

    if( lang == "en" ){
        message = "Element added";
    } else {
        message = "Element ajouté";
    }
    alertMsg(message, "success");
    updatecontent();
}

// ANCHOR Ajout d'un élément : quand on clique sur un bouton avec la classe .add-element
$('.add-element').on('click', function () {
    let element_type = $(this).attr("class"); // récupère le type d'élément à ajouter
    let element_type_name = $(this).attr("id"); // récupère le nom spécifique d'élément à ajouter
    addElement(element_type, element_type_name); // on ajoute l'élement
    updatecontent();
});

// ANCHOR Sauvegarde définitive (quand on clique sur le bouton d'enregistrement ) ( normalement à ne pas toucher )
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

    // Empeche de passer le focus sur l'input quand on clique sur le label (pour contrer comportement de formulaire de base)
    .on('click', '.element-container label, .element-container legend', function (e) {
        if ($(e.target).prop('tagName') != "SELECT") {
            $(this).find('[contenteditable=true]').focus();
        } else {
            $(this).closest('label').focus();
        }
    })

    // Modifie le focus quand on clique sur une DIV, un FIELDSET ou une LEGEND (pour contrer comportement de formulaire de base)
    .on('click', '.element-container', function (e) {
        if (e.target.nodeName == "DIV" || e.target.nodeName == "FIELDSET") {
            $(this).find('[contenteditable=true]').focus();
        } else if (e.target.nodeName == "LEGEND") {
            $(this).find('legend span[contenteditable=true]').focus();
        }
    })

    // Quand on clique sur une option
    .on('click', '#full-form fieldset label, #full-form select option', function (e) {
        $('.content-editable-selected').removeClass('content-editable-selected');
        $('.option-selected').removeClass('option-selected');

        // $(this).closest('.element-container').addClass('content-editable-selected');
        $(this).addClass('option-selected').addClass('content-editable-selected');

        selected_option = $('.option-selected');
        previous_option = selected_option.prev();
        next_option = selected_option.next();
        refreshMoveButtons(previous_option, next_option, true);

        updatecontent();
    })

    // Quand on sélectionne un élément éditable (c'est là le plus important)
    .on('focus', '[contenteditable=true], #full-form input, #full-form select, #full-form textarea, #full-form fieldset label, #full-form select option', function (e) {

        // on récupère l'élément sélectionné et on focus sur l'élément parent
        if (e.target) {
            element_select = e.target;

            // on ré initialise les classes
            $(".content-editable-selected").removeClass('content-editable-selected');
            $(".option-selected").removeClass('option-selected');
            selected_option = false;

            if ($(element_select).hasClass('element-container')) {
                element_selected_container = element_select;
            } else if ($('.option-selected').length > 0 || $(element_select).hasClass('input-option') || $(element_select).hasClass('select-option') || $(element_select).hasClass('label-option-text')) {
                element_selected_container = $(element_select).closest('label');
                $(element_selected_container).addClass('option-selected');
                selected_option = $('.option-selected');
            } else {
                element_selected_container = $(element_select).closest(".element-container");
            }

            previous_element = element_selected_container.prev();
            next_element = element_selected_container.next();
            refreshMoveButtons(previous_element, next_element, false);
        }

        $(element_selected_container).addClass("content-editable-selected");

        let tag = $(this).attr('data-tag');
        if (tag != "form-title") { // si ce n'est pas le titre général du formulaire (position verouillée)

            $('.action-delete').removeAttr('disabled');
            $('.element_add-option').attr("disabled", 'true');

            $('.side-tool').css("margin-top", $('.content-editable-selected').position().top + "px");
            // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");
            

            let element_type = $(element_selected_container).attr('data-elementtype');
            let element_name = $(element_selected_container).attr('data-elementtypename');
            if (tag == "option") {
                element_type = $(element_selected_container).closest('.element-container').attr('data-elementtype');
                element_name = $(element_selected_container).closest('.element-container').attr('data-elementtypename');
            }

            // Side tool : déplacemet haut bas et suppression 
            $('.side-tool').show();

            if (element_type != "type-layout" || (element_type == "type-layout" && element_name == "insert-link")) {

                // on récupère l'élément contenant l'intitulé
                if (!selected_option) {
                    intitule = $(element_selected_container).find('[data-tag=label-text]');
                } else {
                    intitule = $(element_selected_container).closest('.element-container').find('[data-tag=label-text]');
                }

                // on récupère l'intitule
                if (intitule) {
                    intitule.off('keyup'); // re-init
                    $('#elem-title').val(intitule.text().trim()); // récupère la valeur de l'elem
                    intitule.on('keyup', function () { // traitement modif
                        e.stopPropagation();
                        $('#elem-title').val(intitule.text().trim());
                        updatecontent();
                    })
                }

                // on récupère le placeholder 
                input = $('.content-editable-selected').find('input');
                if (input.length == 0) {
                    input = $(element_selected_container).find('textarea');
                }
                let placeholder = input.attr('placeholder');

                // si c'est un select 
                if ($(element_selected_container).find('select').length > 0) {
                    input = $(element_selected_container).find('select');
                    placeholder = input.find('option').first().text().trim();
                    if($(element_selected_container).find('select').attr('multiple')){
                        $('#elem-multiple-choice').prop('checked', true);
                    }else{
                        $('#elem-multiple-choice').prop('checked', false);
                    }
                }

                $("#elem-placeholder").val(placeholder);

                // on récupère le required
                if ($(element_selected_container).hasClass('field-required')) {
                    $('#elem-required').prop("checked", true);
                } else {
                    $('#elem-required').prop("checked", false);
                }

                // on recupère la longueur max
                let maxlength = input.attr('maxlength');
                $("#elem-length").val(maxlength);

                // on recupère le type de réponse
                let answer_type = input.attr('type');
                $('#elem-type option[value=' + answer_type + ']').prop('selected', true);

                // on recupère l'attribut name
                let answer_name = input.attr('name');
                $('#elem-options-name').val(answer_name);

                if (selected_option) {
                    // on recupère le nom de l'option
                    let option_label = $('.content-editable-selected .label-option-text');
                    $("#elem-option-label").val(option_label.text());
                    option_label.off('keyup'); // re-init
                    option_label.on('keyup', function () { // traitement modif
                        e.stopPropagation();
                        $("#elem-option-label").val(option_label.text().trim());
                        updatecontent();
                    })

                    // on recupère la valeur de l'option
                    let option_value = $('.content-editable-selected input').attr('value');
                    $("#elem-option-value").val(option_value);
                }

                // on cache toutes les actions de bases pour les réafficher en fonction du contenu sélectionné
                $('.action-answer-type').hide();
                $('.action-placeholder').hide();
                $('.action-maxlength').hide();
                $('.action-multiple-answer').hide();
                $('.action-url').hide();
                $('.action-option-label').hide();
                $('.action-option-value').hide();
                $('.action-add-option').hide();
                $('.action-title').hide();
                $('.action-delete-option').hide();
                $('.action-required').show(); // Requis possibles sur toutes les questions

                // on affiche les attributs modifiable en fonction de l'élém selectionné
                if (element_name == "insert-short_answer") {
                    $('.action-answer-type').show();
                    $('.action-placeholder').show();
                    $('.action-maxlength').show();
                    $('.action-options-name').show();
                } else if (element_name == "insert-long_answer") {
                    $('.action-placeholder').show();
                    $('.action-maxlength').show();
                    $('.action-options-name').show();
                } else if (element_name == "insert-binary_answer") {
                    $('.action-required').show();
                    $('.action-options-name').show();
                    if (selected_option) {
                        $('.action-required').hide(); // on ne peut pas mettre de requis là 
                        refreshMoveButtons(false); // on empêche l'utilisateur de bouger la réposne
                    }
                } else if (element_name == "insert-one_answer") {
                    $('.action-required').hide(); // on ne peut pas mettre de requis là 
                    $('.action-add-option').show();
                    $('.action-options-name').show();
                    $('.element_add-option').removeAttr('disabled');
                    if (selected_option) {
                        $('.action-option-label').show();
                        $('.action-option-value').show();
                    }
                } else if (element_name == "insert-many_answer") {
                    $('.action-required').hide();
                    $('.action-add-option').show();
                    $('.action-options-name').show();
                    $('.element_add-option').removeAttr('disabled');
                    if (selected_option) {
                        $('.action-option-label').show();
                        $('.action-option-value').show();
                    }
                } else if (element_name == "insert-list_answer") {
                    $('.action-placeholder').show();
                    $('.action-multiple-answer').show();
                    $('.action-add-option').show();
                    $('.action-options-name').show();
                    $('.element_add-option').removeAttr('disabled');

                    let option_label = $('.content-editable-selected select option:selected');
                    if ($(option_label).is(':enabled')) {
                        $('.action-option-label').show();
                        $('.action-option-value').show();
                        $('.action-delete-option').show();
                    }
                    $("#elem-option-label").val(option_label.text().trim());

                    // on recupère la valeur de l'option
                    let option_value = $('.content-editable-selected select option:selected:enabled').attr('value');
                    $("#elem-option-value").val(option_value);

                } else if (element_name == "insert-link") {
                    $('.action-required').hide();
                    $('.action-url').show();
                    $('.action-title').show();
                    $('.action-options-name').hide();

                    if (intitule) {
                        // on désactive les events précedents
                        $('#elem-url').off('keyup');
                        // on récupère les attributs de l'élement sélectionné
                        $('#elem-url').val($(intitule).attr('href'));
                        // event de changement d'url
                        let link_url;
                        $('#elem-url').on('keyup', function (e) {
                            e.stopPropagation();
                            link_url = $('#elem-url').val();
                            $(intitule).attr('href', link_url);
                            updatecontent();
                        })

                        // on désactive les events précedents
                        $('#elem-url-title').off('keyup');
                        // on récupère les attributs de l'élement sélectionné
                        $('#elem-url-title').val($(intitule).attr('title'));
                        // event de changement d'url
                        let link_title;
                        $('#elem-url-title').on('keyup', function (e) {
                            // console.log($('#elem-url-title').val());
                            e.stopPropagation();
                            link_title = $('#elem-url-title').val();
                            $(intitule).attr('title', link_title);
                            updatecontent();
                        })
                    }

                }
                $("#actions-interface").removeClass('d-none'); // on affiche l'interface de modification spécifique

            } else {
                $("#actions-interface").addClass('d-none'); // on masque l'interface de modification spécifique
            }

        } else {
            // Si on a sélectionné le titre principal
            $('.action-delete').attr('disabled', 'true');
            $('.side-tool').hide();
            $("#actions-interface").addClass('d-none'); // on affiche l'interface de modification
        }

        updatecontent();
    })
    // quand on déselectionne un élement...
    .on('blur', '[contenteditable=true]', function (e) {
        // e.preventDefault();
        // let element_select_before = window.getSelection().getRangeAt(0).startContainer;
        updatecontent();
    })
    // ANCHOR Modification du texte via l'intérieur du formulaire
    .on('keyup', '#form-title', function () {

        $('#form-creator-title').val($('#form-title').text().trim());
        updatecontent();

    });

// ANCHOR Masquer les sidetools au changement d'onglet
$("#nav-code-tab").on('click', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    $('#generated-form').attr("method", $('#form-creator-method').val());
    $("#actions-interface").addClass('d-none');
    $('.side-tool').hide();
    updatecontent();
})

// ANCHOR Actions sur l'élément ciblé
$(".form-element-action").on('click', function (e) {

    if ($(element_select).hasClass('element-container')) {
        element_selected_container = element_select;
    } else if ($(element_select).hasClass('option-selected')) {
        element_selected_container = $('.option-selected');
    } else {
        element_selected_container = $(element_select).closest(".element-container");
    }

    previous_element = element_selected_container.prev();
    next_element = element_selected_container.next();

    switch ($(this).data("action")) {
        // Déplacement vers le haut
        case "move-up":
            if (selected_option) {
                // to do , ne compte pas le seelect
                previous_option = selected_option.prev();
                next_option = selected_option.next();
                if (previous_element.attr("id") != "form-title" && previous_option.attr("disabled") != "true" && previous_option.attr('data-tag') == "option") {
                    previous_option.insertAfter(selected_option);
                }
                refreshMoveButtons(previous_option, next_option, true);

            } else {

                if (previous_element.attr("id") != "form-title" && previous_element.hasClass("element-container")) {
                    previous_element.insertAfter(element_selected_container);
                }
                previous_element = element_selected_container.prev();
                next_element = element_selected_container.next();
                refreshMoveButtons(previous_element, next_element, false);
                // Déplacement des Tools latéraux
                $('.side-tool').css("margin-top", $(element_selected_container).position().top + "px");
                // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");
            }
            break;
        // Déplacement vers le bas
        case "move-down":
            if (selected_option) {
                // to do , ne compte pas le seelect
                previous_option = selected_option.prev();
                next_option = selected_option.next();
                if (next_element.attr("id") != "form-title" && next_option.attr("disabled") != "true" && next_option.attr('data-tag') == "option") {
                    next_option.insertBefore(selected_option);
                }
                refreshMoveButtons(previous_option, next_option, true);

            } else {
                if (next_element.attr("id") != "form-title" && next_element.hasClass("element-container")) {
                    next_element.insertBefore(element_selected_container);
                }
                previous_element = element_selected_container.prev();
                next_element = element_selected_container.next();
                refreshMoveButtons(previous_element, next_element, false);
                // Déplacement des Tools latéraux
                $('.side-tool').css("margin-top", $(element_selected_container).position().top + "px");
                // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");
            }
            break;
        // Suppression
        case "delete":
            deletecommand.execute();
            $("#actions-interface").addClass('d-none');
            $(".side-tool").hide();
            $('.action-delete').attr('disabled', 'true');
            $('.action-undo').removeAttr('disabled');
            if( lang == "en" ){
                message = "Deleted element";
            } else {
                message = "Élément supprimé";
            }
            alertMsg(message, "success");
            break;
        // Annuler la suppression
        case "undo":
            deletecommand.undo();
            $(this).attr('disabled', 'true');
            $('.alert-success').slideUp();
            $('.element-container').last().find('[contenteditable=true]').first().focus();
            if( lang == "en" ){
                message = "Element recovered";
            } else {
                message = "Élément rétabli";
            }
            alertMsg(message, "success");
            break;
        // Changement de l'attr multiple   
        case "multiple-answer":
            if (element_selected_container.find('select').attr('multiple')) {
                element_selected_container.find('select').removeAttr('multiple');
            } else {
                element_selected_container.find('select').attr('multiple', 'true');
            }
            break;
        // Changement de l'attr required
        case "required":
            if (element_selected_container.hasClass('field-required')) {
                element_selected_container.removeClass('field-required');
                if ($(element_selected_container).hasClass('insert-binary_answer')) {
                    element_selected_container.find("input").removeAttr("required");
                } else {
                    element_selected_container.find("input:not([type='checkbox'])").removeAttr("required");
                    element_selected_container.find("select").removeAttr("required");
                    element_selected_container.find("textarea").removeAttr("required");
                    element_selected_container.find("input[type='radio']").first().removeAttr("required");
                }
                // Retirer l'étoile dans le label (après le span)
                element_selected_container.find("abbr").remove();
                if ($("#full-form abbr").length == 0) {
                    $(".indicator-required").remove();
                }

            } else {
                element_selected_container.addClass('field-required');
                if ($(element_selected_container).hasClass('insert-binary_answer')) {
                    element_selected_container.find("input").attr("required", "required");
                } else {
                    element_selected_container.find("input:not([type='checkbox'])").attr("required", "required");
                    element_selected_container.find("select").attr("required", "required");
                    element_selected_container.find("textarea").attr("required", "required");
                    element_selected_container.find("input[type='radio']").first().attr("required", "required");
                }
                // Ajouter l'étoile dans le label
                var required_star = element_types["type-special"]["make-required"];
                var required_indicator = element_types["type-special"]["indicator-required"];
                if (element_selected_container.find("abbr").length == 0) {
                    $(required_star).insertAfter(element_selected_container.find(".label-text"));
                }
                if ($("#full-form .indicator-required").length == 0) {
                    $(required_indicator).insertAfter($("#form-title"));
                }
            }
            break;
        // Ajout d'action
        case "add-option":
            addOption();
            if (selected_option) {
                previous_option = selected_option.prev();
                next_option = selected_option.next();
                refreshMoveButtons(previous_option, next_option, true);
            }
            if( lang == "en" ){
                message = "Option added";
            } else {
                message = "Option ajoutée";
            }
            alertMsg(message, "success");
            break;
        case "delete-option":
            deleteOption();
            if( lang == "en" ){
                message = "Deleted option";
            } else {
                message = "Option supprimée";
            }
            alertMsg(message, "success");
            break;
    }

    updatecontent();

}).on('change', function (e) {

    // Changement de type
    switch ($(this).data("action")) {
        case "answer-type":
            input.attr('type', $(this).val());
            break;
    }

    updatecontent();

}).on('keyup', function (e) {

    switch ($(this).data("action")) {
        // Changement d'intitulé
        case "question-text":
            intitule.text($(this).val());
            break;
        // Changement de longueur max
        case "maxlength":
            if ($(this).val() == 0) {
                input.removeAttr('maxlength');
            } else if ($.isNumeric($(this).val()) && $(this).val() > 0) {
                input.attr('maxlength', $(this).val());
            }
            break;
        // Changement de longueur max
        case "options-name":
            if ($(this).val() != 0) {
                $(element_selected_container).find('input').attr('name', $(this).val());
                $(element_selected_container).find('select').attr('name', $(this).val());
                $(element_selected_container).find('textarea').attr('name', $(this).val());
            }
            break;
        // Changement de nom de l'option
        case "option-label":
            if ($(this).val() != 0 && $('.content-editable-selected input').length > 0) {
                $('.content-editable-selected .label-option-text').text($(this).val());
            } else if ($(this).val() != 0 && $('.content-editable-selected select').length > 0) {
                $('.content-editable-selected select option:selected').text($(this).val());
            }
            break;
        // Changement de valeur de l'option
        case "option-value":
            if ($(this).val() != 0 && $('.content-editable-selected input').length > 0) {
                input.attr('value', $(this).val());
            } else if ($(this).val() != 0 && $('.content-editable-selected select').length > 0) {
                $('.content-editable-selected select option:selected').attr('value', $(this).val());
            }
            break;
        // Changement de placeholder
        case "placeholder":
            input.attr('placeholder', $(this).val());
            if ($(input).prop("tagName") == "SELECT") {
                $(input).find('option').first().text($(this).val());
            };
            break;
    }

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

// ANCHOR Fonction d'ajout d'option ( osef ça concerne pas les menus )
export function addOption(option_type_parameter) {
    let option_parent_element = $(".content-editable-selected");
    let option_type = option_type_parameter || $(option_parent_element).attr("data-elementtypename");
    if (!option_type) {
        option_parent_element = $(".content-editable-selected").closest(".element-container");
        option_type = $(".content-editable-selected").closest(".element-container").attr("data-elementtypename");
    }

    let option_group = $(option_parent_element).find('fieldset');
    let first_option = $(option_group).find('input').first();
    let option_name = $(first_option).attr('name');
    if (option_group.length == 0) {
        option_group = $(option_parent_element).find('select');
        option_name = "";
    }
    if (!option_name) {
        option_name = Math.random().toString(36).substr(2, 9);
    }

    let option_id = Math.random().toString(36).substr(2, 9);
    let option = element_types["type-answer-option"][option_type];
    let option_id_replace_regex = /REPLACEID/g;
    option = option.replace(option_id_replace_regex, option_id);
    let option_name_replace_regex = /REPLACENAME/g;
    option = option.replace(option_name_replace_regex, option_name);
    $(option_group).append(option);

    updatecontent();
}

// ANCHOR Fonction de suppression d'option dans un select ( osef ça concerne pas les menus )
function deleteOption() {
    let select_option_selected = $(".content-editable-selected select option:selected");
    $(select_option_selected).remove();
    $(".content-editable-selected select").val($(".content-editable-selected select option:first").val());
    $('.action-delete-option').hide();

    updatecontent();
}

// ANCHOR Fonction Undo/Redo suppression ( à ne pas toucher )
// Je comprend pas ce truc mais c'est une fonction essentielle pour que le UNDO remarche..
// Autant la laisser définie même si non utilisée dans deletecommand (sur ce script, elle est utilisée), elle fait pas de mal :)
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
// Je comprend pas moi-même comment ça marche. Quand on clique sur supprimer, ça ne fait que "détacher" l'élement
// Si tu comptes modifier cette fonction, cela risque de poser problème.. c'est risqué.
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
    $('#generated-form').attr('class', theme);

    updatecontent();
})

// ANCHOR Activer / désactiver les boutons de déplacement dynamique
// Cette fonction permet de re-placer les boutons de déplacement (haut/bas)
// A toi de voir si tu peux l'utiliser ou non
// Attention : c'est une fonction exportée, il faut faire attention à ce qu'elle ne soit pas appelée dans un autre fichier !
export function refreshMoveButtons(previous_element, next_element, option) {
    if (option) {
        if (previous_element) {
            if (previous_element.attr("disabled") != "true" && previous_element.attr('data-tag') == "option") {
                $('#action-move-up').removeAttr('disabled');
            } else {
                $('#action-move-up').attr('disabled', true);
            }
            if (next_element.attr("disabled") != "true" && next_element.attr('data-tag') == "option") {
                $('#action-move-down').removeAttr('disabled');
            } else {
                $('#action-move-down').attr('disabled', true);
            }
        } else {
            $('#action-move-up').attr('disabled', true);
            $('#action-move-down').attr('disabled', true);
        }
    } else {
        if (previous_element) {
            if ((previous_element.attr("id") == "form-title" || previous_element.hasClass("indicator-required")) || !$(previous_element).hasClass("element-container")) {
                $('#action-move-up').attr('disabled', true);
            } else {
                $('#action-move-up').removeAttr('disabled');
            }
            if (!$(next_element).hasClass("element-container")) {
                $('#action-move-down').attr('disabled', true);
            } else {
                $('#action-move-down').removeAttr('disabled');
            }
        } else {
            $('#action-move-up').attr('disabled', true);
            $('#action-move-down').attr('disabled', true);
        }
    }

    updatecontent();
}

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

