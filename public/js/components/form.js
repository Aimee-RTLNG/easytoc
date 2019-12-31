// ANCHOR Données initiales
let element_selected_container;
let input;
let intitule;
let previous_element;
let next_element;

let user_id = $('input[name=user_id]').val();
let type_id = $('input[name=type_id]').val();
let csrf_token = $('meta[name="csrf-token"]').attr('content');
let initial_content = '<form data-tag="form" class="theme-white" id="generated-form" action="#" method="get" name="generated-form">\n<div id="full-form">\n\t<h1 contenteditable="true" id="form-title" data-tag="form-title">Titre du formulaire</h1>\n</div>\n</form>\n<div class="mt-4" id="form-actions" contenteditable="false">\n\t<input data-tag="input-submit" form="generated-form" type="submit" disabled value="Envoyer" accesskey="s">\n</div>\n';

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

// ANCHOR Liste de tous les tags possibles dans un formulaire
const tags_list = ["form", "fieldset", "legend", "input", "button", "label", "a", "p", "h1", "h2", "h3", "h4", "h5",
    "select", "optgroup", "option", "hr", "textarea", "abbr"
];

// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// \t = tabulation,  \n = saut de ligne
var element_types = {
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
        "insert-title": "<h2 contenteditable='true' data-tag='text'>Titre</h2>",
        "insert-paragraph": "<p contenteditable='true' data-tag='text'>Paragraphe</p>",
        "insert-link": "<a href='' contenteditable='true' data-tag='label-text'>Nom du lien</a>",
        "insert-ordered_list": "<ol contenteditable='true' data-tag='text'>Nom de la liste<li>A</li><li>B</li><li>C</li></ol>",
        "insert-unordered_list": "<ul contenteditable='true' data-tag='text'>Nom de la liste<li>A</li><li>B</li><li>C</li></ul>",
        "insert-horizontal_rule": "<hr contenteditable='true'>",
    },
    "type-special": {
        "indicator-required": "\t<i class='indicator-required'>Tous les champs marqués par une étoile sont requis.</i>\n",
        "make-required": "\t<abbr title='required' aria-label='required'>*</abbr>\n",
        "reset-button": "\n\t<input type='reset' value='Réinitialiser' accesskey='r' form='generated-form'>"
    }
};

// ANCHOR Fonction de sauvegarde
function updatecontent() {

    // on récupère le contenu
    var blueprint_content = $('#content-created-blueprint').html();
    // on trie les éléments à ne pas inclure dans le code 
    blueprint_content = blueprint_content.replace(/<easytoc (.*?)\>/g, "");
    blueprint_content = blueprint_content.replace(/<\/easytoc>/g, "");
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

// ANCHOR Initialisation du formulaire
$('#content-created-blueprint').html(initial_content);
if ($('#content-created-blueprint').html()) {
    updatecontent();
}

// ANCHOR Changement de titre
$('#form-creator-title').on('keyup', function () {
    $('#form-title').text($('#form-creator-title').val());
    updatecontent();
});

// ANCHOR Changement de lien
$('#form-creator-link').on('keyup', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    updatecontent();
});

// ANCHOR Changement de méthode
$('#form-creator-method').on('change', function () {
    $('#generated-form').attr("method", $('#form-creator-method').val());
    updatecontent();
});

// ANCHOR Ajout d'un élément
$('.add-element').on('click', function () {

    // permettra d'identifier l'élément (lui donne un ID aléatoire)
    let element_id = Math.random().toString(36).substr(2, 9);
    let element_name = Math.random().toString(36).substr(2, 9);

    // on différencie les éléments questions, layout, special etc 
    let element_type = $(this).attr("class");
    element_type = element_type.match(/type-([^ ]+)/gi);
    element_type = element_type[0];

    // on récupère le type de l'élément
    let element_type_name = $(this).attr("id");
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

    let message = "Element ajouté";
    alertMsg(message);
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
    }).fail(function (xhr, status, error) {
        console.log(xhr.responseText);
        console.log(status);
        console.log(error);
    });
})

