<template>
    <div>
          <div id="a"  @click="jumpRouter('/program')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">易泊停車誘導及預約</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >結合人工智慧及大數據 創新的停車場智慧管理及商業模式</p>
    </div>


     <div id="b" >
            <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
            <div style="margin-top:-100px;">
            <p style="font-size:24px;width:400px;margin:0 auto;margin-top:100px;"><b>創新的智能停車O2O商業模式</b></p>
            <p style="width:656px;margin:0 auto;font-size:16px;line-height:30px;margin-top:10px;">
                       &nbsp; &nbsp;  &nbsp; &nbsp;在社會經濟飛速發展的今天，城市居民的生活水準不斷提高，城市商業綜合體佈局及其內在演變規律是影響城市空間結構的重要推動力之一，也關係到城市商貿業繁榮程度和可持續發展能力，商業作為第三產業的重要組成部分，是影響城市空間形態的重要因素之一，面對消費者自駕車進商業中心購物，商業中心如何實現對消費者在商場內車輛進行快速停車呢？易泊停車可實現綠色、環保、好停車的智能停車優勢，結合人工智慧及大數據創新的停車場智慧管理及商業模式，能有效解決商業中心停車難、找車煩等問題。
            </p>

             <p style="font-size:20px;width:200px;margin:0 auto;margin-top:30px;"><b>(一)系統概述</b></p>

             <p style="width:656px;margin:0 auto;font-size:16px;line-height:30px;margin-top:10px;">    &nbsp; &nbsp;  &nbsp; &nbsp; 針對商業綜合體消費者停車需求，易泊停車提出了商業中心智能停車場系統的解決方案，以精準車位查詢、使用預約機制、全程車位導航、無須排隊付款、快速尋車離場等優勢。提高資源利用率，為車主和管理方都能帶來不一樣的體驗！</p>


              <p style="font-size:20px;width:600px;margin:0 auto;margin-top:30px;"><b>（二）基於WIFI/NB-IoT物聯網組合智能技術架構 （室內室外）</b></p>
    
              <p style="width:656px;margin:0 auto;font-size:16px;line-height:30px;margin-top:10px;"> &nbsp; &nbsp;  &nbsp; &nbsp;針對商業綜合體消費者停車需求，易泊停車提出了商業中心智能停車場系統的解決方案，以精準車位查詢、使用預約機制、全程車位導航、無須排隊付款、快速尋車離場等優勢。提高資源利用率，為車主和管理方都能帶來不一樣的體驗！</p>
    
    
              <img src="@/assets/img/2-2-2-1.png" style="width:823px;margin:0 auto;margin-top:20px;" />



              <div style="border:6px solid #000096;width:960px;height:284px;margin:0 auto;margin-top:20px;">
                   <div style="display:flex;justify-content:space-around;font-size:20px;color:#000096;">
                     <p style="width:160px;text-align:center;"><b>(三)系統功能</b></p>
                      <div style="border-right:6px solid #000096"></div>
                     <p><b>（四）易泊方案提供 5 S</b></p>
                      <div style="border-right:6px solid #000096"></div>
                     <p><b>（五）易泊停車的優勢</b></p>
                   </div>
                    <div style="border-top:6px solid #000096"></div>
                   <div style="display:flex;">
                    <div>
                       <ul style="width:267px;margin:0 auto;text-align:center;height:220px;font-size:16px;line-height:30px;margin-top:20px;">
                         <li>1.車位狀況顯示功能</li>
                         <li>2.車位尋找導航功能</li>
                         <li>3.特殊車位服務功能</li>
                         <li>4.離場反向尋車功能</li>
                         <li>5.室内导航技术功能</li>
                         <li>6.巨觀/微觀的停車畫面協助</li>
                       </ul>
                    </div>
                    <div style="border-right:6px solid #000096"></div>
                    <div>
                         <ul style="width:361px;margin:0 auto;text-align:left;height:220px;font-size:16px;line-height:30px;margin-top:20px;">
                         <li>1.Speed：快速建置方法，一夜之間完成室
                      內外停<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;車場改裝，安装；</li>
                         <li>2.Smart：環保且智能的硬體設備；</li>
                         <li>3.Service：提供智能設備以及系統的完全方
                      案；</li>
                         <li>4.Small：最小建置及維護成本；</li>
                         <li>5.Superior：多層次的智能停車商圈服務。</li>
                         
                       </ul>
                    </div>
                     <div style="border-right:6px solid #000096"></div>
                    <div>
                        
                    </div>
                         <ul style="width:196px;margin:0 auto;text-align:center;height:220px;font-size:16px;line-height:30px;margin-top:20px;">
                         <li>1.精準車位訊息；</li>
                         <li>2.使用預約機制；</li>
                         <li>3.全程車位導航；</li>
                         <li>4.無須排隊付款；</li>
                         <li>5.快速尋車離場。</li>
                       </ul>
                    </div>
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
  background: url(../assets/img/2-2.png) no-repeat;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  transition: all 2s;
}

#a:hover {
  transform: scale(1.1);
}

#b{
  width: 100%;
  height: 1440px;
}
</style>