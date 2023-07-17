<!--
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-13 18:14:10
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 19:59:12
 * @FilePath: \frontend\src\components\international\international.vue
 * @Description: 卡务管理
-->
<template>
    <div class="manage-account">
        <img class="headimg" :src="img1" alt="" />

        <div class="container" style="position: relative">
            <el-button
                style="position: absolute; top: 22px; left: 60px; z-index: 9999999999999999999"
                size="small"
                type="danger"
                @click="handleClickQuery"
                >查询</el-button
            >
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>银行卡管理</el-breadcrumb-item>
            </el-breadcrumb>

            <el-table :data="filterTableData" style="width: 100%">
                <el-table-column label="卡号" prop="cardNumber" />
                <el-table-column label="绑定手机号" prop="phoneNumber" />
                <el-table-column label="身份证" prop="idNumber" />
                <el-table-column align="right">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                            >Edit</el-button
                        >
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDeleteCard(scope.$index, scope.row)"
                            >Delete</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/img/international-img.png'

import { computed, ref, onMounted, watch } from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from '@/axios/axios'
import type { queryCardListResponse, cardListItem } from '@/inferface/responseInterface'
import { reactive } from 'vue'
import { useLoginStore } from '@/stores/loginState'
const Info = reactive({
    idNumber: useUserStore().idNumber
})

interface card extends cardListItem {}

const search = ref('')
const filterTableData = computed(() =>
    tableData.value.filter(
        (data) =>
            !search.value || data.cardNumber.toLowerCase().includes(search.value.toLowerCase())
    )
)

const handleEdit = (index: number, row: card) => {
    // 暂时没想到有什么需求需要进一步完善
    // console.log(index, row)
}

const handleDeleteCard = (index: number, row: card) => {
    tableData.value.splice(index, 1)
}

const tableData = ref<card[]>([])
// watch(

// )
const handleClickQuery = () => {
    tableData.value.length = 0
    axios
        .get('/card/getList', {
            params: {
                idNumber: useUserStore().idNumber
            }
        })
        .then(function (response) {
            console.log(response)

            let result: queryCardListResponse = response.data as unknown as queryCardListResponse
            for (let item of result.list) {
                tableData.value.push(item)
            }
            console.log(tableData.value)
        })
        .catch(function (error) {
            // console.log(error)
        })
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
@import './card.scss';
</style>
