(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/menu"],{

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/*! exports provided: element_types, getOldContent, addElement, addOption, refreshMoveButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_types", function() { return element_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldContent", function() { return getOldContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElement", function() { return addElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOption", function() { return addOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshMoveButtons", function() { return refreshMoveButtons; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
// ANCHOR Données initiales
// On importe les variables et fonctions externes (qui sont définie dans app.js)

var element;
var element_selected_container;
var menu_title;
var menu_link;
var previous_menu;
var selected_menu;
var next_menu;
var previous_lower_menu;
var selected_lower_menu;
var next_lower_menu;
var message;
var user_id = $('input[name=user_id]').val();
var type_id = $('input[name=type_id]').val();
var csrf_token = $('meta[name="csrf-token"]').attr('content'); // ANCHOR Caractères restants Description du projet
// Permet d'afficher "x caractères restants" lorsque l'on écrit dans le textarea description

$('#desc-input').keypress(function (e) {
  var tval = $('#desc-input').val(),
      tlength = tval.length,
      set = $('#desc-input').attr('maxlength'),
      remain = parseInt(set - tlength);

  if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
    $('#chara-desc-remains').text(remain + " characters left");
  } else {
    $('#chara-desc-remains').text(remain + " caractères restants");
  }

  if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
    $('#desc-input').val(tval.substring(0, tlength - 1));
  }
}); // ANCHOR Caractères restants Titre du projet
// Permet d'afficher "x caractères restants" lorsque l'on écrit dans l'input de titre

$('#title-input').keypress(function (e) {
  var tval = $('#title-input').val(),
      tlength = tval.length,
      set = $('#title-input').attr('maxlength'),
      remain = parseInt(set - tlength);

  if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
    $('#chara-title-remains').text(remain + " characters left");
  } else {
    $('#chara-title-remains').text(remain + " caractères restants");
  }

  if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
    $('#title-input').val(tval.substring(0, tlength - 1));
  }
}); // ANCHOR Appel de la fonction qui positione la side toolbox ( à ne pas toucher )
// $(window).on('scroll', function() {
//     setSideWindow();
// });
// ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
// Cette liste est hyper importante : chaque élément qu'on ajoute dans le contenu doit être listé ici : cela permet d'être sûr d'avoir toujours les bonnes classes
// et la bonne structure. 
// \t = tabulation,  \n = saut de ligne :: permet au code d'être indenté lors de la génération du menu

var element_types; // En exportant ce tableau objet, on permet au fichier import_data_... de générer du contenu en fonction des données importées
// le fichier import_data_menu/form/table appelera donc un élément de se tableau grâce aux index (ne pas oublier d'importer cette variable dans le fichier import)
// par exemple, si dans le CSV, j'ai un élément de type 'link', alors il cherchera dans ce tableau objet element_types['type-layout']['insert-link]

if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
  element_types = {
    "type-info": {
      "insert-title": "\t<span contenteditable='true' id='menu-title' data-tag='menu-title' class='menu-title'>Mon menu</span>\n",
      "insert-img": "\t<div id='menu-logo' class='menu-logo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
      "insert-banner": "\t<div class='menu-logo menu-logo-solo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
      "insert-separator": "\t<span class='menu-separator'></span>\n"
    },
    "type-menu": {
      "insert-menu_link": '\t<div class="menu-item"><a href="/link" class="menu-link" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-menu_many": '\t<div class="menu-item"><a href="/link" class="menu-link has-submenu" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-lower_menu": '\t<div class="menu-submenu"><ul></ul></div>\n'
    }
  };
} else {
  element_types = {
    "type-info": {
      "insert-title": "\t<span contenteditable='true' id='menu-title' data-tag='menu-title' class='menu-title'>Mon menu</span>\n",
      "insert-img": "\t<div id='menu-logo' class='menu-logo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
      "insert-banner": "\t<div class='menu-logo menu-logo-solo' style='background-image: url({{ URL::asset('images/favicon.ico') }})'></div>\n",
      "insert-separator": "\t<span class='menu-separator'></span>\n"
    },
    "type-menu": {
      "insert-menu_link": '\t<div class="menu-item"><a href="/link" class="menu-link" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-menu_many": '\t<div class="menu-item"><a href="/link" class="menu-link has-submenu" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-lower_menu": '\t<div class="menu-submenu"><ul></ul></div>\n'
    }
  };
}

function getOldContent() {
  // On rend l'ancien contenu modifiable
  $('#full-menu .label-text').attr('contenteditable', true);
  $('#full-menu .label-option-text').attr('contenteditable', true);
  $('#full-menu #form-title, #full-form h2,#full-form p,#full-form a,#full-form ol,#full-form ul,#full-form hr').attr('contenteditable', true); // On récupère les paramètres
  // Theme

  var actual_theme = $("#generated-menu").attr('class');
  actual_theme = actual_theme.replace('theme-', '');
  var selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
  selected_theme.prop('checked', true); // Titre (non présent pour les menu)

  var actual_title = $("#full-menu #menu-title").text();
  $("#menu-creator-title").val(actual_title); // Lien (non présent pour les menu)

  var actual_link = $("#menu-logo").css('background-image');
  console.log(actual_link);
  $("#menu-creator-link").val(actual_link); // Option de réinitialisation (non présent pour les menu)

  var actual_reset = $("#content-created-blueprint").find('input[type=reset]');

  if (actual_reset.length > 0) {
    $('#reset-button').prop('checked', true);
  }
} // ANCHOR Fonction de sauvegarde ( à ne pas toucher )

function updatecontent() {
  // on récupère le contenu
  var blueprint_content = $('#content-created-blueprint').html(); // on trie les éléments à ne pas inclure dans le code 

  blueprint_content = blueprint_content.replace(/ contenteditable="(.*?)\"/g, "");
  blueprint_content = blueprint_content.replace(/ onclick="(.*?)\"/g, "");
  blueprint_content = blueprint_content.replace(/ content-editable-selected/g, ""); // on remplace les doubles sauts de lignes

  blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n"); // on update le code par rapport au blueprint

  $('#raw-code').html(blueprint_content);
  var code_content = $('<div>').text($('#raw-code').text()).html(); // prettify (permet de rendre le code joli)

  $("#formatted-code").html(PR.prettyPrintOne(code_content));
}

; // ANCHOR Initialisation du formulaire ( à ne pas toucher )

if ($('#raw-code').val().length <= 0) {
  // Il n'y a aucun contenu précédent : on est donc en création à partir de 0
  updatecontent();
} else {
  // Il y a du contenu déjà crée : on est en modification ou en génération de contenu
  getOldContent();
  updatecontent();
} // ANCHOR Changement de titre du menu


$('#menu-creator-title').on('keyup', function () {
  $('#full-menu #menu-title').text($('#menu-creator-title').val());
  updatecontent();
}); // ANCHOR Afficher ou non le titre du menu

$('#menu-creator-title-display').on('click', function () {
  if ($(this).is(":checked")) {
    $('#full-menu .menu-identity .menu-separator').before(element_types["type-info"]["insert-title"]);
    $('#full-menu .menu-identity #menu-title').text($('#menu-creator-title').val());

    if ($('#menu-creator-link-display').is(":checked")) {
      $('#full-menu .menu-identity #menu-logo').removeClass('menu-logo-solo');
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    } else {
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    }
  } else {
    $('#full-menu #menu-title').remove();

    if ($('#menu-creator-link-display').is(":checked")) {
      $('#full-menu .menu-identity #menu-logo').addClass('menu-logo-solo');
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    } else {
      $('#full-menu .menu-identity').addClass('hidden');
      $('#menubar-easytoc').addClass('full-width');
    }
  }
}); // ANCHOR Changement de lien du logo

$('#menu-creator-link').on('keyup', function () {
  $("#menu-logo").css('background-image', 'url(' + $('#menu-creator-link').val() + ')');
  updatecontent();
}); // ANCHOR Afficher ou non le logo

$('#menu-creator-link-display').on('click', function () {
  if ($(this).is(":checked")) {
    $('#full-menu .menu-identity').prepend(element_types["type-info"]["insert-img"]);
    $('#full-menu .menu-identity #menu-logo').css('background-image', 'url(' + $('#menu-creator-link').val() + ')');

    if (!$('#menu-creator-title-display').is(":checked")) {
      $('#full-menu .menu-identity #menu-logo').addClass('menu-logo-solo');
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    } else {
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    }
  } else {
    $('#full-menu #menu-logo').remove();

    if ($('#menu-creator-title-display').is(":checked")) {
      $('#full-menu .menu-identity').removeClass('hidden');
      $('#menubar-easytoc').removeClass('full-width');
    } else {
      $('#full-menu .menu-identity').addClass('hidden');
      $('#menubar-easytoc').addClass('full-width');
    }
  }
}); // ANCHOR Fonction centrale !! Permet d'ajouter du contenu à l'espace de création
// Cette fonction se base sur la liste d'élément précédemment définis element_types 

function addElement(element_type, element_type_name) {
  // permettra d'identifier l'élément (lui donne un ID aléatoire)
  var element_id = Math.random().toString(36).substr(2, 9);
  var element_name = Math.random().toString(36).substr(2, 9); // on différencie les éléments questions, layout, special etc 

  element_type = element_type.match(/type-([^ ]+)/gi);
  element_type = element_type[0]; // on récupère le type de l'élément

  var element_content;

  if (element_type_name != "reset-button") {
    var added_content = element_types[element_type][element_type_name];
    element_content = "\t<div data-id=" + element_id + " data-elementType='" + element_type + "' data-elementTypeName='" + element_type_name + "' class='element-container " + element_type + " " + element_type_name + "'>\n\t" + added_content + "\n\t</div>\n";
    /* on attribue les id au contenu interne */

    var id_replace_regex = /REPLACEID/g;
    element_content = element_content.replace(id_replace_regex, element_id);
    var name_replace_regex = /REPLACENAME/g;
    element_content = element_content.replace(name_replace_regex, element_name);
  } else {
    element_content = element_types[element_type][element_type_name];
  } // on récupère l'ancien contenu 


  var previous_content = $('#content-created-blueprint #full-form').html(); // en fonction du type , différentes actions 

  var actions_content = $('#form-actions').html(); // on ajoute le contenu sauf si c'est lié au bouton RESET (doit être ajouté ou enlevé)

  if (element_type_name == "reset-button") {
    if (actions_content.indexOf('type="reset"') > -1 || actions_content.indexOf("type='reset'") > -1) {
      $('#form-actions input[type="reset"]').remove();
    } else {
      var _previous_content = $('#form-actions').html();

      $('#form-actions').html(element_content + actions_content);
    }

    actions_content = $('#form-actions').html();
  } else {
    // et on y ajoute l'élément voulu
    $('#content-created-blueprint #full-form').html(previous_content + element_content);
  }

  var new_element = $('.element-container').last();
  $(new_element).find('[contenteditable=true]').first().focus();

  if (element_type == "type-question" && (element_type_name == "insert-one_answer" || element_type_name == "insert-many_answer" || element_type_name == "insert-list_answer")) {
    // on ajoute une option exemple
    addOption();
  }

  if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
    message = "Element added";
  } else {
    message = "Element ajouté";
  }

  Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
  updatecontent();
} // ANCHOR Ajout d'un élément : quand on clique sur un bouton avec la classe .add-element

