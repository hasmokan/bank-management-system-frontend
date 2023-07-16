<template>
    <div class="internationnal">
        <img class="headimg" src="@/assets/img/ESG-img.jpg" alt="" />

        <div class="centerbody">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>银行业务</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="wrapper">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="公司名称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="社会信用代码">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="法定代表人">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="ESG报告">
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            action="http://localhost:3000/api"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :auto-upload="false"
                        >
                            <template #trigger>
                                <el-button type="primary">select file</el-button>
                            </template>
                            <el-button class="ml-3" type="success" @click="submitUpload">
                                upload to server
                            </el-button>
                            <template #tip>
                                <!-- <div class="el-upload__tip text-red">仅上传一个文件，再次上传会覆盖前一个文件</div> -->
                            </template>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="ESG新闻">
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :auto-upload="false"
                        >
                            <template #trigger>
                                <el-button type="primary">select file</el-button>
                            </template>
                            <el-button class="ml-3" type="success" @click="submitUpload">
                                upload to server
                            </el-button>
                            <template #tip>
                                <!-- <div class="el-upload__tip text-red">仅上传一个文件，再次上传会覆盖前一个文件</div> -->
                            </template>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="公司发展战略">
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :auto-upload="false"
                        >
                            <template #trigger>
                                <el-button type="primary">select file</el-button>
                            </template>
                            <el-button class="ml-3" type="success" @click="submitUpload">
                                upload to server
                            </el-button>
                            <template #tip>
                                <div class="el-upload__tip text-red">
                                    仅上传一个文件，再次上传会覆盖前一个文件
                                </div>
                            </template>
                        </el-upload>
                    </el-form-item>
                    <!-- <el-form-item label="ESG新闻信息">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="公司发展战略">
                        <el-input v-model="form.desc" type="textarea" />
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import axios from 'axios'
import router from '../../router'
import { reactive } from 'vue'
import { ref } from 'vue'
import { genFileId } from 'element-plus'

import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
//表单组件
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})
//跳转事件
const onSubmit = () => {
    router.push('/esgReport')
}

//上传组件
const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}
//上传函数

const submitUpload = () => {
    upload.value!.submit()
}
</script>

<style lang="scss" scoped>
@import './transaction.scss';
</style>
