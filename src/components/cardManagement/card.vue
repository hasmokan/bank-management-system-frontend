<!--
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-13 18:14:10
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 14:37:23
 * @FilePath: \frontend\src\components\international\international.vue
 * @Description: 卡务管理
-->
<template>
    <div class="manage-account">
        <img class="headimg" :src="img1" alt="" />

        <div class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>银行卡管理</el-breadcrumb-item>
            </el-breadcrumb>

            <el-table :data="filterTableData" style="width: 100%">
                <el-table-column label="卡号" prop="cardNumber" />
                <el-table-column label="绑定手机号" prop="phoneNumber" />
                <el-table-column label="注册手机号" prop="idNumber" />
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
            <el-button size="small" type="danger" @click="handleClickQuery">1232131232</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/img/international-img.jpg'

import { computed, ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from '@/axios/axios'
import type { queryCardListResponse, cardListItem } from '@/inferface/responseInterface'
import { reactive } from 'vue'

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

const handleClickQuery = () => {
    axios
        .get('/card/getList', {
            params: {
                idNumber: useUserStore().idNumber
            }
        })
        .then(function (response) {
            let result: queryCardListResponse = response.data as unknown as queryCardListResponse
            for (let item of result.List) {
                tableData.value.push(item)
            }
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
