export const state = {
    token: localStorage.getItem('token') || '',
    id: parseInt(
        localStorage.getItem('user_id') || '0'
    )
} 
//获取浏览器缓存