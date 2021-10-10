<template>
   <BaseLayout></BaseLayout>
</template>
<script>

import BaseLayout from "./components/BaseLayout";
import {onMounted} from "vue"
import {ElMessageBox} from "element-plus"
export default {
  name: 'App',
  components: {
    BaseLayout
  },
   setup(){
      const isMobile=()=>{
         let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
         return flag;
      }
      onMounted(()=>{
         // console.log("isMobile",isMobile())
         if(isMobile()){
            ElMessageBox({
               title:"设备错误",
               message:"请在电脑网页版访问，手机移动端暂不支持",
               showClose:false,
               showConfirmButton:false,
               closeOnClickModal:false,
               closeOnPressEscape:false
            });
         }
      })
   },
}
</script>
<style>

</style>

