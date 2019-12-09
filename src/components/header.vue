<template>
    <div class="header">
        <div class="logo_bg">
            <div class="logo_left">
                <div class="text_gallery" @click="back_gallery()"  title="回到首页">
                    <span>游廊</span>
                </div>
                <div class="static_txt">
                    <div class="txt_big">
                        <span>随记</span>
                    </div>
                    <div class="txt_min">
                        <span>个人站</span>
                    </div>
                </div>
            </div>
            <div class="logo_right">
                <div>
                    <span @click="logout_click()">退出登录</span>
                </div>
                <div>
                    <span>个人中心</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.header {
    font-size: 0;

    & .logo_bg {
        border-radius: 10px;
        background-image: linear-gradient(-45deg, #f6de9d, #caa859);

        & .logo_left {
            width: 50%;
            padding: 10px;
            display: inline-block;
            box-sizing: border-box;

            & .text_gallery {
                border-radius: 26px;
                background: #90EE90;
                display: inline-block;
                cursor: pointer;
                transition: background-color .4s;
            }
            & .text_gallery span {
                font-size: 40px;
                font-weight: bolder;
                -webkit-text-stroke:1px #DA70D6;
                color: transparent;
                padding: 16px;
            }
            & .text_gallery:hover span {
                -webkit-text-stroke: 1px #da7070;
            }
            & .text_gallery:hover {
                background: #9ACD32;
            }
            & .static_txt {
                display: block;

                & .txt_big {
                    font-size: 30px;
                    color: #D87093;
                    display: inline-block;
                }
                & .txt_min {
                    font-size: 14px;
                    color: #4682B4;
                    display: inline-block;
                    margin-left: 10px;
                }
            }
        }
        & .logo_right {
            font-size: 14px;
            color: #808000;
            width: 50%;
            text-align: right;
            display: inline-block;
            box-sizing: border-box;
            padding-right: 10px;
        }
        & .logo_right span:hover {
            color: #409eff;
            cursor: pointer;
        }
    }
}
</style>
<script>
import { mapActions } from 'vuex';
import store from '@/store';

export default {  
    methods: {
        ...mapActions('configs', [
                'log_out'
            ]),
        async logout_click(event) {
            await this.log_out();
            //if(store.getters['configs/is_login']) {
                //this.$router.push({ name: 'login' });    
            //}
        },
        back_gallery() {
            this.$router.push({ name : 'gallery' });
        }
    },
}
</script>