<template>
    <div class="App">
        <div class="common-layout">
            <el-container>
                <el-header>
                    <el-menu
                        :default-active="componentState.activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                    >
                        <img
                            src="@/assets/img/logo.png"
                            style="margin-left: 10px; width: 50px; height: 50px"
                        />
                        <div class="text-hasmokan">西北银行</div>
                        <div class="flex-grow" />
                        <el-menu-item index="1">
                            <router-link to="/">首页</router-link>
                        </el-menu-item>

                        <el-sub-menu index="2">
                            <template #title>银行业务</template>
                            <el-menu-item index="2-1" @click="handleClickTransaction">
                                资金转账
                            </el-menu-item>
                            <el-menu-item index="2-2" @click="handleClickSelect">
                                资产查询
                            </el-menu-item>
                            <el-menu-item index="2-3" @click="handleClickDeposit">
                                资产存款
                            </el-menu-item>
                            <el-menu-item index="2-4" @click="handleClickWithdrawal">
                                资产取款
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="3">
                            <router-link to="/domestic">ESG国内标准</router-link>
                        </el-menu-item>
                        <el-sub-menu index="4">
                            <template #title>卡业务</template>
                            <el-menu-item index="4-1" @click="handleClickApply">
                                银行卡办理
                            </el-menu-item>
                            <el-menu-item index="4-2" @click="handleClickManagement">
                                银行卡管理
                            </el-menu-item>
                        </el-sub-menu>

                        <!-- 下拉 登陆按钮-->
                        <div v-show="!loginState" class="flex flex-wrap items-center">
                            <el-dropdown>
                                <el-button type="primary" color="rgb(255,165,5)">
                                    系统登陆<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                </el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item @click="PersonalLoginClick"
                                            >个人登陆</el-dropdown-item
                                        >
                                        <el-dropdown-item @click="EnterpriseLoginClick"
                                            >企业登陆</el-dropdown-item
                                        >
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <personCard
                            @change-login-state="handleChangeLoginState"
                            v-model:loginState="loginState"
                            :userName="userInfo.accountNumber"
                        ></personCard>
                        <!-- 搜索框 -->
                        <div class="search">
                            <el-input placeholder="Please input" class="input-with-select">
                                <template #append>
                                    <el-button :icon="Search" />
                                </template>
                            </el-input>
                        </div>
                    </el-menu>
                </el-header>

                <!--页面主体 -->

                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>

                <el-footer height="630px">
                    <div class="top">
                        <div class="top-left">
                            <div class="about">关于我们</div>
                        </div>
                        <div class="top-icon">
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-QQ"></i>
                            <i class="iconfont icon-weixin"></i>
                            <i class="iconfont icon-douyin"></i>
                        </div>
                        <div class="logo">
                            <img
                                src="/src/assets/img/logo.png"
                                style="
                                    width: 80px;
                                    height: 80px;
                                    margin-left: 350px;
                                    margin-top: 10px;
                                "
                            />
                        </div>
                    </div>
                    <div class="body">
                        <div class="one">
                            <div><i class="iconfont icon-team"></i></div>
                            <h3 class="team">我们的团队</h3>
                            <ul>
                                <li>团队成员详情</li>
                                <li>团队分工介绍</li>
                                <li>......</li>
                                <li>......</li>
                                <li>......</li>
                            </ul>
                        </div>
                        <div class="two">
                            <div><i class="iconfont icon-dianhua"></i></div>
                            <h3 class="connect">联系我们</h3>
                            <ul>
                                <li>客户服务</li>
                                <li>合作洽谈</li>
                                <li>媒体及投资者</li>
                                <li>.....</li>
                                <li>.....</li>
                            </ul>
                        </div>
                        <div class="three">
                            <div><i class="iconfont icon-falv"></i></div>
                            <h3 class="lawInformation">法律信息</h3>
                            <ul>
                                <li>服务协议</li>
                                <li>隐私政策</li>
                                <li>知识产权</li>
                                <li>.....</li>
                                <li>.....</li>
                            </ul>
                        </div>
                        <div class="four">
                            <div><i class="iconfont icon-jishufuwu"></i></div>
                            <h3 class="support">技术支持</h3>
                            <ul>
                                <li>Vue框架</li>
                                <li>锲而不舍</li>
                                <li>.....</li>
                                <li>.....</li>
                                <li>.....</li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-up">
                            <div class="advise">
                                <span>NWB团队倾情打造的银行系统！</span><br />
                                <span>24小时为您提供最方便快捷的银行服务!</span><br />
                                <span>如您有更好的提议，欢迎联系我们！</span>
                            </div>
                            <div class="img" style="margin-top: 10px; margin-left: 600px">
                                <div class="imgbox">
                                    <img
                                        src="/src/assets/img/code.png"
                                        style="height: 80px; width: 80px; margin-top: 10px"
                                    />
                                    <img
                                        src="/src/assets/img/xbdximg.png"
                                        style="
                                            height: 80px;
                                            width: 80px;
                                            margin-left: 80px;
                                            margin-top: 10px;
                                        "
                                    />
                                    <img
                                        src="/src/assets/img/xbdxname.png"
                                        style="
                                            height: 30px;
                                            width: 150px;
                                            margin-left: 80px;
                                            margin-bottom: 25px;
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="bottom-bottom">
                            <div class="left" style="margin-top: 20px">
                                <span style="color: #e2e2e2; font-style: text/css">
                                    <span>@2023NWB银行</span>
                                    <span style="margin-left: 50px">CHINA-NO.1</span>
                                    <span style="margin-left: 50px">银行编号：2021117号</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </el-footer>
            </el-container>
        </div>

        <el-dialog v-model="componentState.centerDialogVisible" width="410px" center>
            <template #header="{ close, titleId, titleClass }">
                <div class="my-header" style="margin-left: 200px">
                    <h4 :id="titleId" :class="titleClass" style="font-size: 14px; color: gray">
                        终于等到你~
                        <img src="@/assets/img/logo.png" alt="" style="width: 40px" />
                    </h4>
                </div>
            </template>
            <el-tabs v-model="componentState.activeName" class="demo-tabs">
                <el-tab-pane label="登陆" name="first">
                    <el-input v-model="loginData.accountNumber" placeholder="账号/用户名" />
                    <el-input
                        v-model="loginData.password"
                        type="password"
                        placeholder="密码"
                        show-password
                    />
                    <div
                        class="label"
                        v-if="state.isLoginCorrect == 'true'"
                        style="color: greenyellow"
                    >
                        <el-icon><CircleCheck /></el-icon>登陆成功
                    </div>
                    <div
                        class="label"
                        v-else-if="state.isLoginCorrect == 'false'"
                        style="color: red"
                    >
                        用户名或密码错误
                    </div>
                    <div class="forget-password" style="cursor: pointer">忘记密码</div>
                    <el-button type="primary" @click="handlePersonalLogin"> 登录 </el-button>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-input v-model="registerData.accountNumber" placeholder="账号/用户名" />
                    <el-input
                        v-model="registerData.password"
                        type="password"
                        placeholder="密码"
                        show-password
                    />
                    <el-input
                        v-model="registerData.phoneNumber"
                        type="password"
                        placeholder="手机号"
                        show-password
                    />
                    <el-input v-model="registerData.idNumber" placeholder="ID" />
                    <div
                        class="label"
                        v-if="state.isSignupCorrect == 'true'"
                        style="color: greenyellow"
                    >
                        <el-icon><CircleCheck /></el-icon>注册成功
                    </div>
                    <div
                        class="label"
                        v-else-if="state.isSignupCorrect == 'false'"
                        style="color: red"
                    >
                        用户名已存在,注册失败
                    </div>
                    <div class="forget-password" style="cursor: pointer">忘记密码</div>
                    <el-button type="primary" @click="handlePersonalRegister"> 注册 </el-button>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
