import { defineStore } from 'pinia'

export const useLoginStore = defineStore('loginstate', {
    state: () => ({
        userType: 'user' as string,
        isLogin: false as boolean
    }),
    getters: {
        getUserType(): string {
            return this!.userType
        },
        getLoginState(): boolean {
            return this!.isLogin
        }
    },
    actions: {
        // action内部不能使用箭头函数
        registerId(id: string) {
            this!.userId = id
        }
    }
})
