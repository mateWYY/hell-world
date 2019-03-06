<template>
    <div>
        <p>个人信息</p>
        <div class="btn">添加</div>
    </div>
</template>

<script>
    export default {
        name: "user",
        methods: {
            btn() {
                this.$router.push({
                    path: 'add'
                })
            }
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