<template>
    <el-form ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition">
        <el-form-item label="源卡卡号">
            <el-input v-model="sizeForm.sourceCardNumber" />
        </el-form-item>
        <el-form-item label="目标卡卡号">
            <el-input v-model="sizeForm.targetCardNumber" />
        </el-form-item>
        <el-form-item label="数额">
            <el-input v-model="sizeForm.amount" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">转账</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
    <el-drawer
        v-model="sizeForm.drawer"
        title="请为您的卡验证"
        :direction="direction"
        :before-close="handleClose"
    >
        <el-form ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition">
            <el-form-item label="源卡卡号">
                <el-input v-model="sizeForm.sourceCardNumber" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="sizeForm.transactionPassword" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="verify">验证</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
import axios from '@/axios/axios'
import { ElMessage } from 'element-plus'
import type { transferResponse } from '@/inferface/responseInterface'
const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')
const direction =
    ref<EpPropMergeType<StringConstructor, 'rtl' | 'ltr' | 'ttb' | 'btt', unknown>>('rtl')
const sizeForm = reactive({
    sourceCardNumber: '',
    targetCardNumber: '',
    amount: '',
    drawer: false,
    transactionPassword: ''
})

function onSubmit() {
    axios
        .post('/transaction/transfer', {
            sourceCardNumber: sizeForm.sourceCardNumber,
            targetCardNumber: sizeForm.targetCardNumber,
            amount: sizeForm.amount
        })
        .then((response) => {
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
                    message: result.message + ' 转账失败!',
                    type: 'error'
                })
                sizeForm.drawer = true
            } else {
                ElMessage({
                    showClose: true,
                    message: result.message + ' 转账成功!',
                    type: 'success'
                })
                axios.post('/transaction/transfer', {
                    sourceCardNumber: sizeForm.sourceCardNumber,
                    targetCardNumber: sizeForm.targetCardNumber,
                    amount: sizeForm.amount
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

<style>
.el-radio-group {
    margin-right: 12px;
}
</style>
