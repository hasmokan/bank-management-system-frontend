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
                <el-button type="primary" @click="onSubmit">转账</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
import axios from '@/axios/axios'
import { ElMessage } from 'element-plus'
import type { transferResponse } from '@/inferface/responseInterface'
const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')

const sizeForm = reactive({
    targetCardNumber: '',
    amount: ''
})

function onSubmit() {
    axios
        .post('/transaction/transfer', {
            cardNumber: sizeForm.targetCardNumber,
            amout: sizeForm.amount
        })
        .then((response) => {
            let result: transferResponse = response.data as unknown as transferResponse
            if (result.code == -1)
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'error'
                })
            else {
                ElMessage({
                    showClose: true,
                    message: result.message,
                    type: 'success'
                })
            }
        })
        .catch((error) => {})
}
</script>

<style lang="scss" scoped></style>
