/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import store from "./store";
import vuetify from "./plugins/vuetify";
// import router from "./router";
// import "./registerServiceWorker";

import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
    styles: [
        "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
        "/print/print.css"
    ]
};

Vue.use(VueHtmlToPaper, options);
Vue.config.productionTip = false;

Vue.component('app', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#map',
    vuetify,
    store
});
