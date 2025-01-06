import './assets/main.css'

import App from './App.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'


//ルーティング設定
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=>import('./views/HomeRoute.vue'),
            meta: {title: 'home'}
        },
        {
            path: '/about',
            name: 'about',
            component: ()=>import('./views/AboutRoute.vue'),
            meta: {title: 'about'}
        },
        {
            path: '/news',
            name: 'news',
            component: ()=>import('./views/NewsRoute.vue'),
            meta: {title: 'news'},
            children: [
                {
                    path: ':id',
                    component: () => import('./views/NewsDetailRoute.vue'),
                    meta: {transition: 'slide-fade'}
                },
            ]
        },
        {
            path: '/cats',
            name: 'cats',
            component: ()=>import('./views/CatsRoute.vue'),
            meta: {title: 'cats'}
        },
        {
            path: '/using',
            name: 'using',
            component: ()=>import('./views/UsingRoute.vue'),
            meta: {title: 'using'}
        },
        {
            path: '/access',
            name: 'access',
            component: ()=>import('./views/AccessRoute.vue'),
            meta:{ title: 'access'}
        },
        {
            path: '/:pathMatch(.*)*',
            component: ()=>import('./views/NotFound.vue'),
        }
    ],
})

//メインコンポーネント
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.config.globalProperties.$http = () => {
    //グローバル関数を定義

}
app.mount('#app')

