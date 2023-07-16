/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-15 19:54:39
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-15 20:37:36
 * @FilePath: \frontend\src\router\linkTo.ts
 * @Description: 首页导航点击事件
 * */

import router from './index'
import { useRouterStore } from '@/stores/routerState'

export const handleClickTransaction = () => {
    router.push('/bankBusiness')
    useRouterStore().setPath('transaction')
}
export const handleClickSelect = () => {
    router.push('/bankBusiness')
    useRouterStore().setPath('select')
}
export const handleClickDeposit = () => {
    router.push('/bankBusiness')
    useRouterStore().setPath('deposit')
}
export const handleClickWithdrawal = () => {
    router.push('/bankBusiness')
    useRouterStore().setPath('withdrawal')
}
export const handleClickApply = () => {
    router.push('/cardapply')
    useRouterStore().setPath('cardapply')
}
export const handleClickManagement = () => {
    router.push('/card')
    useRouterStore().setPath('cardManagment')
}
