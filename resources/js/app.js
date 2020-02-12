require('./bootstrap');

// require('./components/run_prettify.js');

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

// ANCHOR Burger menu
window.addEventListener("DOMContentLoaded", (event) => {
    var btn_burger = document.getElementById('bars');
    btn_burger.addEventListener('click', function () {
        btn_burger.classList.toggle('open');
    })


    // Scroll vers ancres
    function scrollTo(target) {
        if (target.length) {
            $("html, body").stop().animate({
                scrollTop: target.offset().top
            }, 500);
        }
    }
    $('.next-section div').on('click', function () {
        scrollTo($('#tools'));
    })
    $('.link-ancre').on('click', function () {
        var id = $(this).attr('href');
        scrollTo($(id));
    })
    // Profile Mobile
    $(".fleche-plus").on('click', function () {
        $('.mon-compte').toggleClass('open');
        $(this).toggleClass('open');
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


});

// ANCHOR Message d'alerte
let alert_timeout;
let alert_type;
let alert_container;
export function alertMsg(message, state) {
    alert_container = $('#alert-message');
    if (state == "success") {
        alert_type = "success";
    } else if (state == "error") {
        alert_type = "danger";
    }

    clearTimeout(alert_timeout);
    if (alert_container.is(":hidden")) {
        if (alert_type == "danger") {
            alert_container.removeClass("alert-success");
            alert_container.addClass("alert-danger");
        } else {
            alert_container.removeClass("alert-danger");
            alert_container.addClass("alert-success");
        }
        alert_container.find(".alert-content").text(message);
        alert_container.slideDown();
    } else {
        alert_container.slideUp("fast", function () {
            alert_container.find(".alert-content").text(message);
            if (alert_type == "danger") {
                alert_container.removeClass("alert-success");
                alert_container.addClass("alert-danger");
            } else {
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
