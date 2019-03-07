<template>
    <div>
        <p>个人信息</p>
        <router-link to="/add">
            <div class="btn">添加</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "user",
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .btn{
        width: 100%;
        height: 50px;
        background: green;
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
</style>