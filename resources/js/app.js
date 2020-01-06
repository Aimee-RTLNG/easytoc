require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload, faSync, faFileUpload, faFileCode} from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faEdit, faTrashAlt, faAngleDown, faChevronDown, faUpload,faSync,faFileUpload,faFileCode);

dom.watch();

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
