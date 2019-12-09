axios.get('http://localhost:5500/user/userInfo')
.then(function(res){
  console.log(res);
})
.catch(function(err){
  console.log(err);
});

//拦截/user/userInfo请求

