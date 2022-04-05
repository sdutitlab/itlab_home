<template>
        <div id="header">
            <h3 id="title">信息技术实验室</h3>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleClick">
            <template v-for="item in menuItems" :key="item.name" >
                <a :href="item.url" v-if="item.isExternal" target="_blank" class="external">
                    <el-menu-item >
                        <i :class="item.icon"></i>
                        <span>{{ item.text }}</span>
                    </el-menu-item>
                </a>
                <el-menu-item v-else :index="item.path">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </el-menu-item>
            </template>
            </el-menu>
        </div>
</template>

<script>
    export default {
        name: "AHeader",
        component: {
        },
        setup(props,{ emit }){
            const handleClick = path => {
                // console.log(path)
                // 子组件向父组件传参
                emit('gotoPage',path);
            }
            return{
                handleClick
            }
        },
        computed: {
            menuItems() {
                return this.$store.getters.menuItems
            },
        },
        data() {
            return {
                activeIndex:"0",
            }
        },
        methods: {
            link(path) {
                window.open(url,'_blank')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/AHeader";

</style>
