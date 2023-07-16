<template>
    <el-carousel height="450px">
        <el-carousel-item> <img class="img" style="width: 100vw" :src="head1" /> </el-carousel-item>
        <el-carousel-item> <img class="img" style="width: 100%" :src="head2" /> </el-carousel-item>
    </el-carousel>
    <el-main>
        <!-- 中间对齐的页面 -->
        <div class="centerbody">
            <div class="warpper">
                <div class="header">
                    <!-- 上面的黄色条纹 -->
                    <div class="titleBox">
                        <div class="header-line"></div>
                        <div class="titleTextBox">西北银行管理系统</div>
                    </div>
                </div>
                <!-- esg报告下面图片后的内容 -->
                <div class="middle">
                    <div class="headerimg">
                        <img src="@/assets/img/ESG-Criterias.png" alt="ESGimg" />
                    </div>
                    <div class="flexbox">
                        <div class="box1">
                            <ul>
                                <li>环保政策</li>
                                <li>绿色技术</li>
                                <li>环保投入</li>
                                <li>绿色资产</li>
                                <li>.....</li>
                            </ul>
                        </div>
                        <div class="box2">
                            <ul>
                                <li>精准扶贫</li>
                                <li>产业扶贫</li>
                                <li>乡村振兴</li>
                                <li>优质基金</li>
                                <li>.....</li>
                            </ul>
                        </div>
                        <div class="box3">
                            <ul>
                                <li>转账查询</li>
                                <li>汇款记录</li>
                                <li>账户查询</li>
                                <li>风险管理</li>
                                <li>.....</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="succ">
            <div class="succ-header">
                <div>
                    <div class="succ-header-line"></div>
                    <div class="succ-header-text">银行业务</div>
                </div>
            </div>
            <div class="succ-case">
                <div class="succ-case-container">
                    <div class="succ-case-text">
                        <div class="succ-case-text-line"></div>
                        <div class="succ-case-text-header" style="">存取业务</div>
                    </div>
                    <div class="label">集成工具 服务，轻松选择 便捷交易</div>
                </div>
                <div class="flex-bottom-box">
                    <img class="img1" src="@/assets/img/case1.jpg" alt="" />
                    <div class="succ-case-text">
                        <div class="container">
                            <div class="pic">
                                <img src="@/assets/img/1.jpg" />
                                <!-- <i class="iconfont icon-licai">账户查询</i> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/2.png" />
                                <!-- <div class="title">译</div> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/3.png" />
                                <!-- <div class="title">中</div> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/4.png" />
                                <!-- <div class="title">中</div> -->
                            </div>
                        </div>
                    </div>

                    <!-- <i class="iconfont icon-qianbi">资产查询</i>
          <i class="iconfont icon-yinhang"></i> -->
                </div>
            </div>
            <div class="succ-header" style="height: 100px">
                <div class="div1">很好用</div>
                 <div class="diagonal-line"></div>
                 <img class="img4" src="@/assets/img/11.png">
                 <div class="div2">存钱取钱秒到账</div>
                 <img class="img5" src="@/assets/img/22.png">
                 <div class="div3">账单查询、办理分期更便捷</div>
                 <img class="img6" src="@/assets/img/33.png">
                 <div class="div4">账号支付怎么用？</div>
            </div>
            <div class="succ-case">
                <div class="succ-case-container">
                    <div class="succ-case-text">
                        <div class="succ-cass-text-line"></div>
                        <div class="succ-case-text-header" style="">投资理财</div>
                    </div>
                    <div class="label">多样性产品，专业建议 全面服务</div>
                </div>
                <div class="flex-bottom-box">
                    <div class="imgbox">
                        <img class="img2" src="@/assets/img/case2.jpg" alt="" />
                    </div>

                    <div class="succ-case-text">
                        <div class="container">
                            <div class="pic">
                                <img src="@/assets/img/5.png" />
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/6.png" />
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/7.png" />
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/8.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="succ-case-text">
                    <div class="succ-case-text-line"></div>
                    <div class="succ-case-text-header">成功案例2</div>
                </div>-->
            </div>
            <div class="succ-header" style="height: 100px">
                 <div class="div1">很方便</div>
                 <div class="diagonal-line"></div>
                 <img class="img4" src="@/assets/img/44.png">
                 <div class="div2">购买理财产品有哪几个步骤？</div>
                 <img class="img5" src="@/assets/img/55.png">
                 <div class="div3">如何在线购买基金？</div>
                 <img class="img6" src="@/assets/img/66.png">
                 <div class="div4">如何为家庭选择保险产品</div>
            </div>
            <div class="succ-case">
                <div class="succ-case-container">
                    <div class="succ-case-text">
                        <div class="succ-case-text-line"></div>
                        <div class="succ-case-text-header" style="">贷款业务</div>
                    </div>
                    <div class="label">贷款任选，轻松解决，闪电审批，一步到位</div>
                </div>
                <div class="flex-bottom-box">
                    <img class="img1" src="@/assets/img/2.1.jpg" alt="" />
                    <div class="succ-case-text">
                        <div class="container">
                            <div class="pic">
                                <img src="@/assets/img/2.2.jpg" />
                                <!-- <i class="iconfont icon-licai">账户查询</i> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/2.3.jpg" />
                                <!-- <div class="title">译</div> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/2.4.jpg" />
                                <!-- <div class="title">中</div> -->
                            </div>
                            <div class="pic">
                                <img src="@/assets/img/2.5.jpg" />
                                <!-- <div class="title">中</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="succ-header" style="height: 100px">
                <div class="div1">真迅速</div>
                <div class="diagonal-line"></div>
                <img class="img4" src="@/assets/img/77.png">
                <div class="div2">“快贷”如何计算利息？</div>
                <img class="img5" src="@/assets/img/88.png">
                <div class="div3">我都可以在哪方面贷款？</div>
                <img class="img6" src="@/assets/img/99.png">
                <div class="div4">贷款秒到账，还款利息低</div>
           </div>
        </div>
    </el-main>
</template>

<script lang="ts" setup>
//设置导航激活
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import head1 from '@/assets/img/head1.png'
import head2 from '@/assets/img/head2.png'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss">
@import './home.scss';
</style>
