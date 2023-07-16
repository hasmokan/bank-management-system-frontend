/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-13 18:14:10
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 15:08:22
 * @FilePath: \frontend\src\router\index.ts
 * @Description: 导航
 */
import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import cardapply from '../components/cardManagement/openCard.vue'
import home from '../components/home/home.vue'
import transaction from '../components/transaction/transaction.vue'
import card from '../components/cardManagement/card.vue'
import deme from '../components/domestic/domestic.vue'
import bankbusiness from '../components/bankingBusiness/bankingBusiness.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/transcation',
        name: 'transaction',
        component: transaction
    },
    {
        path: '/card',
        name: 'card',
        component: card
    },
    {
        path: '/domestic',
        name: 'demestic',
        component: deme
    },
    {
        path: '/bankBusiness',
        name: 'bank',
        component: bankbusiness
    },
    {
        path: '/cardapply',
        name: 'cardapply',
        component: cardapply
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router
//暴露出去给vue使用
