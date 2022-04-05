<template>
  <div id="home">
    <div id="first">
      <h1>实验室介绍</h1>
      <div class="container">
        <div id="introduction">
          <p >信息技术实验室成立于2020年10月，隶属于sdut信息管理与信息系统系</p>
            <p>作为全校学生信息技术类课外实践活动的场所支持学生富有创造性的活动</p>
            <p>支持学生科技创新和科技实践，为学生个性化培养和多样性发展开辟</p>
             <p>更加广阔的空间；推动学生在本科阶段得到科学研究与发明创造的训</p>
             <p>练，调动学生的主动性、积极性和创造性，全面提升学生的创新实践</p>
             <p>能力。鼓励学生参加诸如山东省软件设计大赛，济南超算杯、中国大</p>
             <p>学生服务外包应用大赛等山东省及国家级信息技术类大赛</p>


        </div>
        <div id="logo" data-aos="zoom-in-up" data-aos-anchor="top-center">
          <el-card>
            <img :src="logo"/>
          </el-card>
        </div>
      </div>
    </div>
    <div id="second">
      <h1>欢迎加入^v^</h1>
      <div data-aos="zoom-in-up">
        <el-card class="box-card">
          <p>
           作为处于信息，数据，智能时代风口的理工科高校的学生,加强个人的编程水平无疑会为未来的学习生活提供有力的支持
          </p>
          <p>
            这里有擅长web前后端开发的研发者，他们勤劳的双手敲下了无数的代码，其中就包括了这个实验室网站
          </p>
          <p>
            这里有擅长数据挖掘的同学，大数据时代的弄潮儿，一步一步走向数据科学家
          </p>
          <p>
            这里有潜心钻研为SCI第一作者而努力的科研大佬，将来也许能在保研名单上看见他们的大名
          </p>
          <p>
            这里也有网络世界的幕后英雄，帮助学校与公安部门挖掘漏洞，默默维护着网络的安全
          </p>
          <p>如果你也对这些感兴趣想要学习，那么一起来加入我们吧,我们一起进行学习与交流,一起参加比赛。</p>
        </el-card>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div id="third">
      <h1>学习方向</h1>
      <div class="container">
        <div class="h4" data-aos="flip-left">
          <el-card class="box-card">
            <div class="element-icon">
              <i class="el-icon-upload"></i>
            </div>
            <h3>Web前后端开发</h3>
            <h4 class="text-grey px-0">
            </h4>
            <!-- pb 代表 图标的bottom -->
            <p>
              微信小程序开发，网页前端设计，网站后端开发等。
              学习JavaWeb,静态网页编写。和一些开发框架，
              例如前端的vue，react框架,后端的spring全家桶等。
              也可以学习编写出属于自己的博客,让世界各地的人都可以通过因特网认识你
            </p>
          </el-card>
        </div>
        <div class="h4" data-aos="zoom-in-up">
          <el-card class="box-card">
            <div class="element-icon">
              <i class="el-icon-star-on"></i>
            </div>
            <h3>科研技术的学习</h3>
            <p>
              主流企业或科研技术，包括深度学习，大数据开发技术，
              NLP自然语言处理，数据挖掘，知识图谱等，
              可以和学院相关老师进行相关的技术研究，
              如果你有科研意向，何不为了成为SCI的第一作者而努力
            </p>
          </el-card>
        </div>
        <div class="h4" data-aos="flip-right">
          <el-card class="box-card">
            <div class="element-icon">
              <i class="el-icon-s-platform"></i>
            </div>
            <h3>网络安全与维护</h3>
            <h4 class="text-grey px-0">
            </h4>
            <p>
              学习局域网和云服务器有关部署与维护，网络安全知识和常用工具，
              攻击防护手段，常见的web渗透，注入，扫描，爆破方法从机房的局域网进行内网攻防，
              可以帮忙维护学院或者校区机房的网络，找出漏洞，深藏功与名
            </p>
          </el-card>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div id="fourth">
      <h1>主要比赛</h1>
      <div class="container">
        <div data-aos="flip-left">
          <el-card class="box-card">
            <p class="font-weight-bold">
              <a
                href="http://sw.sdusc.cn/index/index/index.html"
                target="_blank"
                >山东省大学生软件设计大赛</a
              >
            </p>
            <p>
              山东省大学生软件设计大赛”（以下简称大赛）是山东省科协、省教育厅、山东省高教学会计算机教学研究专业委员会、济南市经信委、济南市商务局、齐鲁软件园发展中心主办，济南计算机学会、济南软件行业协会承办。山东计算机学会指导。它是面向全省高校计算机与信息专业在校大学生举办的年度性赛事。
            </p>
          </el-card>
        </div>
        <div data-aos="zoom-in-up">
          <el-card class="box-card">
            <p class="font-weight-bold">
              <a href="http://www.cnsoftbei.com/" target="_blank"
                >“中国软件杯”大学生软件设计大赛</a
              >
            </p>
            <p>
              “中国软件杯”大学生软件设计大赛（简称“大赛”）是由工业和信息化部、教育部和江苏省人民政府共同创办的面向中国高校在校学生（含高职）的纯公益性软件设计大赛。大赛自2011年启动已经连续成功举办的三届，第四届报名火热进行中，在政、产、学、研界均取得了良好反响，受到社会各界的广泛关注
            </p>
          </el-card>
        </div>
        <div data-aos="flip-right">
          <el-card class="box-card">
            <p class="font-weight-bold">
              <a href="http://www.fwwb.org.cn/" target="_blank"
                >中国大学生服务外包应用大赛</a
              >
            </p>
            <p>
              "中国大学生服务外包创新创业大赛"（以下简称大赛），是响应国家关于鼓励服务外包产业发展、加强服务外包人才培养的相关战略举措与号召，举办的每年一届的全国性竞赛。大赛均由中华人民共和国教育部、中华人民共和国商务部和无锡市人民政府联合主办，由国家服务外包人力资源研究院、无锡市商务局、无锡市教育局、江南大学承办。
            </p>
          </el-card>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
    <div id="fifth" data-aos="zoom-in-up">
      <h1>实验室照片</h1>
      <el-carousel type="card" height="500px">
        <el-carousel-item v-for="item in 6" :key="item">
          <div class="img-border">
            <img class="img" :src="images[item]" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <h1>友情链接</h1>
      <p>
        <i class="el-icon-position"></i
        >github主页:<a href="https://github.com/sdut-IT-lab">SDUT IT LAB</a>
      </p>
      <p>
        <i class="el-icon-right"></i>友情链接:<a href="https://www.baidu.com"
          >信息技术实验室</a
        >
      </p>
      <p>
        <i class="el-icon-right"></i>开发者仓库:<a href="https://github.com/iznilul"
      >半径圆radCircle</a
      >
      </p>
      <div class="h6 pb-2">Copyright</div>
      <p>
        &copy; 2020-2021 Information Technology Lab. All rights reserved.
      </p>
      <br />
    </div>
    <br />
    <br />
    <br />
        <el-steps id="step" direction="vertical" :active="active-0">
            <el-step title="实验室介绍"></el-step>
            <el-step title="欢迎加入"></el-step>
            <el-step title="学习方向"></el-step>
            <el-step title="主要比赛"></el-step>
            <el-step title="实验室照片"></el-step>
        </el-steps>
  </div>
