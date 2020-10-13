<template>
<div style="width:100%;">
  

        <div class="shutter">
      <div class="shutter-img" >
        <a href="#" ><img src="@/assets/img/banner1.jpg" alt="#"></a>
        <a href="#" ><img src="@/assets/img/banner2.jpg" alt="#"></a>
        <a href="#" ><img src="@/assets/img/banner3.jpg" alt="#"></a>
        <!-- <a href="#" ><img src="@/assets/img/banner4.jpg" alt="#"></a> -->
      </div>
      <ul class="shutter-btn">
        <li class="prev"></li>
        <li class="next"></li>
      </ul>

      </div>
      
     
     <div id="a">

           <div style="width:1741px;margin:100px auto">
                
                <div style="width:700px;height:500px;background:#000096;position:relative;margin-top:39px;">
                    <div style="display:flex;position:relative;top:113px;margin-left:100px;">
                    <img src="@/assets/img/1-1.png" style="width:74px;height:80px;positon:relative;margin-left:-40px;margin-top:-60px;" />
                    <p style="font-size:28px;color:#fff;width:600px;">藍牙5.2的三大特性</p>
                    <img src="@/assets/img/1-3.png" style="position:absolute;margin-left:530px;top:-30px;" />
                    </div>
                    <p style="color:#fff;font-size:20px;width:439px;line-height:32px;position:relative;top:140px;margin-left:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的設計是為了增強定位服務，以前只有基於信號強度的技術已經與接收信號強度指示(RSSI)一起使用。主要場景包括室內導航、室內定位（精準到釐米級）、颱風範圍定位等。主要用於商場、地形複雜的停車場、會展中心等地方，可快速進行室內導航及室內定位。</p>
                </div>

              <div>
                <div>
                  <div @click="isShow1 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:800px;margin-top:-460px;box-shadow: #ccc 5px 5px 5px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">一</span><br />
                      增強型ATT協議<br />
                      EnhancedAttributeProtocol
                      </p>
                  </div>
                  <div @click="isShow2 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:1120px;margin-top:-200px;box-shadow: #ccc  5px 5px 5px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">二</span><br />
                     LE功耗控制<br />
                     LEPowerControl
                      </p>
                  </div>
                  <div @click="isShow3 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:1440px;margin-top:-200px;box-shadow: #ccc 5px  5px 5px;">
                     <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">三</span><br />
                     LE同步信道<br />
                      LEIsochronousChannels
                      </p>
                  </div>
                </div>

                <div>
                  <img  src="@/assets/img/1-2.png" style="z-index:-1;position:relative;margin-top:0px;margin-left:910px;" />
                   <img  src="@/assets/img/1-2.png" style="z-index:-1;position:relative;margin-top:-63px;margin-left:1230px;" />
                    <img  src="@/assets/img/1-2.png" style="z-index:-1;position:relative;margin-top:-62px;margin-left:1550px;" />
                </div>

                <div style="position:relative;margin-top:-900px;">
                   <div v-show="isShow1" style="width:300px;height:300px;background:#cccccc;position:absolute;margin-left:-10px;top:900px;margin-left:800px;opacity:50%;box-shadow: #ccc 5px 5px 5px 5px;">
                      
                   </div>

                   <p v-show="isShow1" style="color:#000096;font-size:16px;position:absolute;margin-top:909px;margin-left:838px;width:231px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙5.2中對ATT協議進行了加強，簡稱為EATT。EATT修改了順序事務模型，允許堆棧處理並發事務，並且新增的流量控制提升了EATT的穩定性；</p>
                   
                  <div v-show="isShow2" style="width:300px;height:300px;background:#cccccc;position:absolute;top:900px;margin-left:1120px;opacity:50%;box-shadow: #ccc 5px 5px 5px 5px;">
                    
                  </div>
                   <p v-show="isShow2" style="color:#000096;font-size:16px;position:absolute;margin-top:909px;margin-left:1158px;width:231px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙BR/EDR包括電源控制功能。藍牙5.2定義了BLE的雙向功率控制，可以用於實現多種應用場景，有助於在保持連接的情況下更好的降低功耗並提高設備的穩定性和可靠性。</p>
                  <div v-show="isShow3" style="width:300px;height:300px;background:#cccccc;position:absolute;top:900px;margin-left:1440px;opacity:50%;box-shadow: #ccc 5px 5px 5px 5px;">
                     
                  </div>
                   <p v-show="isShow3" style="color:#000096;font-size:16px;position:absolute;margin-top:909px;margin-left:1488px;width:231px;line-height:30px;word-break: break-word;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙5.2為了基於低功耗實現下壹代BluetoothAudio而定義了LE同步信道，包括連接模式下的同步音頻流傳輸信道以及廣播模式下的同步音頻流傳輸信道。為了實現LE同步信道，在BLEController中定義了壹個新的通訊協議層——IsochronousAdaptationLayer（ISOAL，同步適配層）。</p>

                    


                </div>
              </div>

           </div>


     </div>


      <div style="height:713px;backgroud:#fff;width:1920px;margin:0 auto;">
             <!-- <img src="@/assets/img/1-4.png" style="position:relative;margin-top:300px;z-index:-1;" /> -->
                
                <img src="@/assets/img/1-7.png" style="position:relative;margin-top:300px;" />
                <p style="font-size:28px;color:#000096;positon:relative;margin-top:-150px;margin-left:140px;">Wi-Fi 6（原稱：802.11.ax）</p>

                <p style="width:629px;font-size:18px;color:#000096;margin-left:140px;line-height:30px;margin-top:10px;">  即第六代無線網路技術，是Wi-Fi標準的名稱。是Wi-Fi聯盟創建於IEEE 802.11標準的無線局域網科技Wi-Fi 6主要使用了OFDMA、MU-MIMO等科技，
                  MU-MIMO（多用戶多入多出）科技允許路由器同時與多個設備通信。
                  MU-MIMO允許路由器一次與四個設備通信，Wi-Fi 6將允許與多達8個設備通信，最高速率可達9.6Gbps。其中主要特性包括超遠距離覆蓋、
                   射頻靈活可切、下行多用戶-多入多出科技（MU-MIMO）、萬兆接入、高密加速科技、
                  高規格防護、有線無線雙重安全保障、自動射頻調優、自動應用識別、雲管理等。  
                  </p>
                
                <div id="e" @mouseenter="change1()" @mouseleave="change2()"> 
                     <p id="f"><b>超遠距離覆蓋</b></p>
                     <p id="g">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;業界獨家2.4GHz支持8T8R，提升發射效能，新增接收增益，在室外需要廣覆蓋的場景下，帶來40%覆蓋距離提升，節約客戶投資。</p>
                   <img :src="path1" id="h"/>
                </div>

                 <div id="i"  @mouseenter="change3()" @mouseleave="change4()"> 
                     <p id="j"><b>射頻靈活可切</b></p>
                     <p id="k"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可在雙射頻/三射頻/雙射頻+獨立雙頻掃描三種模式之間靈活切換。</p>
                   <img :src="path2" id="l"/>
                </div>

                 <div id="m" @mouseenter="change5()" @mouseleave="change6()"> 
                     <p id="n"><b>下行多用戶-多入多出科技（MU-MIMO）</b></p>
                     <p id="o"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  支持MU-MIMO科技，最多支持16條空間流，通過DL/UL MU-MIMO科技可實現AP同一時刻向多個終端發送數據，無線頻譜資源利用率成倍提升，提高了接入用戶數和頻寬，提升了高密接入場景下的用戶體驗。</p>
                   <img :src="path3" id="p"/>
                </div>


                 <div id="q" @mouseenter="change7()" @mouseleave="change8()"> 
                     <p id="r"><b>萬兆接入</b></p>
                     <p id="s"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 支持160MHz的頻寬，頻寬的提升帶來了可用數據子載波的新增，擴展了傳輸通道；另外使用1024QAM調製、MU-MIMO等科技使得5G頻段速率可達9.6Gbps，整機速率達10.75Gbps。</p>
                   <img :src="path4" id="t"/>
                </div>

               

      </div>



      <div style="height:659px;background:#000096;position:relative;margin-bottom:241px;z-index:-1;">
            
      </div>

     
       <img  src="@/assets/img/1-10.png" width="1441px" height="761px" style="position:relative;margin:0 auto;margin-top:-800px;margin-bottom:100px;"/>
      
         <div style="font-size:100px;color:#000096;position:absolute;margin-top:-850px;margin-left:590px;">⌜</div>
          <div style="font-size:40px;color:#000096;position:absolute;margin-top:-780px;margin-left:640px;"><b>NB-loT网络</b></div>
           <div style="font-size:100px;color:#000096;position:absolute;margin-top:-805px;margin-left:830px;">⌟</div>

           <div>
              <img src="@/assets/img/1-15.png" style="position:absolute;margin-top:-540px;margin-left:640px;animation-iteration-count: infinite;animation-duration: 4s;" class="animate__animated animate__shakeY"/>
              <div style="float:right;font-size:30px;position:absolute;margin-left:980px;margin-top:-670px;line-height:45px;color:#000096;">
                <p style="width:954px;" id="ba">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB-IoT基於移動通信的蜂窩網絡技術，是專門為物聯網設計的射頻技術、是物聯網基礎網絡的重要分支與構成部分， 具有廣覆蓋、大連接、低功耗、低成本的優勢。</p>
                <p style="width:954px;" id="bb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB-IoT克服了傳統物聯網科技碎片化、局部應用、難以規模應用的缺點，又解決了傳統科技用於物聯網功耗大、成本高、覆蓋效能不夠的問題，逐漸成為物聯網主流科技。定位服務是物聯網諸多業務的基礎需求，定位需求無處不在，基於位置信息衍生出範圍覆蓋（8號臺風期間可設置覆蓋範圍，可為澳門市民提高出行安全，保障生命及財產安全）、智慧停車（車主出行可提前預約車位，根據APP可導航到內部停車場路線規劃，同時在復雜的停車場車主能夠精準找車並規劃+路線）等。</p>
              </div>
           </div>
      
