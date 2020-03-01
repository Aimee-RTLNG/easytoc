require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload, faSync, faFileUpload, faFileCode,faVectorSquare,faGripLinesVertical,faSave, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup, faExclamationTriangle, faFrown} from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload,faSync,faFileUpload,faFileCode,faVectorSquare,faGripLinesVertical,faSave, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup, faExclamationTriangle, faFrown);

dom.watch();

let message;

// ANCHOR Visualisation des contenus générés (form, table, menu)

// Empêcher l'envoi du formulaire 
$( document ).ready(function() {
    $('.content-html-preview input[type=submit]').attr('disabled', true);
});

// ANCHOR Burger menu
window.addEventListener("DOMContentLoaded", (event) => {
    var btn_burger = document.getElementById('bars');
    btn_burger.addEventListener('click', function () {
        btn_burger.classList.toggle('open');
    })
    
    // Scroll vers ancres
    function scrollTo( target ) {
	        if( target.length ) {
	            $("html, body").stop().animate( { scrollTop: target.offset().top }, 500);
	        }
	    }
	$('.next-section div').on('click', function() {
		scrollTo($('#tools'));
    })
    $('.link-ancre').on('click', function() {
        var id = $(this).attr('href');
		scrollTo($(id));
    })
    // Profile Mobile
    $(".fleche-plus").on('click', function(){
        $('.mon-compte').toggleClass('open');
        $(this).toggleClass('open');
    })

    // Voir les mots de passes

    $('input[type="password"').on('keyup', function (event) {
        var text = $(this).parent().parent().find("span.warning-block")[0];
        if (event.originalEvent.getModifierState("CapsLock")) {
            text.style.display = "block";
        } else {
            text.style.display = "none"
        }
    });
    
    $('input[type="password"').on('focusout', function () {
        var text = $(this).parent().parent().find("span.warning-block")[0];
        text.style.display = "none";
    });

    $(".btn-seepassword__icon").on('click', function () {
        var password_input = $(this).parent().find('input')[0];
        var vision_button_icon = $(this).find('i')[0];
        if (password_input.type === "password") {
            password_input.type = "text";
            vision_button_icon.className = "far fa-eye-slash";
        } else {
            password_input.type = "password";
            vision_button_icon.className = "far fa-eye";
        }
    })

});

// ANCHOR Message d'alerte
let alert_timeout;
let alert_type;
let alert_container;
export function alertMsg(message, state) {
    alert_container = $('#alert-message');
    if(state == "success"){
        alert_type = "success";
    }else if (state == "error"){
        alert_type = "danger";
    }

    clearTimeout(alert_timeout);
        if (alert_container.is(":hidden")) {
            if(alert_type == "danger"){
                alert_container.removeClass("alert-success");
                alert_container.addClass("alert-danger");
            }else{
                alert_container.removeClass("alert-danger");
                alert_container.addClass("alert-success");
            }
            alert_container.find(".alert-content").text(message);
            alert_container.slideDown();
        } else {
            alert_container.slideUp("fast", function () {
                alert_container.find(".alert-content").text(message);
                if(alert_type == "danger"){
                    alert_container.removeClass("alert-success");
                    alert_container.addClass("alert-danger");
                }else{
                    alert_container.removeClass("alert-danger");
                    alert_container.addClass("alert-success");
                }
                alert_container.slideDown();
            });
        }
        alert_timeout = setTimeout(function () {
            alert_container.slideUp();
        }, 7000);
    
}


// Traduction en JS
export var lang = $('html').attr('lang');

// Side tools 
export function setSideWindow(){
    if($(window).width() >= 992){
        if( $(window).scrollTop() > 800 ){
            // Integration aside
            $('.action-supp').css('width', '240px');
            $('#actions-interface').removeClass('col-12');
            $('#actions-interface').addClass('col-3');
            $('#actions-interface').addClass('p-0');
            // ---
            $('.action-supp').css('position', 'fixed');
            $('.action-supp').css('top', '25px');
            $('.action-supp').css('max-width', '25%');
    
            var bottom = $('.action-supp').position().top + $('.action-supp').offset().top + $('.action-supp').outerHeight(true);
            var main_bottom = $('#content-interface').position().top + $('#content-interface').offset().top + $('#content-interface').outerHeight(true);
            if( ( main_bottom - bottom ) < 435 ){
                let calcul = 435  - ( main_bottom - bottom );
                $('.action-supp').css('top', '-'+calcul+'px');
            }
    
        } else {
            $('.action-supp').css('position', 'relative');
            $('.action-supp').css('top', '0');
            $('.action-supp').css('max-width', '100%');
        }
    }
    else {
        // Integration full width
        $('.action-supp').css('position', 'relative');
        $('.action-supp').css('max-width', '100%');
        $('.action-supp').css('width', '100%');

        $('#actions-interface').removeClass('col-3');
        $('#actions-interface').removeClass('p-0');
        $('#actions-interface').addClass('col-12');
        // ---
    }
}

// Copier le contenu du code sur la page visualisation

