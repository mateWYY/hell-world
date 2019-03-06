<template>
    <div class="login_box">
        <div class="title">平台信息</div>
        <p>账号：<input type="text"></p>
        <p>密码：<input type="password"></p>
        <button @click="loginBtn">登录</button>
        <button>注册</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            loginBtn(){
                this.$router.push({
                    path: 'home'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .login_box{
        width: 100%;
        background: #ccc;
        text-align: center;
        button{
            width: 50px;
            height: 40px;
            margin: 0 6px;
        }
    }
</style>