</div>

  
</template>

<script >
import '@/assets/js/shutter.js'
import '@/assets/js/velocity.js'
 
export default {
	data() {
		return {
      isShow1: true,
      isShow2: false,
      isShow3: false,

      path1: require("@/assets/img/1-5.png"),
      path2: require("@/assets/img/1-6.png"),
      path3: require("@/assets/img/1-8.png"),
      path4: require("@/assets/img/1-11.png"),

		}
  },
  methods:{
     change1() {
         this.path1 =  require("@/assets/img/1-12.png")
     },
      change2() {
         this.path1 =  require("@/assets/img/1-5.png")
     },
     change3() {
         this.path2 =  require("@/assets/img/1-13.png")
     },
      change4() {
         this.path2 =  require("@/assets/img/1-6.png")
     },
      change5() {
         this.path3 =  require("@/assets/img/1-14.png")
     },
      change6() {
         this.path3 =  require("@/assets/img/1-8.png")
     },
     change7() {
         this.path4 =  require("@/assets/img/1-9.png")
     },
      change8() {
         this.path4 =  require("@/assets/img/1-11.png")
     },
  },
	mounted() {
	      $(function () {
  $('.shutter').shutter({
	shutterW: 100+'%', // 容器宽度
	shutterH: 1215, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 3000, // 自动播放时间
	curDisplay: 3, // 当前显示页
	fullPage: true // 是否全屏展示
  });
});

  },
 activated :{
    create(){
       location.reload();

    }
  }
  
}
</script>