// ANCHOR Action sur l'élement
let element_select;
$(document.body)

    .off('keyup') // ré-initialisation

    // Empeche de passer le focus sur l'input quand on clique sur le label (pour contrer comportement de formulaire de base)
    .on('click', '.element-container label, .element-container legend', function (e) {
        if($(e.target).prop('tagName') != "SELECT"){
            $(this).find('[contenteditable=true]').focus();
        }else{
            $(this).closest('label').focus();
        }
        // to do problème focus select
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

        let selected_option = $('.option-selected');
        let previous_option = selected_option.prev();
        let next_option = selected_option.next();
        refreshMoveButtons(previous_option, next_option, true);

        updatecontent();
    })

    // Quand on sélectionne un élément éditable
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
                    $('#elem-title').val(intitule.text()); // récupère la valeur de l'elem
                    intitule.on('keyup', function () { // traitement modif
                        e.stopPropagation();
                        $('#elem-title').val(intitule.text());
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
                    placeholder = input.find('option').first().text();
                }

                $("#elem-placeholder").val(placeholder);

                // on récupère le required
                if ($(element_selected_container).hasClass('field-required')) {
                    $('#elem-required').prop("checked", "true");
                } else {
                    $('#elem-required').removeAttr("checked");
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

                // on cache toutes les actions de bases pour les réafficher en fonction
                $('.action-answer-type').hide();
                $('.action-placeholder').hide();
                $('.action-maxlength').hide();
                $('.action-multiple-answer').hide();
                $('.action-add-option').hide();
                $('.action-url').hide();
                $('.action-option-label').hide();
                $('.action-option-value').hide();
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
                    if (selected_option) {
                        $('.action-option-label').show();
                        $('.action-option-value').show();
                    }
                } else if (element_name == "insert-link") {
                    $('.action-required').hide();
                    $('.action-url').show();
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
                        })
                    }

                }

                $("#actions-interface").show(); // on affiche l'interface de modification spécifique

            } else {
                $("#actions-interface").hide(); // on masque l'interface de modification spécifique
            }

        } else {
            // Si on a sélectionné le titre principal
            $('.action-delete').attr('disabled', 'true');
            $('.side-tool').hide();
            $("#actions-interface").hide(); // on affiche l'interface de modification
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
    .on('keyup', '#form-title', function () {

        $('#form-creator-title').val($('#form-title').text());
        updatecontent();

    });


// ANCHOR Masquer les sidetools au changement d'onglet
$("#nav-code-tab").on('click', function () {
    $('#generated-form').attr("action", $('#form-creator-link').val());
    $('#generated-form').attr("method", $('#form-creator-method').val());
    $("#actions-interface").hide();
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
            }
            break;
            // Suppression
        case "delete":
            deletecommand.execute();
            $("#actions-interface").hide();
            $(".side-tool").hide();
            $('.action-delete').attr('disabled', 'true');
            $('.action-undo').removeAttr('disabled');
            break;
            // Annuler la suppression
        case "undo":
            deletecommand.undo();
            $(this).attr('disabled', 'true');
            $('.alert-success').slideUp();
            $('.element-container').last().find('[contenteditable=true]').first().focus();
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
                // TODO Retirer l'étoile dans le label (après le span)
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
            if(selected_option){
                previous_option = selected_option.prev();
                next_option = selected_option.next();
                refreshMoveButtons(previous_option, next_option, true);
            }
            let message = "Option ajoutée";
            alertMsg(message);
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
            if ($(this).val() != 0) {
                input.attr('value', $(this).val());
            }
            break;
            // Changement de nom de l'option
        case "option-value":
            if ($(this).val() != 0) {
                input.attr('value', $(this).val());
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
// NOTE Non utilisé
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

// ANCHOR Fonction d'ajout d'option
function addOption() {
    let option_parent_element = $(".content-editable-selected");
    let option_type = $(option_parent_element).attr("data-elementtypename");
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

    // let option_replace_regex = /FIRST_OPTION/g;
    // let element_option = element_types["type-answer-option"][element_type_name];
    // element_content = element_content.replace(option_replace_regex, element_option);

}

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
        let message = "Element supprimé";
        alertMsg(message);
    },
    undo: function () {
        element.appendTo("#full-form");
        let message = "Suppression annulée (fin du formulaire)";
        alertMsg(message);
    }
});

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

// ANCHOR Theme
$('input[name="theme"]').on('change', function () {
    let theme = "theme-" + $(this).val();
    $('#generated-form').attr('class', theme);
})

// ANCHOR Activer / désactiver les boutons de déplacement
function refreshMoveButtons(previous_element, next_element, option) {
    if(option){
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
            if (previous_element.attr("id") == "form-title" && !$(previous_element).hasClass("element-container")) {
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
}

// ANCHOR Copier le contenu code 
$("#copy-raw-code, #copy-css-link").on('click', function () {
    let message = "Code copié !";
    $(".copy-container button").text("Copier");
    $(this).text(message);
    alertMsg(message);
})
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code');

// ANCHOR Message d'alerte
var alert_timeout;

function alertMsg(message) {
    clearTimeout(alert_timeout);
    if ($('.alert-success').is(":hidden")) {
        $('.alert-success .alert-content').text(message);
        $('.alert-success').slideDown();
    } else {
        $('.alert-success').slideUp("fast", function () {
            $('.alert-success .alert-content').text(message);
            $('.alert-success').slideDown();
        });
    }
    alert_timeout = setTimeout(function () {
        $('.alert-success').slideUp();
    }, 7000);
}