</template>

<script>
import AOS from "aos";
import logo from "../assets/itlab.png";
import { onMounted } from "@vue/runtime-core";
import { ref, reactive } from "vue";
import {setScale} from "../utils/resize";
export default {
  name: "Home",
  setup() {
    AOS.init();
    let list = reactive([
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
    ]);
    const active = ref("");
    let actives = reactive({
      first: "0",
      second: "1",
      third: "2",
      fourth: "3",
      fifth: "4",
    });
    const scrollHandle = (e) => {
      // 获取视窗高度
      let domHeight = document.body.offsetHeight;
      // console.log("视窗高度:"+domHeight)

      // dom滚动位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log("dom滚动位置:"+scrollTop)

      // 获取监听元素
      let id = null;
      // 获取监听元素本身高度
      let scrollHeight = null;
      // 获取监听元素距离视窗顶部距离
      let offsetTop = null;
      // 获取监听元素距离顶部高度-窗口高度
      let top = null;
      // 元素距离底部的高度+元素本身高度
      let bottom = null;
      list.map((i) => {
        id = document.getElementById(i);
        // console.log(id)
        scrollHeight = id.scrollHeight;
        // console.log("元素高度:"+scrollHeight)
        offsetTop = id.offsetTop;
        // console.log("元素绝对位置:"+offsetTop)
        top = offsetTop - domHeight > 0 ? offsetTop - domHeight : 0;
        // console.log("元素顶部:"+top)
        bottom = scrollHeight + offsetTop;
        // console.log("元素底部:"+bottom)
        // 页面滚动位置 > 元素距离顶部高度-窗口高度 && 页面滚动位置 < 元素距离顶部高度+元素本身高度
        if (scrollTop >= top && scrollTop <= bottom) {
          // console.log(active)
          // console.log('元素出现在可视区: ' + i);
          active.value = actives[i];
        }
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollHandle);
      window.addEventListener("resize", setScale);
    });
    return {
      active,
    };
  },

  data() {
    return {
      tabPosition: "left",
      images: [null,
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950230.jpg",
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950354.jpg",
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950460.jpg",
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950563.jpg",
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950668.jpg",
        "https://cdn.jsdelivr.net/gh/iznilul/img/1646756950771.jpg"],
      logo: logo,
    };
  },
};
</script>

<style lang="scss">
@import "../style/Home.scss";
</style>
