/*
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-14 08:42:45
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 10:14:50
 * @FilePath: \frontend\src\stores\userStore.ts
 * @Description: 登陆信息的存储
 * */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    /**
     * @description:用户的账号信息的保存
     */
    state: () => ({
        accountNumber: '',
        password: '',
        phoneNumber: '',
        idNumber: ''
    }),
    getters: {
        getAccountNumber(): string {
            return this!.accountNumber
        },
        getPassword(): string {
            return this!.password
        },
        getPhoneNumber(): string {
            return this!.phoneNumber
        },
        getIdNumber(): string {
            return this!.getIdNumber
        }
    },

    actions: {
        // action内部不能使用箭头函数

        addNowAccount(
            accountNumber: string,
            password: string,
            phoneNumber: string,
            idNumber: string
        ) {
            this!.accountNumber = accountNumber
            this!.password = password
            this!.phoneNumber = phoneNumber
            this!.idNumber = idNumber
        }
    }
})