//设置导航激活
import { ref } from 'vue'
import { reactive, nextTick } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus/es/components/tabs/src/constants'
import { useUserStore } from './stores/userStore'
import { useLoginStore } from './stores/loginState'
import {
    handleClickApply,
    handleClickDeposit,
    handleClickManagement,
    handleClickSelect,
    handleClickTransaction,
    handleClickWithdrawal
} from '@/router/linkTo'
//axios
import axios from '@/axios/axios'
//人物卡片
import personCard from '@/components/utils/personCard.vue'
import type {
    loginAccountInfoResponse,
    registerAccountInfoResponse,
    logoutAccountInfoResponse
} from '@/inferface/responseInterface'

// button的登陆状态
const loginState = ref(useLoginStore().getLoginState)
//用户数据
const userInfo = reactive({
    accountNumber: '',
    password: '',
    phoneNumber: '',
    idNumber: ''
})

//登陆数据
const loginData = reactive({
    accountNumber: '', //账号名
    password: '' //密码
})
//注册信息管理
const registerData = reactive({
    accountNumber: '',
    password: '',
    phoneNumber: '',
    idNumber: ''
})

//登陆注册状态管理
const state = reactive({
    loginState: loginState.value,
    isSignupCorrect: '',
    isLoginCorrect: ''
})

