require('./bootstrap');

require('code-prettify/src/run_prettify.js?autorun=true&amp;skin=sunburst');
require('code-prettify/src/prettify.js?autorun=true&amp;skin=sunburst');

require('clipboard/dist/clipboard.min.js');


// ANCHOR Font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCircle, faArrowCircleUp, faArrowCircleDown, faTrash, faSortUp, faSortDown, faEye, faArrowRight, faArrowLeft, faPlusCircle, faSearch, faSort, faPen, faTimes);

dom.watch();

// ANCHOR Burger menu
window.addEventListener("DOMContentLoaded", (event) => {
    var btn_burger = document.getElementById('bars');
    btn_burger.addEventListener('click', function () {
        btn_burger.classList.toggle('open');
    })
});
