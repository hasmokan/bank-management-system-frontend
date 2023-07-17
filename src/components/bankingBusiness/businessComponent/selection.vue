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
                    <span style="width: 100%">
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
                        </el-input>
                    </span>
                    <transition name="el-zoom-in-top">
                        <div
                            v-if="sizeForm.size == 'balance'"
                            style="margin-top: 30px; font-family: AlimamaFangYuanTiVF-Thin"
                        >
                            您的卡余额为:
                            <div style="color: rgb(255, 165, 5)">
                                {{ sizeForm.balance }}
                            </div>
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
                            <el-table-column prop="serialNumber" label="流水号" width="180" />
                            <el-table-column prop="time" label="时间" width="180" />
                            <el-table-column prop="type" label="类型" />
                            <el-table-column prop="comment" label="备注" width="180" />
                            <el-table-column prop="sourceCardNumber" label="源卡号" width="180" />
                            <el-table-column prop="targetCardNumber" label="目标卡号" width="180" />
                            <el-table-column prop="balance" label="余额" width="180" />
                            <el-table-column prop="transferAmount" label="转账金额" width="180" />
                        </el-table>
                    </transition>
                </el-form-item>
            </div>
        </el-form>
        <el-drawer
            v-model="sizeForm.drawer"
            title="请为您的卡验证"
            :direction="direction"
            :before-close="handleClose"
        >
            <el-form
                ref="form"
                :model="sizeForm"
                label-width="auto"
                :label-position="labelPosition"
            >
                <el-form-item label="卡号">
                    <el-input v-model="sizeForm.sourceCardNumber" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="sizeForm.transactionPassword" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="verify">验证</el-button>
                    <el-button @click="sizeForm.drawer = false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import axios from '@/axios/axios'
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { transferResponse } from '@/inferface/responseInterface'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'

const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')

const sizeForm = reactive({
    size: 'balance',
    cardnumber1: '',
    cardnumber2: '',
    balance: '',
    //
    drawer: false,
    transactionPassword: '',
    sourceCardNumber: ''
})

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
                    message: '查询失败',
                    type: 'error'
                })
            else {
                sizeForm.balance = result.balance.toString()
                ElMessage({
                    showClose: true,
                    message: '查询成功',
                    type: 'success'
                })
            }
        })
        .catch(() => {})
}

const tableData = ref<stateItem[]>([])
interface statementResponse {
    message: string
    code: number
    list: stateItem[]
}
interface stateItem {
    serialNumber: number
    time: string
    type: string
    comment: string
    sourceCardNumber: string
    targetCardNumber: string
    balance: string
    transferAmount: number
}

const handleSearchAccountStatement = () => {
    axios
        .get('/transaction/queryStatement', {
            params: {
                cardNumber: sizeForm.cardnumber2
            }
        })
        .then((response) => {
            console.log(response)

            let result = response.data as unknown as statementResponse
            if (result.code == -1) {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
                sizeForm.drawer = true
            } else {
                for (let item of result.list) {
                    tableData.value.push(item)
                }
            }
        })
        .catch(() => {})
}
/******/
const direction =
    ref<EpPropMergeType<StringConstructor, 'rtl' | 'ltr' | 'ttb' | 'btt', unknown>>('rtl')
const verify = () => {
    axios
        .post('/card/verify', {
            cardNumber: sizeForm.sourceCardNumber,
            transactionPassword: sizeForm.transactionPassword
        })
        .then((response) => {
            let result: transferResponse = response.data as unknown as transferResponse
            if (result.code == -1) {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
            } else {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'success'
                })
                sizeForm.drawer = false
            }
        })
        .catch((error) => {})
}

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('您确定要取消验证吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
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