const componentState = reactive({
    activeIndex2: '1', //导航栏标记位
    centerDialogVisible: false, //登录注册对话框控制位
    activeName: 'first' //标签页
})
/*********************************************************************** */

//登录事件
const PersonalLoginClick = () => {
    componentState.centerDialogVisible = true
}

//处理个人登录
const handlePersonalLogin = () => {
    axios
        .post('/login', {
            accountNumber: loginData.accountNumber,
            password: loginData.password
        })
        .then(function (response) {
            console.log(response.data)
            /*
             *记录第一次出错原因，应当解析的是response.data而不是response
             */
            let result = response.data as unknown as loginAccountInfoResponse
            if (result.code == 0) {
                loginState.value = true
                state.isLoginCorrect = 'true'
                componentState.centerDialogVisible = false
                if (typeof result === 'object' && result !== null && 'accountInfoDTO' in result) {
                    const { accountInfoDTO } = result
                    useUserStore().addNowAccount(
                        accountInfoDTO.accountNumber,
                        accountInfoDTO.idNumber,
                        accountInfoDTO.permission,
                        accountInfoDTO.phoneNumber
                    )
                    userInfo.accountNumber = useUserStore().accountNumber
                    userInfo.idNumber = useUserStore().idNumber
                    userInfo.password = loginData.password
                }
                nextTick()
            } else {
                state.isLoginCorrect = 'false'
            }
        })
        .catch(function (error) {
            // console.log(error)
        })
}

//处理个人注册
const handlePersonalRegister = () => {
    axios
        .post('/signup', {
            accountNumber: registerData.accountNumber,
            password: registerData.password,
            phoneNumber: registerData.phoneNumber,
            idNumber: registerData.idNumber
        })
        .then(function (response) {
            console.log(response)
            let result: registerAccountInfoResponse =
                response.data as unknown as registerAccountInfoResponse
            if (result.code === 0) {
                state.isSignupCorrect = 'true'
            } else {
                state.isSignupCorrect = 'false'
            }
        })
        .catch(function (error) {
            console.log(error)
        })
}
const EnterpriseLoginClick = () => {}

//处理账号注销
const handleChangeLoginState = () => {
    loginState.value = false
    location.reload()
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: AlimamaFangYuanTiVF-Thin;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.woff2)
            format('woff2');
}
@font-face {
    font-family: DingTalkJinBuTi-Regular;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.woff2)
            format('woff2');
}

@font-face {
    font-family: AlimamaShuHeiTi-Bold;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.woff2)
            format('woff2');
}

.el-menu {
    font-family: AlimamaFangYuanTiVF-Thin;
    /*-------text -----*/
    .text-hasmokan {
        font-family: AlimamaShuHeiTi-Bold;
        font-size: 30px;
        background-image: linear-gradient(15deg, darkgoldenrod, white, gold);
        background-size: 500%;
        margin-left: 10px;
        display: initial;
        -webkit-background-clip: text;
        white-space: nowrap;
        color: transparent;
        animation: bgAnimation 10s linear infinite;
    }
    @keyframes bgAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
}

.el-dialog {
    :deep(.my-header) {
        width: 100%;
        background-color: rgb(248, 248, 248);
    }
    .el-input {
        margin-bottom: 20px;
        :deep(.el-input__wrapper) {
            background-color: rgb(245, 246, 247);
        }
    }
    .el-button {
        margin-top: 30px;
        width: 100%;
        border-radius: 300px;
    }
    .forget-password {
        margin-left: 300px;
    }
    .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
}
</style>
