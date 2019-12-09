import axios from 'axios';

export const actions = {
    async login({ commit}, options) {
        const api_url = 'http://localhost:5500/user/login'; 

        const login_response = await axios.post(api_url, options); 
        //放url,和data到options里，data是用户输入的
        commit('login', { login_response });
    },

    async log_out( { commit} ) {
        commit('log_out')
    }
    
} 

//Action提交的是mutation, 而不是直接变更状态。
//Action可以包含任意异步操作
//commit传参：commit('login', { login_response: login_response, a: 'a' })