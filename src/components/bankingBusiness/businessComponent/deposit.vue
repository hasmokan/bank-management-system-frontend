<template>
    <div class="deposit">
        <el-form ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition">
            <el-form-item label="目标卡卡号">
                <el-input v-model="sizeForm.targetCardNumber" />
            </el-form-item>
            <el-form-item label="数额">
                <el-input v-model="sizeForm.amount" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">存款</el-button>
                <el-button>取消</el-button>
            </el-form-item>
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
                    <el-input v-model="sizeForm.targetCardNumber" />
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

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
import axios from '@/axios/axios'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import type { transferResponse } from '@/inferface/responseInterface'
const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')

const sizeForm = reactive({
    targetCardNumber: '',
    amount: '',
    drawer: false,
    transactionPassword: ''
})

function onSubmit() {
    console.log(sizeForm.targetCardNumber, sizeForm.amount)

    axios
        .post('/transaction/deposit', {
            cardNumber: sizeForm.targetCardNumber,
            amount: sizeForm.amount
        })
        .then((response) => {
            console.log(response.data)

            let result: transferResponse = response.data as unknown as transferResponse
            if (result.code == -1) {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
                sizeForm.drawer = true
            } else {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'success'
                })
            }
        })
        .catch((error) => {})
}

/******/
const direction =
    ref<EpPropMergeType<StringConstructor, 'rtl' | 'ltr' | 'ttb' | 'btt', unknown>>('rtl')
const verify = () => {
    axios
        .post('/card/verify', {
            cardNumber: sizeForm.targetCardNumber,
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
                axios
                    .post('/transaction/deposit', {
                        cardNumber: sizeForm.targetCardNumber,
                        amount: sizeForm.amount
                    })
                    .then(() => {
                        console.log(response.data)
                    })
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

<style lang="scss" scoped></style>
