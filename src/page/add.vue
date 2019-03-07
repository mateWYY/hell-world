<template>
    <div class="add_box">
        <p>新闻标题</p>
        <input type="text">
        <p>新闻内容</p>
        <input type="text">
        <router-link to="/home">
            <div class="btn" >添加</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "add"
    }
</script>

<style scoped lang="scss">
    .add_box{
        .btn{
            width: 100%;
            height: 40px;
            background: green;
            margin-top: 20px;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    }
</style>