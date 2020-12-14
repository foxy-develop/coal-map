import Vue from 'vue';
import Router from 'vue-router';

import Map from '../Views/Map';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/',

    },
]

const router = new Router({
    mode: 'history',
    base: "./",
    routes
});

export default router;