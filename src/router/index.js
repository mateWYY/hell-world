import Router from 'vue-router'
import Vue from 'vue'
import login from '@/page/login.vue'
import home from '@/page/home.vue'
import list from '@/page/list.vue'
import user from '@/page/user.vue'
import add from '@/page/add.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login,
    },{
        path: '/home',
        name: 'home',
        component: home,
        children: [{
            path: 'list',
            name: 'list',
            component: list
        },{
            path: 'user',
            name: 'user',
            component: user
        }]
    },{
        path:'/add',
        name:'add',
        component: add
    }]
})