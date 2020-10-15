<template>
    <div>
        
       <div id="a" @click="jumpRouter('/program')">
            <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">人車安全智慧雲</p>
            <p
                style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
            >提供基於位置資訊和安全管理的“Safety+TM”智慧車聯網平臺</p>
        </div>

    <div id="b">
      <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
      <div style="width:967px;height:595px;position:relative;margin:0px auto;">
        
        <p
          style="font-size:18px;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本系統為客戶提供基於駕駛安全、通行效率、路網路況資料獲取、分析的解決方案。</p>
        <p style="font-size:40px;text-align:center;margin:10px auto;height:50px;">一、人車安全智慧雲系統</p>
        <p
          style="font-size:18px;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本系統集成了車輛GPS定位、車載視頻、主動安全技術、大資料統計分析技術，提供從駕駛員、車輛、路網到實際應用的運輸過程安全解決方案，有效地提升運輸行業的安全性、經濟性和時效性。</p>
        <p style="font-size:18px;">營運車輛安全管理系統包括以下部分：</p>
        <ol style="position:relative;margin-left:30px;font-size:18px;">
          <li>1. 營運車輛預警的管理;</li>
          <li>2.營運車輛监控功能;</li>
          <li>3.營運車輛駕駛員人臉識別功能管理;</li>
          <li>4.營運車輛歷史軌跡管理;</li>
          <li>5.營運車輛定時定位查询管理;</li>
          <li>6.營運車輛视频和图像監控管理;</li>
          <li>7.營運車輛電子地圖管理。</li>
        </ol>

        <p
          style="font-size:18px;"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平臺能夠與硬體緊密結合，在滿足各項標準的基礎上，擴展更多適用於公共車輛日常運輸的實用功能，幫助車隊、駕駛員瞭解駕駛過程，客觀評價駕駛行為，分析路段風險，讓平臺發揮價值，成為車隊管理的有效工具。</p>
     
        <p style="font-size:40px;text-align:center;margin:10px auto;height:50px;">二、人車安全智慧雲方案</p>
      </div>

      <img
        src="@/assets/img/2-8.png"
        style="position:relative;margin:10px auto;margin-bottom:30px;"
      />

      <div style="width:952px;height:410px;position:relative;margin:0 auto;">
        <p style="font-size:40px;text-align:center;position:relative;margin:-60px auto;margin-top:20px;">三、人車安全智慧雲方案特點</p>
        <ol style="position:relative;margin-left:30px;font-size:18px;margin-top:80px;">
          <li>1.平臺的技術靈活、專業、高效、準確。</li>
          <li>2.平臺自主研發，能夠提供全方面的定制化開發，具有技術支持完備，回應及時，技術能力充足等優勢；</li>
          <li>3.平臺採用分散式運算架構，方便公司集中監管層面大量資料獲取、傳輸高效的要求，又能夠適應不同下屬車隊靈活使用的要求。</li>
          <li>4.平臺採用容器化部署方案，提高維護效率；</li>
          <li>5.平臺支持多用戶多首頁、多功能變數名稱功能</li>
        </ol>

        <p style="font-size:40px;text-align:center;margin:20px auto;height:50px;">四、人車安全智慧雲方優勢</p>
        <p style="font-size:18px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;實現“一平臺操作、一張圖展示、一張表統計，一標準覆蓋”。</p>
      </div>

      <div style="position:relative;margin-top:-90px;">
        <div style="width:952px;display:flex;justify-content:space-around;margin:120px auto;">
          <img src="@/assets/img/2-10.png" />
          <img src="@/assets/img/2-12.png" />
          <img src="@/assets/img/2-11.png" />
          <img src="@/assets/img/2-9.png" />
        </div>

        <div
          style="font-size:20px;width:952px;display:flex;justify-content:space-around;margin:-100px auto;"
        >
          <p>
            <b>一平臺操作</b>
          </p>
          <p>
            <b>一張圖展示</b>
          </p>
          <p>
            <b>一張表統計</b>
          </p>
          <p>
            <b>一標準覆蓋</b>
          </p>
        </div>

        <div
          style="font-size:18px;width:952px;display:flex;justify-content:space-around;margin:100px auto;"
        >
          <p
            style="width:220px;"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通過同一個平臺既向政府部門提供監管服務，又能夠滿足企業日常生產經營所需的功能需求，通過功能模組的不同配置，服務不同的角色物件。</p>
          <p
            style="width:220px;"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;利用電子地圖和資料視覺化技術，通過一個DataV資料大屏動態展示整個平臺的企業/車輛/駕駛員即時運行情況，對安全運行及違規運行情況進行即時預警，對違規行為干預處置結果進行即時回饋。</p>
          <p
            style="width:220px;"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;利用大資料分析及AI演算法模型，對於車輛運行情況、運輸效率、安全及違規駕駛行為等各項維度形成一張資料包表，為政府監管部門和企業管理者決策提供資料服務。</p>
          <p
            style="width:220px;"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相同的設備安裝標準、相同的行車安全考核標準、相同的作業規範考核標準，採用紅黃綠碼管理。</p>
        </div>
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
    },
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
  background: url(../assets/img/2-1.png) no-repeat;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  transition: all 2s;
}

#a:hover {
 transform: scale(1.1);
}
#b {
  background: #fff;
  width: 100%;
  height: 2041px;
  line-height: 35px;
  margin-top: 30px;
}
</style>