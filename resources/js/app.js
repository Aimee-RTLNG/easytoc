require('./bootstrap');

require('./components/run_prettify.js');

/*
import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueMaterial from 'vue-material';
// import VeeValidare from 'vee-validate';

import Profile from './components/profile/Profile.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
// Vue.use(VueMaterial);
// Vue.use(VeeValidate);

window.Vue = require('vue');

let routes = [{
    path: '/profile',
    component: Profile
}]

Vue.component('profile', require('./components/profile/Profile.vue'));

Vue.use(Toasted)
Vue.toasted.register('error', message => message, {
    position: 'bottom-center',
    duration: 1000
})

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.component('example-component', ExampleComponent);

new Vue({
    router,
    render: (h) => h(Profile)
}).$mount('#profile');

*/
// Attention Merge à decommenter 
// const app = new Vue({
//     el: '#app',
// });


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
