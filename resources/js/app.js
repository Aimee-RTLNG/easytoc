require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload, faSync, faFileUpload, faFileCode,faVectorSquare,faGripLinesVertical,faSave, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload,faSync,faFileUpload,faFileCode,faVectorSquare,faGripLinesVertical,faSave, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup, faExclamationTriangle);

dom.watch();


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