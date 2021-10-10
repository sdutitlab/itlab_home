// import { ACCESS_TOKEN } from '@/store/mutation-types'
// import { welcome } from '@/utils/util'

const menu = {
  state: {
    // 左侧菜单栏数据
    menuItems: [
      {
        path: '/home',
        name: 'home', // 要跳转的路由名称 不是路径
        index: '0',
        icon:'el-icon-house',
        text: '主页', // 文本内容
      },
      {
        path: '/joinus',
        name:'joinus',
        icon:'el-icon-plus',
        index:'3',
        text: '关于纳新',
      },
      {
        path: '/signup',
        name:'signup',
        icon:'el-icon-right',
        index:'4',
        text: '我要报名',
      },
      {
        path: '/contact',
        name:'contact',
        icon:'el-icon-chat-round',
        index:'5',
        text: '联系我们',
      },
      {
        path: '/cms',
        name: 'cms', // 要跳转的路由名称 不是路径
        index:'2',
        icon:'el-icon-folder',
        url: 'https://www.baidu.com',
        isExternal: true, // 外链 跳到一个外部的 URL 页面
        text: '后台管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
      },
      {
        path: '/okr',
        name: 'okr',
        index:'1',
        icon:'el-icon-cpu',
        url: 'https://www.baidu.com',
        isExternal: true, // 外链 跳到一个外部的 URL 页面
        text: '实验室okr记录',
      },
    ],
  },

  mutations: {
  },

  actions: {},
}

export default menu
