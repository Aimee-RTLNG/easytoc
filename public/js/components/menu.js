(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/components/menu"],{

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/*! exports provided: element_types, getOldContent, addLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element_types", function() { return element_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldContent", function() { return getOldContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLink", function() { return addLink; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./resources/js/app.js");
// ANCHOR Données initiales
// On importe les variables et fonctions externes (qui sont définie dans app.js)

var element_content;
var link_type;
var previous_link;
var selected_link;
var next_link;
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
      "insert-title": '\t<span contenteditable="true" data-tag="menu-title" class="menu-title" id="menu-title">My menu</span>\n',
      "insert-img": '\t<div class="menu-logo" id="menu-logo"></div>\n',
      "insert-banner": "\t<div class='menu-logo menu-logo-solo'></div>\n",
      "insert-separator": '\t<span class="menu-separator"></span>\n'
    },
    "type-menu": {
      "insert-menu_link": '\t<li role="none" class="menu-item element-container"><a role="menuitem"  href="/" class="menu-name" tabindex="0" title="Go to the Link page"><span contenteditable="true" class="menu-item-title">Link</span></a></li>\n',
      "insert-sub_link": '\t\t<li role="none" class="menu-item" ><a role="menuitem" href="/" class="menu-link sub-link" title="Go to the Menu - Link page"><span contenteditable="true" class="menu-item-title">Sub-menu link</span></a></li>\n',
      "insert-sub_menu": '\t<li role="none" class="menu-item has-submenu element-container"><button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="REPLACEID" class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)"><span contenteditable="true" class="menu-item-title">Menu</span></button><ul role="menu" class="submenu hidden" aria-label="" id="REPLACEID"></ul></li>\n'
    }
  };
} else {
  element_types = {
    "type-info": {
      "insert-title": '\t<span contenteditable="true" data-tag="menu-title" class="menu-title" id="menu-title">Mon menu</span>\n',
      "insert-img": "\t<div id='menu-logo' class='menu-logo' style='background-image: url({{ URL::asset('images/Logo-white.png') }})'></div>\n",
      "insert-banner": "\t<div class='menu-logo menu-logo-solo' style='background-image: url({{ URL::asset('images/Logo-white.png') }})'></div>\n",
      "insert-separator": '\t<span class="menu-separator"></span>\n'
    },
    "type-menu": {
      "insert-menu_link": '\t<li role="none" class="menu-item element-container"><a role="menuitem"  href="/" class="menu-name" tabindex="0" title="Se rendre sur la page Lien"><span contenteditable="true" class="menu-item-title">Lien</span></a></li>\n',
      "insert-sub_link": '\t\t<li role="none" class="menu-item" ><a role="menuitem" href="/" class="menu-link sub-link" title="Se rendre sur la page menu - Lien"><span contenteditable="true" class="menu-item-title">Lien</span></a></li>\n',
      "insert-sub_menu": '\t<li role="none" class="menu-item has-submenu element-container"><button role="menuitem" aria-haspopup="true" aria-expanded="false" aria-controls="REPLACEID"  class="menu-name menu-submenus closed" tabindex="0" onclick="displayMenu(event)"><span contenteditable="true" class="menu-item-title">Menu</span></button><ul role="menu" class="submenu hidden" aria-label="" id="REPLACEID"></ul></li>\n'
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

  var actual_title = $("#full-menu #menu-title").text().trim();

  if (actual_title) {
    $("#menu-creator-title").val(actual_title);
  } // Lien du logo


  var actual_link = $("#menu-logo").css('background-image');

  if (actual_link) {
    actual_link = actual_link.replace('url("', "");
    actual_link = actual_link.replace('")', "");
    $("#menu-creator-link").val(actual_link);
  } // option image


  if ($('#full-menu').has('#menu-logo').length) {
    $("#menu-creator-link-display").attr('checked', true);
  } else {
    $("#menu-creator-link-display").removeAttr('checked');
  } // option titre


  if ($('#full-menu').has('#menu-title').length) {
    $("#menu-creator-title-display").attr('checked', true);
  } else {
    $("#menu-creator-title-display").removeAttr('checked');
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
  var element_id = Math.random().toString(36).substr(2, 9);
  var menu_length;

  if (type == "sub_link") {
    menu_length = $(selected_link).find('ul').children("li").length;
    console.log($(selected_link).find('ul'));
  } else {
    menu_length = $("#menubar-easytoc").children("li").length;
  }

  console.log(menu_length);

  if (menu_length > 8) {
    message = "Vous ne pouvez pas rajouter plus de liens";

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == "en") {
      message = "You already have too much links !";
    }

    Object(_app__WEBPACK_IMPORTED_MODULE_0__["alertMsg"])(message, "error");
    return;
  } // on récupère le type de l'élément


  if (type == "link") {
    var added_content = element_types["type-menu"]["insert-menu_link"];
    var id_replace_regex = /REPLACEID/g;
    element_content = added_content.replace(id_replace_regex, element_id);
    $('#menubar-easytoc').append(element_content);
  } else if (type == "sub_link") {
    // On ajoute un lien
    var _added_content = element_types["type-menu"]["insert-sub_link"];
    var _id_replace_regex = /REPLACEID/g;
    element_content = _added_content.replace(_id_replace_regex, element_id);
    $(selected_link).find('ul').append(element_content); // On définit le titre du lien

    var menu_title = $(selected_link).find('.menu-submenus span').text().trim();
    var link_title = 'Se rendre sur la page ' + menu_title + ' - ' + $(selected_link).find('ul li').last().text().trim();

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == 'en') {
      link_title = 'Go to page ' + menu_title + ' - ' + $(selected_link).find('ul li').last().text().trim();
    }

    $(selected_link).find('li a').last().attr('title', link_title);
  } else if (type == "sub_menu") {
    var _added_content2 = element_types["type-menu"]["insert-sub_menu"];
    var _id_replace_regex2 = /REPLACEID/g;
    element_content = _added_content2.replace(_id_replace_regex2, element_id);
    $('#menubar-easytoc').append(element_content);
  }

  updatecontent();
} // ANCHOR Ajout d'un élément : quand on clique sur un bouton avec la classe .add-element

$('.add-element').on('click', function () {
  if ($(this).attr('id') == "insert-menu_link") {
    addLink("link");
  } else if ($(this).attr('id') == "insert-sub_menu") {
    addLink("sub_menu");
  } else if ($(this).attr('id') == "insert-sub_link") {
    addLink("sub_link");
  }

  updatecontent();
}); // ANCHOR Sauvegarde définitive (quand on clique sur le bouton d'enregistrement ) ( normalement à ne pas toucher )

$('#btn-save-project').on('click', function () {
  updatecontent();
  var post_url = $("#full-menu-post").attr('action');
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

$(document.body).off('keyup').off('click') // ré-initialisation pour empêcher les écouteurs d'évenements de se lancer plusieurs fois
.on('click', '#full-menu a', function (e) {
  e.preventDefault(); // Empêcher la redirection
}).on('focus', '#full-menu a, #full-menu button', function (e) {
  e.preventDefault();
  selected_link = $(this).closest('li');
  previous_link = selected_link.prev();
  next_link = selected_link.next();
  $('.content-editable-selected').removeClass('content-editable-selected');
  $(selected_link).addClass('content-editable-selected');
  $("#insert-sub_link").attr('disabled', true);
  $("#action-move-up").attr('disabled', true);
  $("#action-move-down").attr('disabled', true);
  $("#nav-link").removeAttr('disabled');

  if ($(this).hasClass('sub-link')) {
    link_type = "sub-link";
    $("#action-move-right").attr('disabled', true);
    $("#action-move-left").attr('disabled', true);
    $("#action-move-up").removeAttr('disabled');
    $("#action-move-down").removeAttr('disabled');
  } else if ($(this).hasClass('menu-submenus')) {
    link_type = "menu";
    $("#insert-sub_link").removeAttr('disabled');
    $("#action-move-right").removeAttr('disabled');
    $("#action-move-left").removeAttr('disabled');
    $("#nav-link").attr('disabled', true);
    $("#nav-link").val("");
  } else {
    link_type = "link";
    $("#action-move-right").removeAttr('disabled');
    $("#action-move-left").removeAttr('disabled');
  } // Affiche les input pour personnaliser les liens


  $('.custom-info-element').slideDown();
  $('#nav-name').val($(selected_link).find('span').first().text().trim());

  if (link_type != "menu") {
    $('#nav-link').val($(selected_link).find('a').attr('href'));
  }

  setMove(selected_link);
  updatecontent();
}) // ANCHOR Modification du titre du menu via l'intérieur du menu
.on('keyup', '#full-menu #menu-title ', function (e) {
  $('#menu-creator-title').val($('#full-menu #menu-title').text().trim());
  updatecontent();
}) // ANCHOR Modification du titre
.on('keyup', '#nav-name, #nav-link', function (e) {
  var link_text = $(selected_link).find('span');
  var link_selected = $(selected_link).find('a');
  var link_title;

  if ($(e.target).attr('id') == "nav-name") {
    if (link_type == "menu") {
      var menu_title = $('#nav-name').val();
      $(link_text).first().text(menu_title);
    } else {
      $(link_text).text($('#nav-name').val());

      if (link_type == "link") {
        link_title = 'Se rendre sur la page ' + $('#nav-name').val();

        if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == 'en') {
          link_title = 'Go to page ' + $('#nav-name').val();
        }

        $(link_selected).attr('title', link_title);
      } else {
        var _menu_title = $(selected_link).parent().parent().find('button').text().trim();

        link_title = 'Se rendre sur la page ' + _menu_title + ' - ' + $('#nav-name').val();

        if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == 'en') {
          link_title = 'Go to page ' + _menu_title + ' - ' + $('#nav-name').val();
        }

        $(link_selected).attr('title', link_title);
      }
    }
  } else if ($(e.target).attr('id') == "nav-link") {
    $(link_selected).attr('href', $('#nav-link').val());
  }

  updatecontent();
}).on('keyup', 'a span[contenteditable=true]', function () {
  var link_title;
  var link_selected = $(selected_link).find('a');

  if (link_type == "link") {
    link_title = 'Se rendre sur la page ' + $('#nav-name').val();

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == 'en') {
      link_title = 'Go to page ' + $('#nav-name').val();
    }

    $(link_selected).attr('title', link_title);
  } else {
    var menu_title = $(selected_link).parent().parent().find('button').text().trim();
    link_title = 'Se rendre sur la page ' + menu_title + ' - ' + $('#nav-name').val();

    if (_app__WEBPACK_IMPORTED_MODULE_0__["lang"] == 'en') {
      link_title = 'Go to page ' + menu_title + ' - ' + $('#nav-name').val();
    }

    $(link_selected).attr('title', link_title);
  }

  $('#nav-name').val($(this).text().trim());
}); // ANCHOR Masquer les sidetools au changement d'onglet

$("#nav-code-tab").on('click', function () {
  updatecontent();
}); // ANCHOR Actions sur l'élément ciblé

$(".form-element-action").on('click', function (e) {
  if ($(this).attr('id') == "action-delete") {
    deleteLink();
  } else if ($(this).attr('data-action') == "move-up") {
    moveLink("up");
  } else if ($(this).attr('data-action') == "move-down") {
    moveLink("down");
  } else if ($(this).attr('data-action') == "move-right") {
    moveLink("right");
  } else if ($(this).attr('data-action') == "move-left") {
    moveLink("left");
  }

  updatecontent();
}); // ANCHOR Fonction de déplacement d'un lien

function moveLink(direction) {
  switch (direction) {
    case "up":
    case "left":
      $(selected_link).insertBefore(previous_link);
      break;

    case "down":
    case "right":
      $(selected_link).insertAfter(next_link);
      break;

    default:
      break;
  }

  setMove(selected_link);
} // ANCHOR Fonction de suppression de link


function deleteLink() {
  $(selected_link).remove();
}

function setMove(selected_link) {
  previous_link = $(selected_link).prev();
  next_link = $(selected_link).next();

  if (previous_link.length == 0) {
    if (link_type == "menu" || link_type == "link") {
      $("#action-move-left").attr('disabled', true);
    } else if (link_type == "sub-link") {
      $("#action-move-up").attr('disabled', true);
    }
  } else {
    if (link_type == "menu" || link_type == "link") {
      $("#action-move-left").removeAttr('disabled');
    } else if (link_type == "sub-link") {
      $("#action-move-up").removeAttr('disabled');
    }
  }

  if (next_link.length == 0) {
    if (link_type == "menu" || link_type == "link") {
      $("#action-move-right").attr('disabled', true);
    } else if (link_type == "sub-link") {
      $("#action-move-down").attr('disabled', true);
    }
  } else {
    if (link_type == "menu" || link_type == "link") {
      $("#action-move-right").removeAttr('disabled');
    } else if (link_type == "sub-link") {
      $("#action-move-down").removeAttr('disabled');
    }
  }
} // ANCHOR Mise en forme du texte (gras, italic, underline...) 


$('.text-formatting').on("click", function () {
  switch ($(this).attr('id')) {
    case 'element-bold':
      $('.content-editable-selected').toggleClass('text-bold');
      updatecontent();
      break;

    case 'element-italic':
      $('.content-editable-selected').toggleClass('text-italic');
      updatecontent();
      break;

    case 'element-underline':
      $('.content-editable-selected').toggleClass('text-underline');
      updatecontent();
      break;
  }

  updatecontent();
}); // ANCHOR Permet d'actualiser le thème choisi via les boutons radios en haut à droite 

$('input[name="theme"]').on('change', function () {
  var theme = "theme-" + $(this).val();
  $('#generated-menu').attr('class', theme);
  updatecontent();
}); // ANCHOR Copier le contenu code rapidement grâce aux boutons 

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
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code'); // ANCHOR

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/components/menu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\easytoc\resources\js\components\menu.js */"./resources/js/components/menu.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);