import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import boxOfficeBits from './views/boxOfficeBits.vue'
import discoverTitles from './views/discoverTitles.vue'
import comingSoon from './views/comingSoon.vue'
import movieWeek from './views/movieWeek.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "boxOfficeBits"
            }
        },
        {
            path: '/boxOfficeBits',
            name: 'boxOfficeBits',
            component: boxOfficeBits
        },
        {
            path: '/comingSoon',
            name: 'comingSoon',
            component: comingSoon
        },
        {
            path: '/discoverTitles',
            name: 'discoverTitles',
            component: discoverTitles
        },
        {
            path: '/movieWeek',
            name: 'movieWeek',
            component: movieWeek
        }
    ]
})
