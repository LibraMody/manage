import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import store from '@/store';

import '@/mock';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/gallery',
            name: 'gallery',
            component: ()=> import(
                '@/components/gallery'
            )
        },
        {
            path: '/',
            name: 'login',
            component: () => import(
                '@/pages/login'
            )
        },
        {
            path: '/view',
            name: 'view',
            component: () => import(
                '@/pages/card_view'
            )
        }
         
    ]
});

router.beforeEach((to, from, next) => {
    if(
        to.name !== 'login' &&
        !store.getters['configs/is_login']
    ) {
        return next({ name: 'login' });
    }
    next();
});//路由守卫，没登陆回到登录页

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})

/*组件获取状态使用，store.getters
当调用的对象使用了非常规字符时，使用'[]'
*/