<template>
    <div class="mySelection">
        <div>
            <el-radio-group v-model="sizeForm.size" label="size control">
                <el-radio-button label="balance">卡余额查询</el-radio-button>
                <el-radio-button label="transaction">卡流水查询</el-radio-button>
            </el-radio-group>
        </div>
        <br />
        <el-form ref="form" :label-position="labelPosition" :model="sizeForm" label-width="auto">
            <div v-if="sizeForm.size === 'balance'">
                <el-form-item label="卡号">
                    <span>
                        <el-input
                            v-model="sizeForm.cardnumber1"
                            class="myInput"
                            maxlength="30"
                            size="large"
                            type="text"
                        >
                            <template #append>
                                <el-button type="primary" @click="handleSearchBalance"
                                    >余额查询</el-button
                                >
                            </template>
                        </el-input></span
                    >
                    <transition name="el-zoom-in-top">
                        <div v-if="sizeForm.size == 'balance'">
                            您的卡余额为{{ sizeForm.balance }}
                        </div>
                    </transition>
                    <!--      el-input不支持隐藏控制器,请加上输入验证-->
                </el-form-item>
            </div>
            <div v-else-if="sizeForm.size === 'transaction'">
                <el-form-item label="卡号">
                    <el-input
                        v-model="sizeForm.cardnumber2"
                        class="myInput"
                        maxlength="30"
                        size="large"
                        type="text"
                    >
                        <template #append>
                            <el-button type="primary" @click="handleSearchAccountStatement"
                                >流水查询</el-button
                            >
                        </template>
                    </el-input>

                    <transition name="el-zoom-in-top">
                        <el-table
                            v-if="sizeForm.size == 'transaction'"
                            :data="tableData"
                            stripe
                            style="width: 100%"
                        >
                            <el-table-column prop="date" label="Date" width="180" />
                            <el-table-column prop="name" label="Name" width="180" />
                            <el-table-column prop="address" label="Address" />
                        </el-table>
                    </transition>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import axios from '@/axios/axios'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { transferResponse } from '@/inferface/responseInterface'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')

const sizeForm = reactive({
    size: 'balance',
    cardnumber1: '',
    cardnumber2: '',
    balance: ''
})
const tableData = ref([])
interface response {
    message: string
    code: number
    balance: number
}

const handleSearchBalance = () => {
    axios
        .get('/transaction/queryBalance', {
            params: {
                cardNumber: sizeForm.cardnumber1
            }
        })
        .then((response) => {
            let result = response.data as unknown as response
            if (result.code == -1)
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
            else {
                sizeForm.balance = result.balance.toString()
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'success'
                })
            }
        })
        .catch(() => {})
}

interface statementResponse {
    message: string
    code: number
    list: []
}

const handleSearchAccountStatement = () => {
    axios
        .get('/transaction/queryBalance', {
            params: {
                cardNumber: sizeForm.cardnumber1
            }
        })
        .then((response) => {
            let result = response.data as unknown as statementResponse
            if (result.code == -1)
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
            else {
                for (let item of result.list) {
                    tableData.value.push(item)
                }
            }
        })
        .catch(() => {})
}
</script>

<style scoped>
.mySelection {
    height: 1000px;
}
.el-radio-group {
    margin-right: 12px;
}

.myInput {
    width: 300px;
}
</style>
