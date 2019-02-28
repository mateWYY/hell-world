import Router from 'vue-router'
import Vue from 'vue'
import home from './page/home/home'
import find from './page/find/find'
import clss from './page/class/class'
import shop from './page/shop/shop'
import user from './page/user/user'
import dexTable from './dexTable'

Vue.use(Router)

export default new Router({
    routers: [{
        path: '/',
        name: 'dexTable',
        component: dexTable,
        children: [{
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/clss',
            name: 'clss',
            component: clss
        }, {
            path: '/find',
            name: 'find',
            component: find
        }, {
            path:'/shop',
            name: 'shop',
            component: shop
        }, {
            path: '/user',
            name: 'user',
            component: user
        }]
    }]
})