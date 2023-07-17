<!--
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-16 14:45:04
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-16 19:12:54
 * @FilePath: \frontend\src\components\cardManagement\openCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="root">
        <div class="header">
            <img alt="" class="headImg" src="@/assets/img/card1.jpg" />
        </div>
        <div class="mainBody">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>银行卡办理</el-breadcrumb-item>
            </el-breadcrumb>
            <div></div>
            <br />
            <el-form
                ref="form"
                :model="sizeForm"
                label-width="auto"
                :label-position="labelPosition!"
            >
                <el-form-item label="您用于办理银行卡的身份证号是">
                    {{ sizeForm.idNumber }}
                </el-form-item>
                <el-form-item label="您的手机号">
                    <el-input v-model="sizeForm.phoneNumber" />
                </el-form-item>
                <el-form-item label="您用于交易的密码">
                    <el-input v-model="sizeForm.transactionPassword" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">申请办理</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { EpPropMergeType } from 'element-plus/es/utils/vue/props/types'
import { reactive, ref, nextTick, watch } from 'vue'
import axios from '@/axios/axios'
import { useUserStore } from '@/stores/userStore'
import type { openCardInfoResponse } from '@/inferface/responseInterface'
import { ElMessage } from 'element-plus'

const labelPosition = ref<
    EpPropMergeType<StringConstructor, 'top' | 'right' | 'left', unknown> | undefined
>('top')
const idnumberTmp = ref(useUserStore().idNumber)
const sizeForm = reactive({
    transactionPassword: '',
    phoneNumber: '',
    idNumber: idnumberTmp.value
})

watch(
    () => useUserStore().idNumber,
    () => {
        sizeForm.idNumber = useUserStore().idNumber
    }
)

function onSubmit() {
    console.log(sizeForm.idNumber, sizeForm.phoneNumber, sizeForm.transactionPassword)
    console.log(useUserStore().idNumber, useUserStore().phoneNumber, useUserStore().accountNumber)

    axios
        .post('/card/open', {
            transactionPassword: sizeForm.transactionPassword,
            phoneNumber: sizeForm.phoneNumber,
            idNumber: sizeForm.idNumber
            // transactionPassword: '123456',
            // phoneNumber: '110',
            // idNumber: '1145141919810'
        })
        .then((response) => {
            let result: openCardInfoResponse = response.data as unknown as openCardInfoResponse
            console.log(response)

            if (result.code == 0) {
                ElMessage({
                    message: '银行卡办理成功！',
                    type: 'success'
                })
            } else {
                ElMessage.error('银行卡办理失败，请重试！')
            }
        })
        .catch((error) => {
            console.log(error)
        })
}
</script>

<style lang="scss" scoped>
.root {
    .header {
        .headImg {
            width: 100%;
            height: auto;
        }
    }
    .mainBody {
        height: 1000px;
        width: 1280px;
        margin: 0 auto;
        .el-breadcrumb {
            margin: 20px;
            margin-left: 100px;
        }
    }
}
</style>