// ANCHOR Copier le contenu code 
$("#copy-raw-code, #copy-css-link").on('click', function () {
    
    if( lang == "en" ){
        message = "Code copied !";
        $(".copy-container button").text("Copy");
    } else {
        message = "Code copié !";
        $(".copy-container button").text("Copier");
    }
    
    $(this).text(message);
    alertMsg(message);
})
new ClipboardJS('#copy-css-link');
new ClipboardJS('#copy-raw-code');

// Navigation menu
$(window).on('load', function(){
    let onglet_actif = $('nav .nav-link')[0];
    if ( window.location.pathname.indexOf("menu") != -1 ){
        onglet_actif = $('nav .nav-link')[1];
    } else if ( window.location.pathname.indexOf("table") != -1 ){
        onglet_actif = $('nav .nav-link')[2];
    } else if ( window.location.pathname.indexOf("form") != -1 ){
        onglet_actif = $('nav .nav-link')[3];
    } else if ( window.location.pathname.indexOf("aide") != -1 ){
        onglet_actif = $('nav .nav-link')[4];
    } else if ( window.location.pathname.indexOf("register") != -1 ){
        onglet_actif = $('.menu-connect .nav-item')[0];
    } else if (  window.location.pathname.indexOf("login") != -1  ) {
        onglet_actif = $('.menu-connect .nav-item')[1];
    } else if (  window.location.pathname.indexOf("edit") != -1  ) {
        onglet_actif = $('.menu-connect .nav-item')[0];
    } else if (  window.location.pathname.indexOf("profile") != -1  ) {
        onglet_actif = $('.menu-connect .nav-item')[0];
    } else if (  window.location.pathname.indexOf("cgu") != -1  ) {
        onglet_actif = false;
    } else if (  window.location.pathname.indexOf("mentions_legales") != -1  ) {
        onglet_actif = false;
    }
    if(onglet_actif) {
        $(onglet_actif).addClass('onglet-actif');
    }
})

// RACCOURCIS CLAVIER

// CTRL ALT U - move up 
// CTRL ALT D - move down
// CTRL ALT T - trash
// CTRL ALT I - bloc informations
// CTRL ALT S - bloc save
// CTRL ALT P - bloc parametres

// (bien relacher la touche custom avant le ctrl alt )

document.onkeyup = function(e) {
    // Move up
    // CTRL ALT + U
    if (e.ctrlKey && e.altKey && e.which == 85) {
        if( $(".content-editable-selected").length > 0 ){
            if( !$("#action-move-up").attr('disabled') ){
                $("#action-move-up").click();
            } else {
                $(".action-move-row-up").click();
            }
        }
    } 
    // Move Down
    // CTRL ALT + D
    else if (e.ctrlKey && e.altKey && e.which == 68) {
        if( $(".content-editable-selected").length > 0 ){
            if( !$("#action-move-down").attr('disabled') ){
                $("#action-move-down").click();
            } else {
                $(".action-move-row-down").click();
            }
        }
    } 

    // Move Left
    // CTRL ALT + L
    else if (e.ctrlKey && e.altKey && e.which == 76) {
        if( $(".content-editable-selected").length > 0 ){
            if( !$("#action-move-left").attr('disabled') ){
               $("#action-move-left").click();
            } else {
                $(".action-move-col-left").click();
            }
        }
    } 

    // Move Right
    // CTRL ALT + R
    else if (e.ctrlKey && e.altKey && e.which == 82) {
        if( $(".content-editable-selected").length > 0 ){
            if( !$("#action-move-right").attr('disabled') ){
               $("#action-move-right").click();
            } else {
                $(".action-move-col-right").click();
            }
        }
     } 

    // Suprrimer 
    // CTRL ATL + T 
    else if (e.ctrlKey && e.altKey && e.which == 84) {
        if( $(".content-editable-selected").length > 0 ){
            if( !$("#action-delete").attr('disabled') ){
               $("#action-delete").click();
            }
        }
    } 
    // Accéder au bloc informations
    // CTRL ATL + I
    else if (e.ctrlKey && e.altKey && e.which == 73) {
        if( $(".action-supp-crea").length > 0 ){
            $(".action-supp-crea input").first().focus();
        }
    } 
    // Accéder au bloc propriétés 
    // CTRL ATL + P 
    else if (e.ctrlKey && e.altKey && e.which == 80) {
        if( $("#content-interface").length > 0 ){
            $("#content-interface input").first().focus();
        }
    } 
    // Sauvegarder
    // CTRL ALT + S
    else if (e.ctrlKey && e.altKey && e.which == 83) {
        console.log(e);
        if( $('#btn-save-project, #btn-update-project').length > 0 ){
            console.log(e);
            let message = "Vous êtes sur le point de sauvegarder et de quitter votre projet. Vous allez être redirigé.";
            if ( lang == "en" ){
                message = "Are you sure to save and quit your project ? You will be redirected.";
            }
            if (window.confirm(message)) { 
                $('#btn-save-project').click();
                $('#btn-update-project').click();
            }        
        }
    }
};

// Désactiver le drag and drop des links et des images
window.ondragstart = function(){
    return false;
}