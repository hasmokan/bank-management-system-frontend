import { defineStore } from 'pinia'

export const useRouterStore = defineStore('routerstate', {
    state: () => ({
        pageState: '' as string
    }),
    getters: {
        getPath(): string {
            return this!.pageState
        }
    },
    actions: {
        // action内部不能使用箭头函数
        // registerId(id: string) {
        //     this!.userId = id
        // }
        setPath(path: string): void {
            this!.pageState = path
        }
    }
})
