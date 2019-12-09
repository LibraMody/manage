export const mutations = {
    login (state, { login_response }) {
        const user_id = login_response.data.user_id;
        const login_token = login_response.data.token;

        if(!!user_id && !!login_token){
            
            localStorage.setItem('user_id', user_id);
            state.id = user_id;

            
            localStorage.setItem('token', login_token);
            state.token = login_token;
        }
    },
    log_out (state) {
        localStorage.removeItem('user_id');
        state.id = '0';
        localStorage.removeItem('token');
        state.token = '';
    }
}
//！0 true ， !!0 false 
//mutation必须同步执行,只能放一个参数，如：login
//localStorage浏览器缓存，user_id、token