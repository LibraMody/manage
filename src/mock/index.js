import Mock from 'mockjs';
import userData from './json/userData.json';

Mock.mock('http://localhost:5500/user/login', 'post', (options) => {
    const post_data = JSON.parse(options.body).data;

    if (
        post_data.username !== userData.username ||
        post_data.password !== userData.password
    ) { 
        return { code: 1, message: '登录失败'};
    }

    return { 
        user_id: userData.id,
        token: 'token'      
    };
    
});

Mock.mock('http://localhost:5500/user/userInfo', 'get', userData); //userData给定url

//执行之后
///user/userInfo是url

/*options: {url: "http://localhost:5500/user/login", type: "POST", body: "{"username":"","password":""}"}
body: "{"username":"","password":""}"
type: "POST"
url: "http://localhost:5500/user/login"*/
//这里url拿的是登入时输入的，用户名和密码



