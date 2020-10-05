<template>
    <div>
    <div id="a"   @click="jumpRouter('/program')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">行人過街預警</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >通过为人行道交通信号灯,数据汇聚到后台进行数据分析和人脸比对等，实现交通泛感知能力</p>
    </div>

     <div id="b">
        <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;"  @click="jumpRouter('/program')">點擊返回</el-button>
             <div style="width:954px;margin:0 auto;margin-top:0px;line-height:36px;font-size:20px;">
                <p><b>一、系统介绍</b></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行人过街系统通过为人行道交通信号灯加装复合视频检测器，集成电子警察执法功能，对违章行人进行声、光、视觉警示提醒和违章抓拍，提示过往的机动车停车让行，并将数据汇聚到后台进行数据分析和人脸比对等，实现完整、全面、立体的交通泛感知能力。</p>
                <p><b>二、功能介绍</b></p>
                  <ul style="margin-left:40px;">
                    <li> 1.立柱状态检测&故障实时预警</li>
                    <li> 2.人员违法处置</li>
                    <li>3.后台喊话&广告下发</li>
                    <li> 4.违法行为&人员采集</li>
                    <li>5.实时违法后台监控</li>
                    <li>6.事后违法分析&呈现</li>
                  </ul>

                <p><b>三、产品特点</b></p>
                   <ul style="margin-left:40px;">
                      <li>（1）行人闯红灯捕获有效距离不小于30米；</li>
                      <li>（2）支持宽温高湿，工作温度范围满足-20~60℃，工作环境湿度10%～95%RH；  </li>
                      <li>（3）正面相机采用800万像素，4/3"超高灵敏度CMOS图像传感器，一体化机芯镜头，超宽动态；侧面相机采用200万 1/2.8"逐行扫描图像传感器，超宽动态；</li>
                      <li>（4）LCD屏采用创新风道式散热和表贴加热设计，LCD亮度≥1000cd/㎡，满足室外应用；</li>
                      <li>（5）高抗风能力，高抗震能力，室外设备防护等级；</li>
                      <li>（6）采用多重喷粉工艺，不易拉花/刮花、防锈、防水；</li>
                      <li>（7）集声学、光学提醒于一体，全面保障路口行人安全和机动车有序通行；</li>
                      <li>（8）设备集成综合运维模块，含电压电流检测等功能，能够及时准确定位故障点并上报通知运维；</li>
                      <li>（9）设备采用电路隔离机制，单独一个设备故障不会影响其他功能单元的正常运行，确保人行道红绿灯一直稳定正常工作；</li>
                      <li>（10）底部防撞硅胶设计，保障行人安全；</li>
                      <li>（11）模块化设计，现场易安装维护；轻量化美观设计，易部署实施。</li>

                   </ul>

                <p><b>四、系统建设价值</b></p>

                 <ul style="margin-left:40px;">
                    <li>1.高度集成行人立柱景观工程文明城市建设需要</li>
                    <li> 2.交通疏导保畅重要组成部分约束行人、车辆遵守交通规则提高路口通行效率</li>
                    <li>3.多样化自动提醒手段减少路口交警执勤工作量</li>
                    <li> 4.全面保障行人过街安全</li>
                    <li>5.实时告警+事后违法呈现+违法处罚重压行人闯红灯行为</li>
                    <li> 6.行人闯红灯抓拍与告警+人行道红绿灯+路口全景监控合一多系统统一建设、统一管理。</li>

                 </ul>


             </div>
     </div>
    </div>
</template>


<script>
export default {
     data() {
    return {};
  },
  methods: {
    jumpRouter(path){
          this.$router.push(path);
    }
  }
    
}
</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
  
overflow-x:hidden;
overflow-y:hidden;
}
   
#a {
  background: url(../assets/img/2-4.png) no-repeat center;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
    overflow: hidden;
  transition: all 2s;
}

#a:hover {
 transform: scale(1.1);
}

#b{
  height: 1280px;
}

</style>