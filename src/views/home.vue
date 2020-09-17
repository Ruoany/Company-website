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
                    <p style="color:#fff;font-size:20px;width:439px;line-height:32px;position:relative;top:140px;margin-left:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的设计是为了增强定位服务，以前只有基于信号强度的技术已经与接收信号强度指示(RSSI)一起使用。主要場景包括室內導航、室內定位（精準到釐米級）、颱風範圍定位等。主要用於商場、地形複雜的停車場、會展中心等地方，可快速進行室內導航及室內定位。</p>
                </div>

              <div>
                <div>
                  <div @click="isShow1 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:800px;margin-top:-460px;box-shadow: #ccc 5px 5px 5px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">壹</span><br />
                      增強型ATT協議<br />
                      EnhancedAttributeProtocol
                      </p>
                  </div>
                  <div @click="isShow2 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:1120px;margin-top:-200px;box-shadow: #ccc  5px 5px 5px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">貳</span><br />
                     LE功耗控制<br />
                     LEPowerControl
                      </p>
                  </div>
                  <div @click="isShow3 = true" style="width:300px;height:200px;background:#000096;position:relative;margin-left:1440px;margin-top:-200px;box-shadow: #ccc 5px  5px 5px;">
                     <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">叁</span><br />
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
                  <div v-show="isShow3" style="width:300px;height:300px;background:#cccccc;position:absolute;top:900px;margin-left:1450px;opacity:50%;box-shadow: #ccc 5px 5px 5px 5px;">
                     
                  </div>
                   <p v-show="isShow3" style="color:#000096;font-size:16px;position:absolute;margin-top:909px;margin-left:1488px;width:231px;line-height:30px;word-break: break-word;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙5.2為了基於低功耗實現下壹代BluetoothAudio而定義了LE同步信道，包括連接模式下的同步音頻流傳輸信道以及廣播模式下的同步音頻流傳輸信道。為了實現LE同步信道，在BLEController中定義了壹個新的通訊協議層——IsochronousAdaptationLayer（ISOAL，同步適配層）。</p>




                </div>
              </div>

           </div>


     </div>



</div>

  
</template>

<script>
import '@/assets/js/shutter.js'
import '@/assets/js/velocity.js'
 
export default {
	data() {
		return {
      isShow1: false,
      isShow2: false,
      isShow3: false

		}
	},
	mounted() {
	      $(function () {
  $('.shutter').shutter({
	shutterW: 100+'%', // 容器宽度
	shutterH: 1206, // 容器高度
	isAutoPlay: true, // 是否自动播放
	playInterval: 3000, // 自动播放时间
	curDisplay: 3, // 当前显示页
	fullPage: false // 是否全屏展示
  });
});

	}
  
}
</script>


<style scoped>
@import '../assets/css/shutter.css';


#a{
   background:url(../assets/img/footer.png) no-repeat center ;
     width:100%;
     height:808px;
    background-size:cover;
    overflow: hidden;
    margin-top:0px;
}

</style>