$('.add-element').on('click', function () {
  var element_type = $(this).attr("class"); // récupère le type d'élément à ajouter

  var element_type_name = $(this).attr("id"); // récupère le nom spécifique d'élément à ajouter

  addElement(element_type, element_type_name); // on ajoute l'élement

  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
}); // ANCHOR Sauvegarde définitive (quand on clique sur le bouton d'enregistrement ) ( normalement à ne pas toucher )

$('#btn-save-project').on('click', function () {
  updatecontent();
  var post_url = $("#full-form-post").attr('action');
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
    console.log(error); // TODO Erreur

    if (!$('#title-input').val()) {
      $("#title-input").addClass('required-failed');
      $("#title-input").focus();
    }

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "Some informations are missing : please fill the empty fields.";
    } else {
      message = "Il manque des informations à votre projet : veuillez remplir les champs manquants.";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
  });
}); // ANCHOR Action sur l'élement

var element_select;
$(document.body).off('keyup') // ré-initialisation pour empêcher les écouteurs d'évenements de se lancer plusieurs fois 
// Empeche de passer le focus sur l'input quand on clique sur le label (pour contrer comportement de formulaire de base)
.on('click', '.element-container label, .element-container legend', function (e) {
  if ($(e.target).prop('tagName') != "SELECT") {
    $(this).find('[contenteditable=true]').focus();
  } else {
    $(this).closest('label').focus();
  }

  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
}) // Modifie le focus quand on clique sur une DIV, un FIELDSET ou une LEGEND (pour contrer comportement de formulaire de base)
.on('click', '.element-container', function (e) {
  if (e.target.nodeName == "DIV" || e.target.nodeName == "FIELDSET") {
    $(this).find('[contenteditable=true]').focus();
  } else if (e.target.nodeName == "LEGEND") {
    $(this).find('legend span[contenteditable=true]').focus();
  }

  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
}) // Quand on clique sur une option
.on('click', '#full-form fieldset label, #full-form select option', function (e) {
  $('.content-editable-selected').removeClass('content-editable-selected');
  $('.option-selected').removeClass('option-selected'); // $(this).closest('.element-container').addClass('content-editable-selected');

  $(this).addClass('option-selected').addClass('content-editable-selected');
  selected_option = $('.option-selected');
  previous_option = selected_option.prev();
  next_option = selected_option.next();
  refreshMoveButtons(previous_option, next_option, true);
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
  updatecontent();
}) // Quand on sélectionne un élément éditable (c'est là le plus important)
.on('focus', '[contenteditable=true], #full-form input, #full-form select, #full-form textarea, #full-form fieldset label, #full-form select option', function (e) {
  // on récupère l'élément sélectionné et on focus sur l'élément parent
  if (e.target) {
    element_select = e.target; // on ré initialise les classes

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
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

  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
  $(element_selected_container).addClass("content-editable-selected");
  var tag = $(this).attr('data-tag');

  if (tag != "form-title") {
    // si ce n'est pas le titre général du formulaire (position verouillée)
    $('.action-delete').removeAttr('disabled');
    $('.element_add-option').attr("disabled", 'true');
    $('.side-tool').css("margin-top", $('.content-editable-selected').position().top + "px"); // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");

    var element_type = $(element_selected_container).attr('data-elementtype');
    var element_name = $(element_selected_container).attr('data-elementtypename');

    if (tag == "option") {
      element_type = $(element_selected_container).closest('.element-container').attr('data-elementtype');
      element_name = $(element_selected_container).closest('.element-container').attr('data-elementtypename');
    } // Side tool : déplacemet haut bas et suppression 


    $('.side-tool').show();

    if (element_type != "type-layout" || element_type == "type-layout" && element_name == "insert-link") {
      // on récupère l'élément contenant l'intitulé
      if (!selected_option) {
        intitule = $(element_selected_container).find('[data-tag=label-text]');
      } else {
        intitule = $(element_selected_container).closest('.element-container').find('[data-tag=label-text]');
      } // on récupère l'intitule


      if (intitule) {
        intitule.off('keyup'); // re-init

        $('#elem-title').val(intitule.text()); // récupère la valeur de l'elem

        intitule.on('keyup', function () {
          // traitement modif
          e.stopPropagation();
          $('#elem-title').val(intitule.text());
          updatecontent();
        });
      } // on récupère le placeholder 


      input = $('.content-editable-selected').find('input');

      if (input.length == 0) {
        input = $(element_selected_container).find('textarea');
      }

      var placeholder = input.attr('placeholder'); // si c'est un select 

      if ($(element_selected_container).find('select').length > 0) {
        input = $(element_selected_container).find('select');
        placeholder = input.find('option').first().text();

        if ($(element_selected_container).find('select').attr('multiple')) {
          $('#elem-multiple-choice').prop('checked', true);
        } else {
          $('#elem-multiple-choice').prop('checked', false);
        }
      }

      $("#elem-placeholder").val(placeholder); // on récupère le required

      if ($(element_selected_container).hasClass('field-required')) {
        $('#elem-required').prop("checked", true);
      } else {
        $('#elem-required').prop("checked", false);
      } // on recupère la longueur max


      var maxlength = input.attr('maxlength');
      $("#elem-length").val(maxlength); // on recupère le type de réponse

      var answer_type = input.attr('type');
      $('#elem-type option[value=' + answer_type + ']').prop('selected', true); // on recupère l'attribut name

      var answer_name = input.attr('name');
      $('#elem-options-name').val(answer_name);

      if (selected_option) {
        // on recupère le nom de l'option
        var option_label = $('.content-editable-selected .label-option-text');
        $("#elem-option-label").val(option_label.text());
        option_label.off('keyup'); // re-init

        option_label.on('keyup', function () {
          // traitement modif
          e.stopPropagation();
          $("#elem-option-label").val(option_label.text());
          updatecontent();
        }); // on recupère la valeur de l'option

        var option_value = $('.content-editable-selected input').attr('value');
        $("#elem-option-value").val(option_value);
      } // on cache toutes les actions de bases pour les réafficher en fonction du contenu sélectionné


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

        var _option_label = $('.content-editable-selected select option:selected');

        if ($(_option_label).is(':enabled')) {
          $('.action-option-label').show();
          $('.action-option-value').show();
          $('.action-delete-option').show();
        }

        $("#elem-option-label").val(_option_label.text()); // on recupère la valeur de l'option

        var _option_value = $('.content-editable-selected select option:selected:enabled').attr('value');

        $("#elem-option-value").val(_option_value);
      } else if (element_name == "insert-link") {
        $('.action-required').hide();
        $('.action-url').show();
        $('.action-title').show();
        $('.action-options-name').hide();

        if (intitule) {
          // on désactive les events précedents
          $('#elem-url').off('keyup'); // on récupère les attributs de l'élement sélectionné

          $('#elem-url').val($(intitule).attr('href')); // event de changement d'url

          var link_url;
          $('#elem-url').on('keyup', function (e) {
            e.stopPropagation();
            link_url = $('#elem-url').val();
            $(intitule).attr('href', link_url);
            updatecontent();
          }); // on désactive les events précedents

          $('#elem-url-title').off('keyup'); // on récupère les attributs de l'élement sélectionné

          $('#elem-url-title').val($(intitule).attr('title')); // event de changement d'url

          var link_title;
          $('#elem-url-title').on('keyup', function (e) {
            // console.log($('#elem-url-title').val());
            e.stopPropagation();
            link_title = $('#elem-url-title').val();
            $(intitule).attr('title', link_title);
            updatecontent();
          });
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
}) // quand on déselectionne un élement...
.on('blur', '[contenteditable=true]', function (e) {
  // e.preventDefault();
  // let element_select_before = window.getSelection().getRangeAt(0).startContainer;
  updatecontent();
}) // ANCHOR Modification du texte via l'intérieur du formulaire
.on('keyup', '#form-title', function () {
  $('#form-creator-title').val($('#form-title').text());
  updatecontent();
}); // ANCHOR Masquer les sidetools au changement d'onglet

$("#nav-code-tab").on('click', function () {
  $('#generated-menu').attr("action", $('#form-creator-link').val());
  $('#generated-menu').attr("method", $('#form-creator-method').val());
  $("#actions-interface").addClass('d-none');
  $('.side-tool').hide();
  updatecontent();
}); // ANCHOR Actions sur l'élément ciblé

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
        refreshMoveButtons(previous_element, next_element, false); // Déplacement des Tools latéraux

        $('.side-tool').css("margin-top", $(element_selected_container).position().top + "px"); // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");
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
        refreshMoveButtons(previous_element, next_element, false); // Déplacement des Tools latéraux

        $('.side-tool').css("margin-top", $(element_selected_container).position().top + "px"); // $("#actions-interface .action-supp").css('top', $(element_selected_container).position().top + "px");
      }

      break;
    // Suppression

    case "delete":
      deletecommand.execute();
      $("#actions-interface").addClass('d-none');
      $(".side-tool").hide();
      $('.action-delete').attr('disabled', 'true');
      $('.action-undo').removeAttr('disabled');

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "Deleted element";
      } else {
        message = "Élément supprimé";
      }

      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      break;
    // Annuler la suppression

    case "undo":
      deletecommand.undo();
      $(this).attr('disabled', 'true');
      $('.alert-success').slideUp();
      $('.element-container').last().find('[contenteditable=true]').first().focus();

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "Element recovered";
      } else {
        message = "Élément rétabli";
      }

      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
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
        } // Retirer l'étoile dans le label (après le span)


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
        } // Ajouter l'étoile dans le label


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

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "Option added";
      } else {
        message = "Option ajoutée";
      }

      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      break;

    case "delete-option":
      deleteOption();

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "Deleted option";
      } else {
        message = "Option supprimée";
      }

      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
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
      }

      ;
      break;
  }

  updatecontent();
}); // ANCHOR Selection de tout le texte au clic
// NOTE Non utilisé : permet en gros de sélectionner tout le texte au clic sur un element contenteditabme

