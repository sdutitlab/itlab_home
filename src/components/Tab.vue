<template>
    <el-tabs id="tab" :tab-position="tabPosition" >
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: "Tab",
        data(){
            return{
                tabPosition:"left"
            }
        }
    }
</script>

<style scoped>

</style>