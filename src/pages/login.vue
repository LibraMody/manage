<template>
<div class="subject">
    <div class="login">  
        <div>
            <p>用户登录</p>
        </div>
        <el-form :model="userInfo" ref="userInfo" :rules="rules" >
            <el-form-item
                prop="account"
            >    
                <el-input
                    placeholder="input your user account"
                    prefix-icon="el-icon-user-solid"
                    maxlength="10"
                    v-model.number="userInfo.account">
                </el-input>
            </el-form-item>
            <el-form-item
                prop="password"
            >  
                <el-input
                    placeholder="input your password"
                    prefix-icon="el-icon-lock"
                    maxlength="16"
                    type="password"
                    show-password
                    v-model="userInfo.password">
                </el-input>
            </el-form-item>
            <el-row>
                <el-button :plain="true" @click="login_click" type="primary" round>log in</el-button>
            </el-row>
        </el-form>
    </div>
</div>
</template>


<script>
import {Row, Icon, Input ,Button, FormItem, Form} from 'element-ui';
import Vue from 'vue';
import {mapActions, mapMutations} from 'vuex';
import store from '@/store';
import { Message } from 'element-ui';

Vue.use(Icon, Input, Button, FormItem, Form);
Vue.prototype.$message = Message;

export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },

    async mounted () {
        await this.$nextTick();//等第二次生命周期
    },
    
    components: {
        'el-form-item': FormItem,
        'el-form': Form,
        'el-row': Row,
        'el-icon': Icon,
        'el-input': Input,
        'el-button': Button
    },

    methods: {
        ...mapActions('configs', [
            'login'
        ]),
        
        async login_click(event) {
            await this.login({
                data: {
                    username: this.userInfo.account,
                    password: this.userInfo.password,  
                } 
                //将用户输入的账号和密码放在data里
            });//login指的是由mapaction传参参数login
            //加上await后，后面的代码会等待这部分执行完

            if (store.getters['configs/is_login']){
                this.$router.push({ name: 'gallery' });
            }
            else {
                this.$message({
                    message: '密码或账号错误！',
                     type: 'warning'
        });
            };   
            
        },
        
    },
    data() { return {
        userInfo: {
            account: '',
            password: ''
        },
        rules: {
            account: [{ 
                required: true, 
                message: '账号不能为空'
                }],
            password: [{
                required: true, 
                message: '请输入密码',
                //pattern: '^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$'
            }],
        }
    }}
}
</script>


<style>
.subject {
    width: 100%;
    height: 100%;
    background: url(../img/login_bg.jpg) no-repeat;
    background-size: 100%;

    & .login {
        width: 200px;
        text-align: center;
        margin: 0 auto;
        position: relative;
        top: 41%;
        border: 1px solid #20B2AA;
        padding: 20px 100px;
        background-color:rgba(0,0,0,0.03);


        & button {
        margin-top: 15px;
        background: #409EFF
        }
        & button span {
            color: rgb(255, 255, 255);
        }
    }
    & .login p {
        color: rgb(255, 255, 255);
        text-align: center;
        font-size: 20px;
    }
}

</style>