function selectText(element) {
  var sel, range;
  var el = element[0];

  if (window.getSelection && document.createRange) {
    //Browser compatibility
    sel = window.getSelection();

    if (sel.toString() == '') {
      //no text selection
      window.setTimeout(function () {
        range = document.createRange(); //range object

        range.selectNodeContents(el); //sets Range

        sel.removeAllRanges(); //remove all ranges from selection

        sel.addRange(range); //add Range to a Selection.
      }, 1);
    }
  } else if (document.selection) {
    //older ie
    sel = document.selection.createRange();

    if (sel.text == '') {
      //no text selection
      range = document.body.createTextRange(); //Creates TextRange object

      range.moveToElementText(el); //sets Range

      range.select(); //make selection.
    }
  }
}

; // ANCHOR Fonction d'ajout d'option ( osef ça concerne pas les menus )

function addOption(option_type_parameter) {
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
  var option_parent_element = $(".content-editable-selected");
  var option_type = option_type_parameter || $(option_parent_element).attr("data-elementtypename");

  if (!option_type) {
    option_parent_element = $(".content-editable-selected").closest(".element-container");
    option_type = $(".content-editable-selected").closest(".element-container").attr("data-elementtypename");
  }

  var option_group = $(option_parent_element).find('fieldset');
  var first_option = $(option_group).find('input').first();
  var option_name = $(first_option).attr('name');

  if (option_group.length == 0) {
    option_group = $(option_parent_element).find('select');
    option_name = "";
  }

  if (!option_name) {
    option_name = Math.random().toString(36).substr(2, 9);
  }

  var option_id = Math.random().toString(36).substr(2, 9);
  var option = element_types["type-answer-option"][option_type];
  var option_id_replace_regex = /REPLACEID/g;
  option = option.replace(option_id_replace_regex, option_id);
  var option_name_replace_regex = /REPLACENAME/g;
  option = option.replace(option_name_replace_regex, option_name);
  $(option_group).append(option);
} // ANCHOR Fonction de suppression d'option dans un select ( osef ça concerne pas les menus )

