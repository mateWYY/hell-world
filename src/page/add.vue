<template>
    <div class="add_box">
        <p>新闻标题</p>
        <input type="text">
        <p>新闻内容</p>
        <input type="text">
        <div class="btn">添加</div>
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
        }
    }
</style>