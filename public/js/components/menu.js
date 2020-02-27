(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/menu"],{

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/*! exports provided: element_types, getOldContent, addLink, addsublink, refreshMoveButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_types", function() { return element_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldContent", function() { return getOldContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLink", function() { return addLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addsublink", function() { return addsublink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshMoveButtons", function() { return refreshMoveButtons; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
// ANCHOR Données initiales
// On importe les variables et fonctions externes (qui sont définie dans app.js)

var element;
var element_selected_container;
var previous_element;
var selected_element;
var next_element;
var previous_sublink;
var selected_sublink;
var next_sublink;
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
}); // ANCHOR Liste WYSIWYG : liste de tous les éléments dynamiques ajoutables
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
      "insert-separator": "\t<span class='menu-separator'></span>\n"
    },
    "type-menu": {
      "insert-menu_link": '\t<div class="menu-item"><a href="/link" class="menu-link" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-sub_link": '\t<div class="menu-item"><a href="/link" class="menu-link has-submenu" onclick="return false;"><li><span contenteditable="true" data-tag="menu-item" class="menu-item-title">Lien</span></li></a></div>\n',
      "insert-sub_menu": '\t<div class="menu-submenu"><ul></ul></div>\n'
    }
  };
} // FIXME A verifier


function getOldContent() {
  // On rend l'ancien contenu modifiable
  $('#full-menu .menu-item-title').attr('contenteditable', true);
  $('#full-menu #menu-title').attr('contenteditable', true); // On récupère les paramètres
  // Theme

  var actual_theme = $("#generated-menu").attr('class');
  actual_theme = actual_theme.replace('theme-', '');
  var selected_theme = $('.theme-switch').find('input[value=' + actual_theme + ']');
  selected_theme.prop('checked', true); // Titre (non présent pour les menu)

  var actual_title = $("#full-menu #menu-title").text();
  $("#menu-creator-title").val(actual_title); // Lien (non présent pour les menu)

  var actual_link = $("#menu-logo").css('background-image');
  console.log(actual_link);
  $("#menu-creator-link").val(actual_link); // sublink de réinitialisation (non présent pour les menu)

  var actual_reset = $("#content-created-blueprint").find('input[type=reset]');

  if (actual_reset.length > 0) {
    $('#reset-button').prop('checked', true);
  }
} // ANCHOR Fonction de sauvegarde

function updatecontent() {
  // on récupère le contenu
  var blueprint_content = $('#content-created-blueprint').html(); // on trie les éléments à ne pas inclure dans le code 

  blueprint_content = blueprint_content.replace(/ contenteditable="(.*?)\"/g, "");
  blueprint_content = blueprint_content.replace(/ content-editable-selected/g, ""); // on remplace les doubles sauts de lignes

  blueprint_content = blueprint_content.replace(/\n\s*\n/g, "\n"); // on update le code par rapport au blueprint

  $('#raw-code').html(blueprint_content);
  var code_content = $('<div>').text($('#raw-code').text()).html(); // prettify (permet de rendre le code joli)

  $("#formatted-code").html(PR.prettyPrintOne(code_content));
}

; // ANCHOR Initialisation du formulaire

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

function addLink(type) {
  // permettra d'identifier l'élément (lui donne un ID aléatoire)
  var element_id = Math.random().toString(36).substr(2, 9); // on récupère le type de l'élément

  if (type == "link") {
    var added_content = element_types["type-menu"]["insert-menu_link"];
    var id_replace_regex = /REPLACEID/g;
    element_content = added_content.replace(id_replace_regex, element_id);
  } else if (type == "sub_link") {
    var _added_content = element_types["type-menu"]["insert-sub_link"];
    var _id_replace_regex = /REPLACEID/g;
    element_content = _added_content.replace(_id_replace_regex, element_id);
  } else if (type == "sub_menu") {
    var _added_content2 = element_types["type-menu"]["insert-sub_menu"];
    var _id_replace_regex2 = /REPLACEID/g;
    element_content = _added_content2.replace(_id_replace_regex2, element_id);
  }
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
// Empêcher la redirection
.on('click', '#full-menu a', function (e) {
  e.preventDefault();
}) // Quand on clique sur un sous menu
.on('click', '#full-menu .has-submenu li', function (e) {
  $('.content-editable-selected').removeClass('content-editable-selected');
  $('.sublink-selected').removeClass('sublink-selected'); // $(this).closest('.element-container').addClass('content-editable-selected');

  $(this).addClass('sublink-selected').addClass('content-editable-selected');
  selected_sublink = $('.sublink-selected');
  previous_sublink = selected_sublink.prev();
  next_sublink = selected_sublink.next();
  refreshMoveButtons(previous_sublink, next_sublink, true);
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
  updatecontent();
}) // Quand on sélectionne un élément éditable (c'est là le plus important)
.on('focus', '[contenteditable=true]', function (e) {
  // on récupère les paramètres du lien 
  updatecontent();
}) // ANCHOR Modification du texte via l'intérieur du formulaire
.on('keyup', '#full-menu #menu-title', function () {
  $('#menu-creator-title').val($('#full-menu #menu-title').text().trim());
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
  } else if ($(element_select).hasClass('sublink-selected')) {
    element_selected_container = $('.sublink-selected');
  } else {
    element_selected_container = $(element_select).closest(".element-container");
  }

  previous_element = element_selected_container.prev();
  next_element = element_selected_container.next();

  switch ($(this).data("action")) {
    // Déplacement vers le haut
    case "move-up":
      if (selected_sublink) {
        // to do , ne compte pas le seelect
        previous_sublink = selected_sublink.prev();
        next_sublink = selected_sublink.next();

        if (previous_element.attr("id") != "form-title" && previous_sublink.attr("disabled") != "true" && previous_sublink.attr('data-tag') == "sublink") {
          previous_sublink.insertAfter(selected_sublink);
        }

        refreshMoveButtons(previous_sublink, next_sublink, true);
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
      if (selected_sublink) {
        // to do , ne compte pas le seelect
        previous_sublink = selected_sublink.prev();
        next_sublink = selected_sublink.next();

        if (next_element.attr("id") != "form-title" && next_sublink.attr("disabled") != "true" && next_sublink.attr('data-tag') == "sublink") {
          next_sublink.insertBefore(selected_sublink);
        }

        refreshMoveButtons(previous_sublink, next_sublink, true);
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

    case "add-sublink":
      addsublink();

      if (selected_sublink) {
        previous_sublink = selected_sublink.prev();
        next_sublink = selected_sublink.next();
        refreshMoveButtons(previous_sublink, next_sublink, true);
      }

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "sublink added";
      } else {
        message = "sublink ajoutée";
      }

      Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "success");
      break;

    case "delete-sublink":
      deletesublink();

      if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
        message = "Deleted sublink";
      } else {
        message = "sublink supprimée";
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

    case "sublinks-name":
      if ($(this).val() != 0) {
        $(element_selected_container).find('input').attr('name', $(this).val());
        $(element_selected_container).find('select').attr('name', $(this).val());
        $(element_selected_container).find('textarea').attr('name', $(this).val());
      }

      break;
    // Changement de nom de l'sublink

    case "sublink-label":
      if ($(this).val() != 0 && $('.content-editable-selected input').length > 0) {
        $('.content-editable-selected .label-sublink-text').text($(this).val());
      } else if ($(this).val() != 0 && $('.content-editable-selected select').length > 0) {
        $('.content-editable-selected select sublink:selected').text($(this).val());
      }

      break;
    // Changement de valeur de l'sublink

    case "sublink-value":
      if ($(this).val() != 0 && $('.content-editable-selected input').length > 0) {
        input.attr('value', $(this).val());
      } else if ($(this).val() != 0 && $('.content-editable-selected select').length > 0) {
        $('.content-editable-selected select sublink:selected').attr('value', $(this).val());
      }

      break;
    // Changement de placeholder

    case "placeholder":
      input.attr('placeholder', $(this).val());

      if ($(input).prop("tagName") == "SELECT") {
        $(input).find('sublink').first().text($(this).val());
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

; // ANCHOR Fonction d'ajout d'sublink ( osef ça concerne pas les menus )

function addsublink(sublink_type_parameter) {
  Object(_app__WEBPACK_IMPORTED_MODULE_0__["setSideWindow"])();
  var sublink_parent_element = $(".content-editable-selected");
  var sublink_type = sublink_type_parameter || $(sublink_parent_element).attr("data-elementtypename");

  if (!sublink_type) {
    sublink_parent_element = $(".content-editable-selected").closest(".element-container");
    sublink_type = $(".content-editable-selected").closest(".element-container").attr("data-elementtypename");
  }

  var sublink_group = $(sublink_parent_element).find('fieldset');
  var first_sublink = $(sublink_group).find('input').first();
  var sublink_name = $(first_sublink).attr('name');

  if (sublink_group.length == 0) {
    sublink_group = $(sublink_parent_element).find('select');
    sublink_name = "";
  }

  if (!sublink_name) {
    sublink_name = Math.random().toString(36).substr(2, 9);
  }

  var sublink_id = Math.random().toString(36).substr(2, 9);
  var sublink = element_types["type-answer-sublink"][sublink_type];
  var sublink_id_replace_regex = /REPLACEID/g;
  sublink = sublink.replace(sublink_id_replace_regex, sublink_id);
  var sublink_name_replace_regex = /REPLACENAME/g;
  sublink = sublink.replace(sublink_name_replace_regex, sublink_name);
  $(sublink_group).append(sublink);
} // ANCHOR Fonction de suppression d'sublink dans un select ( osef ça concerne pas les menus )

function deletesublink() {
  var select_sublink_selected = $(".content-editable-selected select sublink:selected");
  $(select_sublink_selected).remove();
  $(".content-editable-selected select").val($(".content-editable-selected select sublink:first").val());
  $('.action-delete-sublink').hide();
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

function refreshMoveButtons(previous_element, next_element, sublink) {
  if (sublink) {
    if (previous_element) {
      if (previous_element.attr("disabled") != "true" && previous_element.attr('data-tag') == "sublink") {
        $('#action-move-up').removeAttr('disabled');
      } else {
        $('#action-move-up').attr('disabled', true);
      }

      if (next_element.attr("disabled") != "true" && next_element.attr('data-tag') == "sublink") {
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