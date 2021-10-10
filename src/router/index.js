
import { createRouter,createWebHistory,createWebHashHistory} from "vue-router";

// const routes=[
//   {
//     path: '/',
//     name:'root',
//     component: () => import('../components/BaseLayout.vue'),
//     children:[
//       {
//         path: 'home',
//         name: 'home',
//         meta: { title: '主页' },
//         component: () => import('../views/Home.vue'),
//       },
//       {
//         path: 'joinus',
//         name: 'joinus',
//         meta: { title: '关于纳新' },
//         component: () => import('../views/JoinUs.vue'),
//       },
//       {
//         path: 'signup',
//         name: 'signup',
//         meta: { title: '我要报名' },
//         component: () => import('../views/SignUp.vue'),
//       },
//       {
//         path: 'contact',
//         name: 'contact',
//         meta: { title: '联系我们' },
//         component: () => import('../views/Contact.vue'),
//       },
//     ]
//   },
//   // {
//   //   path: "", // 默认自动匹配home
//   //   redirect: '/home',
//   // },
//   {
//     path: "/:catchAll(.*)", // 不识别的path自动匹配home
//     redirect: '/home',
//   },
//   {
//     path: "/404",
//     name: '404',
//     component: () => import('../components/404.vue'),
//   },
// ]
const routes=[
  {
    path: '/home',
    name: 'home',
    meta: { title: '主页' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/joinus',
    name: 'joinus',
    meta: { title: '关于纳新' },
    component: () => import('../views/JoinUs.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    meta: { title: '我要报名' },
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: '联系我们' },
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '错误' },
    component: () => import('../components/404.vue'),
  },
    {
    path: "/:catchAll(.*)", // 不识别的path自动匹配home
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
