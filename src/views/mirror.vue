<template>
  <div>
    <div class="a">
      <div style="margin:0 15%"  >
        <img src="@/assets/img/2-3-7.png" style="position:relative;margin-left:388px;top:161px;" />
         <div style="position:relative;left:960px;color:#fff;top:-200px;">
         <p style="font-size:40px;">電子後視鏡</p>
         <p style="font-size:20px;margin-top:20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;隨著汽車智能化的不斷推進，<br/>
           人們對駕車視野越來越高的追求，<br/>
            以及大型車輛由於自身的長度和高度，<br/>
            駕駛位存在視野盲區，<br/>
            有數據顯示，<br/>
            30%以上交通事故與盲區有關。<br/>
            安裝電子後視鏡系統成為近兩年不斷被提及的商用車盲區解決方案。
            </p>
         </div>   
      </div>     
    </div>

    <div class="f">
      <img src="@/assets/img/2-3-2.png" />
      <div class="g" style="margin:0 15%">
        <span id="h">
          全景電子後視鏡實現的功能
          <br />
        </span>
        <span id="i">
          1.視野無盲區:在原物理後視鏡基礎上，消除車頭A柱盲區，車身左右視野更加開闊。
          <br />2.夜晚看得見:星光級攝像頭具有寬動態及防眩光夜視功能，最低可視光照度0.1LUX，即使在夜間也能看見人和物體。
          <br />3.雨天看得清:攝像頭具有防凝結功能，即使在雨天，顯示幕上影像依然清晰。
          <br />4.光感功能 顯示柔和不刺眼:融盛電子後視鏡伴有人性化光感設計，螢幕顯示亮度融入周圍環境，不刺激駕駛員視覺。
          <br />
        </span>
        <img src="@/assets/img/2-3-8.png" id="j" />
      </div>
    </div>

    <div class="k">
      <img src="@/assets/img/2-3-3.png" />
      <div class="l"  style="margin:0 15%">
        <span id="m">安裝全景電子後視鏡的優勢</span>
        <div>
          <div id="p" @mouseenter="show1 = !show1" @mouseleave="show1 = !show1">
            <div id="n">
              <div id="o">
                    
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）
                  <br />技術水準超前
                </span>
              </div>
            </div>
          </div>

          <div id="q" @mouseenter="show2 = !show2" @mouseleave="show2 = !show2">
            <div id="n">
              <div id="o">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）
                  <br />最大限度提高
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;安全性的
                  <br />&nbsp;&nbsp;&nbsp;&nbsp;設計理念
                </span>
              </div>
            </div>
          </div>

          <div id="r" @mouseenter="show3 = !show3" @mouseleave="show3 = !show3">
            <div id="n">
              <div id="o">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）
                  <br />&nbsp;&nbsp;貨真價實的
                  <br />&nbsp;&nbsp;元器件投入
                </span>
              </div>
            </div>
          </div>

          <div id="s" @mouseenter="show4 = !show4" @mouseleave="show4 = !show4">
            <div id="n">
              <div id="o">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;（四）
                  <br />超高的性價比
                </span>
              </div>
            </div>
          </div>
        </div>

        <p id="t" v-show="show1" >
           <span style="position:relative;margin-left:230px;">（一）技術水準超前</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;視頻成像採用3D流媒體數字技術以及車規級晶片，採集、處理、成像流暢；
         給駕駛員提供強大的既視感，車距真實,顯示準確，並可配合雷達聲像報警。
        </p>
         <p id="t" v-show="show2">
           <span style="position:relative;margin-left:180px;">（二）最大限度提高安全性的設計理念</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;圖像處理模組與顯示幕幕分體設計，大大減少主顯示幕厚度，美觀大方，便於安裝，最大限度減少佔用駕駛員視野範圍，提高安全性。同時分體設計便於螢幕散熱，延長使用壽命，並且方便設備維護或更換。
        </p>
        <p id="t" v-show="show3">
           <span style="position:relative;margin-left:200px;">（三）貨真價實的元器件投入</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;6路攝像頭均採用車規級8玻魚眼鏡頭，進光量高的同時配備強光抑止、190度大廣角兼備扭曲修正，夜間、陰雨、濃霧依舊清晰；並採用同軸無損數字傳輸線，信號穩定抗干擾，傳輸速度相當於200M寬頻。
        </p>
        <p id="t" v-show="show4">
           <span style="position:relative;margin-left:230px;">（四）超高的性價比</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;電子後視鏡採用雙12.3寸液晶屏設計，其功能包含了常規電子後視鏡圖像內容且兼備了360環視系統的功能，可完全消滅車輛盲區，配備強大售後服務和超長質保，同時用戶維護入口集中。
        </p>


      </div>
    </div>

    <div class="u">
      <img src="@/assets/img/2-3-4.png" />
      <div class="v"  style="margin:0 15%">
        <span id="w">澳門某车辆电子后视镜系统显示方案展示</span>

           <div class="trade-content" style="position:relative;margin-left:160px;">
        
            <div class="trade-black">
                <div class="trade-box">
                    <div class="trade-box-list" >
                        <div class="trade-box-item item01">
                            <a href="#">
                                <div class="item-logo">
                                    <!-- <img src="@/assets/img/img001.svg" alt=""> -->
                                </div>
                                <div class="item-title">1、当发动车辆时</div>
                                <div class="item-text">
                                    <p>系统自动360°环视车身一周，确保行驶起步安全</p>
                                   
                                </div>
                            </a>
                        </div>
                        <div class="trade-box-item item02">
                            <a href="#">
                                <div class="item-logo">
                                    <!-- <img src="@/assets/img/img002.svg" alt=""> -->
                                </div>
                                <div class="item-title">2.当车速0~15km/h<br/><span style="font-size:16px;">(车速条件可自定义)</span></div>
                                <div class="item-text">
                                    <p>系统自动切换显示5分屏模式，融合前向雷达感测讯息</p>
                                    
                                </div>
                            </a>
                        </div>
                        <div class="trade-box-item item03">
                            <a href="#">
                                <div class="item-logo">
                                    <!-- <img src="@/assets/img/img003.svg" alt=""> -->
                                </div>
                                <div class="item-title">3.当车速15~25km/h<br/><span style="font-size:16px;">(车速条件可自定义)</span></div>
                                <div class="item-text">
                                    <p>系统自动切换至全景+电子后视镜影像,更广视野范围,车身周边及后方影像一览无余.</p>
                                  
                                </div>
                            </a>
                        </div>
                        <div class="trade-box-item item04">
                            <a href="#">
                                <div class="item-logo">
                                    <!-- <img src="@/assets/img/img004.svg" alt=""> -->
                                </div>
                                <div class="item-title">4.当车速≥25km/h<br/><span style="font-size:16px;">(车速条件可自定义)</span></div>
                                <div class="item-text">
                                    <p>系统自动切换至全屏电子后视镜影像,更智慧化的画面</p>
                                    
                                </div>
                            </a>
                        </div>
                        <div class="trade-box-item item05">
                            <a href="#">
                                <div class="item-logo">
                                    <!-- <img src="@/assets/img/img005.svg" alt=""> -->
                                </div>
                                <div class="item-title">5.倒車時<br/><span style="font-size:16px;">(车速条件可自定义)</span></div>
                                <div class="item-text">
                                    <p>系統自動切換右屏倒車影像，融合倒車雷達感測訊息，
                                        圖像與聲音直觀組合警示。不一樣的倒車體驗與全方
                                        位的圖像監測 。
                                        </p>
                                   
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>


        <!-- <div style="position:relative;left:440px;top:280px;width:1050px">
          <el-carousel :interval="4000" type="card" height="300px" autoplay="false" >
            <el-carousel-item v-for="item in 5" :key="item" >
              
            </el-carousel-item>
          </el-carousel>
        </div> -->
      </div>
    </div>

    <div class="y">
      <img src="@/assets/img/2-3-5.png" />
      <div class="z"  style="margin:0 15%">
        <span id="aa">融合雷达预警实例</span>
        <img src="@/assets/img/2-3-9.png" id="ab" />

        <div id="ac">
          <span style="color:#ff0000;font-size:26px;">
            0~0.8m红色盲区警示(行人)
            <br />
          </span>
          <span style="color:#ffa500;font-size:26px;">
            0.8~1.2m橙色盲区警示(行人)
            <br />
          </span>
          <span style="color:#008000;font-size:26px;">
            1.2~1.5m绿色接近警示(行人)
            <br />
          </span>
          <span style="color:#ffff00;font-size:26px;">
            0.8~1.2m黄色警示(侧方障碍物)
            <br />
          </span>
          <span style="color:#fff;position:relative;top:55px;font-size:20px;">
            多传感器融合，图像、色彩、声音提醒，
            <br />便于驾驶者感知，消除盲区的同时警示安全驻车及出行。
          </span>
        </div>
      </div>
    </div>

    <div class="ad">
      <img src="@/assets/img/2-3-6.png" />
      <div class="ae"  style="margin:0 15%">
        <img src="@/assets/img/2-3-10.png" id="af" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        show1:false,
        show2:false,
        show3:false,
        show4:false,
    }
   }
  }
