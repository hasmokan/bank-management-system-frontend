<!--
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-15 20:26:29
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 20:01:47
 * @FilePath: \frontend\src\components\bankingBusiness\bankingBusiness.vue
 * @Description: 银行业务 -->
<template>
    <img class="headimg" src="@/assets/img/ESG-img.png" alt="" />

    <div class="bankingBusiness">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>银行业务</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs v-model="state.activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="转账" name="transaction">
                <Transfer></Transfer>
            </el-tab-pane>
            <el-tab-pane label="查询" name="select">
                <Query></Query>
            </el-tab-pane>
            <el-tab-pane label="存款" name="deposit">
                <Deposit></Deposit>
            </el-tab-pane>
            <el-tab-pane label="取款" name="withdrawal">
                <withdrawal></withdrawal>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouterStore } from '@/stores/routerState'
import Transfer from './businessComponent/transfer.vue'
import Query from './businessComponent/selection.vue'
import Deposit from './businessComponent/deposit.vue'
import withdrawal from './businessComponent/withdrawal.vue'
const state = reactive({
    activeName: useRouterStore().getPath
})

watch(
    () => useRouterStore().getPath,
    () => {
        state.activeName = useRouterStore().getPath
    }
)
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.bankingBusiness {
    height: 1000px;
    margin: 0 auto;
    width: 1280px;
}
.headimg {
    width: 100%;
    height: auto;
}
.demo-tabs {
    margin-top: 20px;
}
</style>
