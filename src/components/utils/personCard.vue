<template>
    <span
        v-show="loginState"
        style="
            width: 200px;
            margin-left: 50px;
            white-space: nowrap;
            display: flex;
            font-size: smaller;
            color: white;
            cursor: pointer;
            position: relative;
        "
    >
        <div style="color: gold; position: relative; display: flex" @mouseover="handleOver">
            <div style="color: white">您好，尊敬的</div>
            &ensp;{{ userName }}
            <el-icon style="font-size: larger; margin-left: 5px; line-height: 16px"
                ><ArrowUp
            /></el-icon>
        </div>
        <transition name="el-zoom-in-top">
            <div class="personCard" v-show="openCard" v-clickoutside="handleclickoutside">
                <div class="card">
                    <div class="imgBx">
                        <img src="@/assets/img/logo.png" />
                    </div>

                    <div class="content">
                        <div class="details">
                            <h2>{{ userName }}<br /><span>尊贵的五星vip客户您好</span></h2>
                            <div class="data">
                                <h3>5<br /><span>客户等级</span></h3>
                                <h3>{{ cardNumber }}<br /><span>银行卡数量</span></h3>
                                <h3>2年6月<br /><span>使用时长</span></h3>
                            </div>
                            <div class="actionBtn">
                                <button @click="handleClickCancel">注销</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ClickOutside as vClickoutside } from 'element-plus'
import axios from '@/axios/axios'

defineProps({
    userName: String,
    loginState: Boolean,
    cardNumber: Number
})
const emit = defineEmits<{
    (e: 'changeLoginState', loginState: boolean): void
}>()
const openCard = ref(false)
const handleOver = () => {
    openCard.value = true
}

const handleLeft = () => {
    openCard.value = false
}

const handleclickoutside = () => {
    openCard.value = false
}

const handleClickCancel = () => {
    openCard.value = false
    axios
        .post('/logout', {})
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })

    emit('changeLoginState', false)
}
</script>

<style lang="scss" scoped>
@import './utilCss/personCard.scss';
</style>