</script>


<style scoped>
@import "../assets/css/style1.css";

*{
  margin: 0;
  padding: 0;
}

.a {
  background: url(../assets/img/2-3-1.png) no-repeat center;
  height: 881px;
  width: 100%;
  background-size:cover;
  overflow: hidden;
}



.f {
  position: relative;
}
.f img {
  width: 100%;
  height: 901px;
}
.g {
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
}
#h {
  font-size: 30px;
  color: #fff;
  position: relative;
  left: 779px;
  top: 156px;
}
#i {
  font-size: 20px;
  color: #fff;
  position: relative;
  left: 402px;
  top: 203px;
  line-height: 35px;
  max-width: 1033px;
}

#j {
  position: relative;
  left: 350px;
  top: 238px;
  max-width: 1200px;
  height: 306px;
}

.k {
  position: relative;
}
.k img {
  width: 100%;
  height: 901px;
}
.l {
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
}
#m {
  color: #fff;
  font-size: 24px;
  position: relative;
  left: 791px;
  top: 100px;
}
#n {
  border-radius: 115px;
  width: 230px;
  height: 230px;
  border: 2px dashed #053085;
}
#n :hover {
       background: #053085;
      
}
#n :hover span{
  color: #fff;
}


#o {
  width: 181px;
  height: 181px;
  background-color: #fff;
  border-radius: 90.5px;
  position: relative;
  left: 25px;
  top: 24px;
}

