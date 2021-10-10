// import { asyncRoutes } from '@/router'
//
// // 将菜单信息转成对应的路由信息 动态添加
// export default function createRoutes(data) {
//   const result = []
//   const children = []
//   //将主页组件加到路由表中
//   result.push({
//     path: '/',
//     component: () => import('../components/layout/Layout.vue'),
//     children,
//   })
//   //路由优先级问题，输入一个url路径时，路由表会优先匹配commonroutes路由表，然后是刚刚加入的主页组件路由，最后是404页面
//   // console.log("before children:",children)
//   data.forEach((item) => {
//     generateRoutes(children, item)
//   })
//   // console.log("after children:",children)
//   // 最后添加404页面 否则会在登陆成功后跳到404页面
//   result.push({ path: '*', redirect: '/404' })
//   // console.log("result :",result)
//   // 返回路由表，分为单独路由和子路由
//   return result
// }
//
// function generateRoutes(children, item) {
//   if (item.name) {
//     if (asyncRoutes[item.name]) children.push(asyncRoutes[item.name])
//   } else if (item.children) {
//     item.children.forEach((e) => {
//       generateRoutes(children, e)
//     })
//   }
// }