<style scoped>
@import '../assets/css/shutter.css';

@keyframes Axis1 {
  0% {   opacity: 0;} 

  100%{  opacity: 1;}

}

#a{
   background:url(../assets/img/footer.png) no-repeat center ;
     width:100%;
     height:808px;
    background-size:cover;
    overflow: hidden;
    margin-top:0px;
}

#d{
 
  background:url(../assets/img/1-10.png) ;
  /* background-size: 1441px 661px; */
  /* position: relative;
  margin-top: 200px;
  margin-left: 110px; */

}

#e{
  width:300px;height:400px;border:4px solid #000096;position:relative;margin-left:960px;margin-top:-540px;background:#fff;
}

#e:hover{
  background: #000096;
}
#e:hover p{
  color: #fff;
}
#f{
  font-size:20px;color:#000096;text-align:center;position:relative;margin-top:47px;
}

#g{
  font-size:18px;color:#000096;text-align:left;;width:258px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}

#h{
  position:relative;margin-top:81px;margin-left:-2px;
}



#i{
  width:300px;height:400px;border:4px solid #000096;position:relative;margin-left:1130px;margin-top:-200px;background:#fff;
}
#i:hover{
  background: #000096;
}
#i:hover p{
  color: #fff;
}
#j{
  font-size:20px;color:#000096;text-align:center;position:relative;margin-top:47px;
}
#k{
  font-size:18px;color:#000096;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#l{
  position:relative;margin-top:142px;margin-left:-1px;
}




#m{
  width:300px;height:400px;border:4px solid #000096;position:relative;margin-left:1290px;margin-top:-200px;background:#fff;
}
#m:hover{
  background: #000096;
}
#m:hover p{
  color: #fff;
}
#n{
  font-size:20px;color:#000096;text-align:center;position:relative;margin-top:47px;
}
#o{
  font-size:18px;color:#000096;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#p{
  position:relative;margin-top:-36px;margin-left:215px;
}



#q{
  width:300px;height:400px;border:4px solid #000096;position:relative;margin-left:1586px;margin-top:-600px;background:#fff;
}
#q:hover{
  background: #000096;
}
#q:hover p{
  color: #fff;
}
#r{
  font-size:20px;color:#000096;text-align:center;position:relative;margin-top:47px;
}
#s{
  font-size:18px;color:#000096;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#t{
  position:relative;margin-top:22px;margin-left:215px;
}

#ba{
      animation-name:  Axis1 ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;

 animation-fill-mode:forwards;
}
#bb{
      animation-name:  Axis1; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;

 animation-fill-mode:forwards;
 animation-delay: 3s;
 opacity: 0;
}

</style>