#o span {
  color: #000;
  font-size: 20px;
  position: relative;
  left: 30px;
  top: 44px;
}

/* #o span:hover{
 
  color: #fff;
} */


#p {
  position: absolute;
  left: 389px;
  top: 189px;
  display: inline-block;
}



#q {
  position: absolute;
  left: 682px;
  top: 189px;
  display: inline-block;
}

#r {
  position: absolute;
  left: 986px;
  top: 189px;
  display: inline-block;
}

#s {
  position: absolute;
  left: 1290px;
  top: 189px;
  display: inline-block;
}

#t {
  font-size: 20px;
  color: #fff;
  position: relative;
  left: 623px;
  top: 478px;
  line-height: 34px;
  max-width:675px;
}

.u {
  position: relative;
}
.u img {
  width: 100%;
  height: 901px;
}
.v {
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
}
#w {
  font-size: 30px;
  color: #fff;
  position: relative;
  left: 691px;
  top: 161px;
}

.y {
  position: relative;
}
.y img {
  width: 100%;
  height: 901px;
}
.z {
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
}
#aa {
  font-size: 30px;
  color: #fff;
  position: relative;
  left: 841px;
  top: 99px;
}

#ab {
  max-width: 547px;
  height: 547px;
  position: relative;
  left: 380px;
  top: 179px;
}
#ac {
  position: absolute;
  left: 1068px;
  top: 253px;
  width: 500px;
  line-height: 47px;
}

.ad {
  position: relative;
}
.ad img {
  width: 100%;
  height: 901px;
}
.ae {
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
}
#af {
  width: 1101px;
  height: 777px;
  position: absolute;
  left: 415px;
  top: 46px;
}


 
  
  /* .el-carousel__item:nth-child(1) {
    background:url(../assets/img/1.png) repeat;
    
  }
  
  .el-carousel__item:nth-child(2) {
     background:url(../assets/img/2.png) repeat;
  }
  .el-carousel__item:nth-child(3) {
    background:url(../assets/img/1.png) repeat;
    
  }
  
  .el-carousel__item:nth-child(4) {
      background:url(../assets/img/1.png) repeat;
  }

.el-carousel__item:nth-child(5) {
    background:url(../assets/img/1.png) repeat;
    
    
  }
   */





</style>