function deleteOption() {
  var select_option_selected = $(".content-editable-selected select option:selected");
  $(select_option_selected).remove();
  $(".content-editable-selected select").val($(".content-editable-selected select option:first").val());
  $('.action-delete-option').hide();
} // ANCHOR Fonction Undo/Redo suppression ( à ne pas toucher )
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
} // ANCHOR Fonction Suppression
// Je comprend pas moi-même comment ça marche. Quand on clique sur supprimer, ça ne fait que "détacher" l'élement
// Si tu comptes modifier cette fonction, cela risque de poser problème.. c'est risqué.


var deletecommand = new command({
  execute: function execute() {
    element = $(".content-editable-selected").removeClass('content-editable-selected');
    element = element.detach();
  },
  undo: function undo() {
    element.appendTo("#full-form");
  }
}); // ANCHOR Mise en forme du texte (gras, italic, underline...) ( à ne pas toucher )

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
}); // ANCHOR Permet d'actualiser le thème choisi via les boutons radios en haut à droite ( à ne pas toucher )

$('input[name="theme"]').on('change', function () {
  var theme = "theme-" + $(this).val();
  $('#generated-menu').attr('class', theme);
  updatecontent();
}); // ANCHOR Activer / désactiver les boutons de déplacement dynamique
// Cette fonction permet de re-placer les boutons de déplacement (haut/bas)
// A toi de voir si tu peux l'utiliser ou non
// Attention : c'est une fonction exportée, il faut faire attention à ce qu'elle ne soit pas appelée dans un autre fichier !

function refreshMoveButtons(previous_element, next_element, option) {
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
      if (previous_element.attr("id") == "form-title" || previous_element.hasClass("indicator-required") || !$(previous_element).hasClass("element-container")) {
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
} // ANCHOR Copier le contenu code rapidement grâce aux boutons ( à ne pas toucher )

$("#copy-raw-code, #copy-css-link").on('click', function () {
  if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
    message = "Code copied !";
    $(".copy-container button").text("Copy");
  } else {
    message = "Code copié !";
    $(".copy-container button").text("Copier");
  }

  $(this).text(message);
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
});
new ClipboardJS('#copy-css-link'); // pas touche

new ClipboardJS('#copy-raw-code'); // pas touche

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/components/menu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp2\htdocs\laravel\easytoc\resources\js\components\menu.js */"./resources/js/components/menu.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);