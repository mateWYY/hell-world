<template>
    <div class="home_box">
        <div>
            <router-view></router-view>
        </div>
        <ul>
            <router-link :to="{name:'list'}">
                <li>新闻列表</li>
            </router-link>
            <router-link :to="{name:'user'}">
                <li>个人中心</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    body{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .home_box{
        ul{
            margin: 0;
            position: fixed;
            width: 100%;
            padding: 0;
            bottom: 0;
            li{
                list-style: none;
                width: 50%;
                height: 50px;
                background: green;
                float: left;
                margin: 0;
                text-align: center;
                line-height: 50px;
                color: #fff;
            }
        }
    }
</style>