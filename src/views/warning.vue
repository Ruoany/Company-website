<template>
    <div>
    <div id="a"   @click="jumpRouter('/program')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">行人過街預警</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >通過為人行道交通信號燈,數據匯聚到後台進行數據分析和人臉比對等，實現交通泛感知能力</p>
    </div>

     <div id="b">
        <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;"  @click="jumpRouter('/program')">點擊返回</el-button>
             <div style="width:954px;margin:0 auto;margin-top:0px;line-height:36px;font-size:20px;">
                <p><b>一、系統介紹</b></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行人過街系統通過為人行道交通信號燈加裝複合視頻檢測器，集成電子警察執法功能，對違章行人進行聲、光、視覺警示提醒和違章抓拍，提示過往的機動車停車讓行，並將數據匯聚到後台進行數據分析和人臉比對等，實現完整、全面、立體的交通泛感知能力。</p>
                <p><b>二、功能介紹</b></p>
                  <ul style="margin-left:40px;">
                    <li> 1.立柱狀態檢測&故障實時預警</li>
                    <li> 2.人員違法處置</li>
                    <li>3.後台喊話&廣告下發</li>
                    <li> 4.違法行為&人員採集</li>
                    <li>5.實時違法後台監控</li>
                    <li>6.事後違法分析&呈現</li>
                  </ul>

                <p><b>三、產品特點</b></p>
                   <ul style="margin-left:40px;">
                      <li>（1）行人闖紅燈捕獲有效距離不小於30米；</li>
                      <li>（2）支持寬溫高濕，工作溫度範圍滿足-20~60℃，工作環境濕度10%～95%RH；  </li>
                      <li>（3）正面相機採用800萬像素，4/3"超高靈敏度CMOS圖像傳感器，一體化機芯鏡頭，超寬動態；側面相機採用200萬 1/2.8"逐行掃描圖像傳感器，超寬動態；</li>
                      <li>（4）LCD屏採用創新風道式散熱和表貼加熱設計，LCD亮度≥1000cd/㎡，滿足室外應用；</li>
                      <li>（5）高抗風能力，高抗震能力，室外設備防護等級；</li>
                      <li>（6）採用多重噴粉工藝，不易拉花/刮花、防銹、防水；</li>
                      <li>（7）集聲學、光學提醒於一體，全面保障路口行人安全和機動車有序通行；</li>
                      <li>（8）設備集成綜合運維模塊，含電壓電流檢測等功能，能夠及時準確定位故障點並上報通知運維；</li>
                      <li>（9）設備採用電路隔離機制，單獨一個設備故障不會影響其他功能單元的正常運行，確保人行道紅綠燈一直穩定正常工作；</li>
                      <li>（10）底部防撞矽膠設計，保障行人安全；</li>
                      <li>（11）模塊化設計，現場易安裝維護；輕量化美觀設計，易部署實施。</li>

                   </ul>

                <p><b>四、系統建設價值</b></p>

                 <ul style="margin-left:40px;">
                    <li>1.高度集成行人立柱景觀工程文明城市建設需要</li>
                    <li> 2.交通疏導保暢重要組成部分約束行人、車輛遵守交通規則提高路口通行效率</li>
                    <li>3.多樣化自動提醒手段減少路口交警執勤工作量</li>
                    <li> 4.全面保障行人過街安全</li>
                    <li>5.實時告警+事後違法呈現+違法處罰重壓行人闖紅燈行為</li>
                    <li> 6.行人闖紅燈抓拍與告警+人行道紅綠燈+路口全景監控合一多系統統一建設、統一管理。</li>

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
  },
    mounted(){
    $(document).ready(function () {

     if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        window.location.reload();
    }
 });
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