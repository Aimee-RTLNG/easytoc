require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload, faSync, faFileUpload, faFileCode,faVectorSquare,faGripLinesVertical, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup} from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload,faSync,faFileUpload,faFileCode,faVectorSquare,faGripLinesVertical, faCaretUp, faCaretLeft, faCaretRight, faArrowUp, faArrowDown, faAlignRight, faCut, faObjectGroup, faObjectUngroup);

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

/* 

// Traduction en JS
let imported_traduction;
export let translation = $.getJSON(baseUrl + 'lang/en.json', function(data){
    return data;
})
.done(function (json) {
    imported_traduction = true;
    console.log("Traduction importée");
})
.fail(function (jqxhr, textStatus, error) {
    console.log(textStatus);
    console.log(error);
    console.log ("Erreur dans le chargement de la traduction");
    return [];
})

export function getTranslation(text, lang){
    console.log(translation);
    if(lang == "en"){
        console.log("Français vers Anglais");
    }else if(lang=="fr"){
        console.log("Anglais vers français")
    }
    return text + " = test";
}

*/