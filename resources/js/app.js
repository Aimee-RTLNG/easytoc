require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from './components/profile/Profile.vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);

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
