import Vue from 'vue'
import Router from 'vue-router'
import Serve from '../views/Serve'
import Main from '../views/Main'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/serve',
            name: 'Serve',
            component: Serve
        },
        {
            path: '/main',
            name: 'Main',
            component: Main
        }
    ]
})