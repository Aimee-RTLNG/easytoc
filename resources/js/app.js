require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faCaretLeft, faCaretRight, faAlignRight, faSquare, faGripLinesVertical, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes, faItalic, faBold, faUnderline, faAlignCenter, faAlignJustify, faAlignLeft, faUndo, faCheckSquare, faTasks, faCaretDown, faCheckCircle, faComment, faCommentAlt, faGripLines, faParagraph, faHeading, faLink, faListOl, faListUl, faQuestionCircle, faCaretLeft, faCaretRight, faAlignRight, faSquare, faGripLinesVertical, faVectorSquare);

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
	$('.next-section i').on('click', function() {
		scrollTo($('#tools'));
    })
    $('.link-ancre').on('click', function() {
        var id = $(this).attr('href');
		scrollTo($(id));
	})

    // Slider Home

    // console.log($('.slider-tools'));
    // $('.slider-tools').slick({
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: true,
    //     responsive: [
    //         {
    //             breakpoint: 3500,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 767,
    //             slidesToShow: 2,
    //             settings: "slick",
    //             dots: true,
    //         }
    //         ]
    //     });
    $(".fleche-plus").on('click', function(){
        $('.mon-compte').toggleClass('open');
        $(this).toggleClass('open');
    })


});
