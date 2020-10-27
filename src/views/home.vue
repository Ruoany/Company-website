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
                
                <div style="width:700px;height:590px;background:#007bff;position:absolute;margin-top:-200px;">
                    <div style="display:flex;position:relative;top:113px;margin-left:100px;">
                    <img src="@/assets/img/1-1.png" style="width:74px;height:80px;positon:relative;margin-left:-40px;margin-top:-55px;" />
                    <p style="font-size:28px;color:#fff;width:600px;position:relaitve;margin-left:-30px;">藍牙5.2</p>
                    <p style="font-size:28px;color:#fff;position:relative;margin-left:-160px;margin-top:-60px;">三大特性</p>
                    <img src="@/assets/img/1-3.png" style="position:absolute;margin-left:570px;top:-73px;width:60px;height:60px;" />
                    </div>
                    <p style="color:#fff;font-size:20px;width:460px;line-height:32px;position:relative;top:130px;margin-left:100px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;它的設計是為了增強定位服務，以前只有基於信號強度的技術已經與接收信號強度指示(RSSI)一起使用。主要場景包括室內導航、室內定位（精準到釐米級）、颱風範圍定位等。主要用於商場、地形複雜的停車場、會展中心等地方，可快速進行室內導航及室內定位。</p>
                   <p style="font-size:28px;color:#fff;position:relative;margin-top:290px;margin-left:30px;">应用场景</p>
                   <img src="@/assets/img/1-17.png" style="position:absolute;margin-left:40px;top:563px;width:60px;height:60px;" />
               
                 
                </div>

              <div>
                <div>
                  <div @click="isShow1 = true" style="width:300px;height:200px;background:#007bff;position:absolute;margin-left:800px;margin-top:-200px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">一</span><br />
                      增強型ATT協議<br />
                      EnhancedAttributeProtocol
                      </p>
                  </div>
                  <div @click="isShow2 = true" style="width:300px;height:200px;background:#007bff;position:absolute;margin-left:1120px;margin-top:-200px;">
                    <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">二</span><br />
                     LE功耗控制<br />
                     LEPowerControl
                      </p>
                  </div>
                  <div @click="isShow3 = true" style="width:300px;height:200px;background:#007bff;position:absolute;margin-left:1440px;margin-top:-200px;">
                     <p style="color:#fff;font-size:20px;line-height:42px;text-align:center;padding-top:30px;"><span style="font-size:30px">三</span><br />
                     LE同步信道<br />
                      LEIsochronousChannels
                      </p>
                  </div>
                </div>

                <div>
                  <img  src="@/assets/img/btnDownAni.gif" style="z-index:1;position:relative;top:-5px;margin-left:910px;" />
                   <img  src="@/assets/img/btnDownAni.gif" style="z-index:1;position:relative;margin-top:-93px;margin-left:1230px;" />
                    <img  src="@/assets/img/btnDownAni.gif" style="z-index:1;position:relative;margin-top:-92px;margin-left:1550px;" />
                </div>

                <div style="position:relative;margin-top:-900px;">
                   <div v-show="isShow1" style="width:300px;height:300px;background:#fff;position:absolute;margin-left:-10px;top:900px;margin-left:800px;opacity:0.7;box-shadow: rgba(0,0,0,0.46) 2px 2px 2px 2px;">
                      
                   </div>

                   <p v-show="isShow1" style="color:#333333;font-size:16px;position:absolute;margin-top:909px;margin-left:838px;width:231px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙5.2中對ATT協議進行了加強，簡稱為EATT。EATT修改了順序事務模型，允許堆棧處理並發事務，並且新增的流量控制提升了EATT的穩定性；</p>
                   
                  <div v-show="isShow2" style="width:300px;height:300px;background:#fff;position:absolute;top:900px;margin-left:1120px;opacity:0.7;box-shadow: rgba(0,0,0,0.46) 2px 2px 2px 2px;">
                    
                  </div>
                   <p v-show="isShow2" style="color:#333333;font-size:16px;position:absolute;margin-top:909px;margin-left:1158px;width:231px;line-height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;藍牙BR/EDR包括電源控制功能。藍牙5.2定義了BLE的雙向功率控制，可以用於實現多種應用場景，有助於在保持連接的情況下更好的降低功耗並提高設備的穩定性和可靠性。</p>
                  <div v-show="isShow3" style="width:300px;height:300px;background:#fff;position:absolute;top:900px;margin-left:1440px;opacity:0.7;box-shadow: rgba(0,0,0,0.46) 2px 2px 2px 2px;">
                     
                  </div>
                   <p v-show="isShow3" style="color:#333333;font-size:16px;position:absolute;margin-top:909px;margin-left:1488px;width:231px;line-height:30px;word-break: break-word;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了实现下一代BluetoothAudio而定义了LE同步信道，包括连接模式下的同步音频流传输信道以及广播模式下的同步音频流传输信道。为实现LE同步信道，在BLEController中定义了新的通讯协议层——IsochronousAdaptationLayer（ISOAL，同步适配层）。</p>

                    


                </div>
              </div>

           </div>


           <div @mouseenter="change11()" @mouseleave="change12()" style="width:120px;height:149px;">
              <div  style="width:200px;height:200px;background:#fff;position:absolute;margin-top:1260px;margin-left:440px;opacity:0.6;box-shadow:rgba(51,51,51,0.2) 0px 2px 6px 0px;">
                   
              </div>
             
                   <div v-show="isShow6">
                     <img src="@/assets/img/1-18.png" width="50px" height="50px" style="position:relative;top:1310px;left:515px;"/>
                     <p style="position:relative;font-size:16px;width:85px;margin-left:495px;margin-top:1340px;">01.音频分享</p>
                   </div>

                   <div v-show="isShow7">
                       <div style="position:absolute;bottom:-400px;left:450px;width:180px;height:180px;border:5px solid #007bff;border-top:0;">
                             <div style="border-top:5px solid #007bff;width:30px"></div>
                             <div style="border-top:5px solid #007bff;width:30px;margin-left:140px;margin-top:-5px;"></div>
                              <div style="margin-top:-10px;margin-left:45px;font-size:16px;color:#007bff"><p>01.音频分享</p></div>

                              <p style="width:130px;margin:0 auto;color:#007bff;font-size:12px;line-height:18px;margin-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如你有一首非常喜欢的音乐要分享给周围的人，不用再通过某软件分享链接，通过手机音乐直接播放音乐，让周围的人连接到你的分享频道即可。</p>
                       </div>
                   </div>
            
           </div>

          
           <div @mouseenter="change13()" @mouseleave="change14()" style="width:120px;height:149px;">
              <div  style="width:200px;height:200px;background:#fff;position:absolute;margin-top:1110px;margin-left:940px;opacity:0.6;box-shadow:rgba(51,51,51,0.2) 0px 2px 6px 0px;">
                   
              </div>

              <div v-show="isShow8">
                <img src="@/assets/img/1-19.png" width="50px" height="50px" style="position:absolute;margin-top:1160px;margin-left:1020px;"/>
                <p style="position:absolute;font-size:16px;width:85px;margin-left:1000px;margin-top:1240px;">02.音频接收</p>
              </div>

              <div v-show="isShow9">
                       <div style="position:absolute;bottom:-400px;left:950px;width:180px;height:180px;border:5px solid #007bff;border-top:0;">
                             <div style="border-top:5px solid #007bff;width:30px"></div>
                             <div style="border-top:5px solid #007bff;width:30px;margin-left:140px;margin-top:-5px;"></div>
                              <div style="margin-top:-10px;margin-left:45px;font-size:16px;color:#007bff"><p>02.音频接收</p></div>

                              <p style="width:130px;margin:0 auto;color:#007bff;font-size:12px;line-height:18px;margin-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如你有一首非常喜欢的音乐要分享给周围的人，不用再通过某软件分享链接，通过手机音乐直接播放音乐，让周围的人连接到你的分享频道即可。</p>
                       </div>
              </div>
             
           </div>


           <div @mouseenter="change15()" @mouseleave="change16()" style="width:120px;height:149px;">
              <div  style="width:200px;height:200px;background:#fff;position:absolute;margin-top:960px;margin-left:1440px;opacity:0.6;box-shadow:rgba(51,51,51,0.2) 0px 2px 6px 0px;">
                   
              </div>

              <div v-show="isShow10">
                <img src="@/assets/img/1-20.png" width="50px" height="50px" style="position:absolute;margin-top:1010px;margin-left:1520px;"/>
                <p style="position:absolute;font-size:16px;width:85px;margin-left:1500px;margin-top:1090px;">03.辅助接收</p>
              </div>

              <div v-show="isShow11">
                       <div style="position:absolute;bottom:-400px;left:1450px;width:180px;height:180px;border:5px solid #007bff;border-top:0;">
                             <div style="border-top:5px solid #007bff;width:30px"></div>
                             <div style="border-top:5px solid #007bff;width:30px;margin-left:140px;margin-top:-5px;"></div>
                              <div style="margin-top:-10px;margin-left:45px;font-size:16px;color:#007bff"><p>03.辅助接收</p></div>

                              <p style="width:130px;margin:0 auto;color:#007bff;font-size:12px;line-height:18px;margin-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如你有一首非常喜欢的音乐要分享给周围的人，不用再通过某软件分享链接，通过手机音乐直接播放音乐，让周围的人连接到你的分享频道即可。</p>
                       </div>
              </div>
             
           </div>


           <div @mouseenter="change17()" @mouseleave="change18()" style="width:120px;height:149px;">
              <div  style="width:200px;height:200px;background:#fff;position:absolute;margin-top:810px;margin-left:1940px;opacity:0.6;box-shadow:rgba(51,51,51,0.2) 0px 2px 6px 0px;">
                   
              </div>

              <div v-show="isShow12">
                <img src="@/assets/img/1-21.png" width="50px" height="50px" style="position:absolute;margin-top:870px;margin-left:2020px;"/>
                <p style="position:absolute;font-size:16px;margin-left:1980px;margin-top:940px;">04.多语言实时翻译</p>
              </div>

              <div v-show="isShow13">
                       <div style="position:absolute;bottom:-400px;left:1950px;width:180px;height:180px;border:5px solid #007bff;border-top:0;">
                             <div style="border-top:5px solid #007bff;width:10px"></div>
                             <div style="border-top:5px solid #007bff;width:10px;margin-left:160px;margin-top:-5px;"></div>
                              <div style="margin-top:-10px;margin-left:20px;font-size:16px;color:#007bff"><p>04.多语言实时翻译</p></div>

                              <p style="width:130px;margin:0 auto;color:#007bff;font-size:12px;line-height:18px;margin-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如你有一首非常喜欢的音乐要分享给周围的人，不用再通过某软件分享链接，通过手机音乐直接播放音乐，让周围的人连接到你的分享频道即可。</p>
                       </div>
              </div>
             
           </div>
        
            

     </div>


      <div id="aa">
             
      </div>

       <div style="position:relative;margin-top:-760px;margin-left:450px;">
           <img src="@/assets/img/1-7.png" style="position:absolute;margin-top:110px;margin-left:-140px;" />
                <p style="font-size:28px;color:#000000;positon:absolute;padding-top:190px;margin-left:-10px;">Wi-Fi 6（原稱：802.11.ax）</p>

                <p style="width:629px;font-size:18px;color:#000000;margin-left:-10px;line-height:30px;margin-top:10px;">  即第六代無線網路技術，是Wi-Fi標準的名稱。是Wi-Fi聯盟創建於IEEE 802.11標準的無線局域網科技Wi-Fi 6主要使用了OFDMA、MU-MIMO等科技，
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



      <div id="bc">
            
      </div>

     
       <img  src="@/assets/img/1-10.png" width="1441px" height="761px" style="position:relative;margin:0 auto;margin-top:-780px;margin-bottom:100px;"/>
      
         <div style="font-size:100px;color:#007bff;position:absolute;margin-top:-850px;margin-left:640px;">⌜</div>
          <div style="font-size:40px;color:#007bff;position:absolute;margin-top:-780px;margin-left:690px;"><b>NB-loT网络</b></div>
           <div style="font-size:100px;color:#007bff;position:absolute;margin-top:-805px;margin-left:880px;">⌟</div>

           <div>
              <img src="@/assets/img/1-15.png" style="position:absolute;margin-top:-550px;margin-left:640px;animation-iteration-count: infinite;animation-duration: 4s;" class="animate__animated animate__shakeY"/>
              <div style="float:right;font-size:30px;position:absolute;margin-left:930px;margin-top:-680px;line-height:45px;color:#000;">
                <p style="width:924px;" id="ba">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB-IoT基於移動通信的蜂窩網絡技術，是專門為物聯網設計的射頻技術、是物聯網基礎網絡的重要分支與構成部分， 具有廣覆蓋、大連接、低功耗、低成本的優勢。</p>
                <p style="width:924px;" id="bb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NB-IoT克服了傳統物聯網科技碎片化、局部應用、難以規模應用的缺點，又解決了傳統科技用於物聯網功耗大、成本高、覆蓋效能不夠的問題，逐漸成為物聯網主流科技。定位服務是物聯網諸多業務的基礎需求，定位需求無處不在，基於位置信息衍生出範圍覆蓋（8號臺風期間可設置覆蓋範圍，可為澳門市民提高出行安全，保障生命及財產安全）、智慧停車（車主出行可提前預約車位，根據APP可導航到內部停車場路線規劃，同時在復雜的停車場車主能夠精準找車並規劃+路線）等。</p>
              </div>
           </div>



          <div id="bd">
               <div>
                  <p style="font-size:30px;position:relative;top:30px;margin-left:570px;"><b>传感器</b></p>
               </div>
                  <div style="float:right;font-size:24px;display:flex;justify-content:space-around;width:500px;position:relative;margin-top:-5px;left:-1275px;">
                      <p @click="change25()">温度</p>
                      <p @click="change26()">无线温度</p>
                      <p @click="change27()">变频功率</p>
                  </div>
               <hr style="width:1200px;border:0px;border-bottom:2px solid #ccc;margin-left:570px;margin-top:45px;" />
                
              <hr v-show="show1" style="position:relative;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:820px;margin-top:-2px;z-index:2;" />
          
              <hr v-show="show2" style="position:relative;width:110px;border:0px;border-bottom:2px solid #007bff;margin-left:955px;margin-top:-2px;z-index:2;" />

              <hr v-show="show3" style="position:relative;width:110px;border:0px;border-bottom:2px solid #007bff;margin-left:1140px;margin-top:-2px;z-index:2;" />
          
              <div style="width:250px;height:300px;background:#fff;position:relaitve;margin-left:570px;margin-top:15px;z-index:-1;">
                  <div v-show="show4">
                   <div id="ca" @click="change20()">
                      <img :src="path11" width="40px" height="40px" style="position:relative;left:33px;top:29px;" />
                      <p style="font-size:20px;position:relative;left:82px;top:-5px;">室温管温传感器</p>
                   </div>
                   <div id="cb" @click="change21()">
                      <img :src="path12" width="40px" height="40px" style="position:relative;left:33px;top:29px;" />
                      <p style="font-size:20px;position:relative;left:82px;top:-5px;">排气温度传感器</p>
                   </div>
                   <div id="cc" @click="change22()">
                      <img :src="path13" width="40px" height="40px" style="position:relative;left:33px;top:29px;" />
                      <p style="font-size:20px;position:relative;left:82px;top:-5px;">模块温度传感器</p>
                   </div>
                  </div>
                   
                   <div v-show="show5">
                      <div style="height:100px;background:#fff;">
                        <img src="@/assets/img/1-30.png" width="40px" height="40px" style="position:relative;left:33px;top:29px;" />
                        <p style="font-size:20px;position:relative;left:82px;top:-5px;">无线温度</p>
                      </div>  
                       <div style="height:100px;background:#f5f5f5"></div>  
                      <div style="height:100px;background:#f5f5f5"></div>   
                   </div>

                   <div v-show="show6">
                      <div style="height:100px;background:#fff;">
                        <img src="@/assets/img/1-31.png" width="40px" height="40px" style="position:relative;left:33px;top:29px;" />
                        <p style="font-size:20px;position:relative;left:82px;top:-5px;">变频功率</p>
                      </div> 
                      <div style="height:100px;background:#f5f5f5"></div>  
                      <div style="height:100px;background:#f5f5f5"></div>  
                   </div>

              </div>

              <div style="width:950px;height:300px;background:#fff;position:relaitve;margin-left:820px;margin-top:-300px;box-shadow: rgba(0,0,0,0.46) -5px 0px 20px -5px;">
                    <div v-show="show7">
                     <span style="font-size:80px;color:#ddd;">“</span>
                     <span style="font-size:16px;position:relative;top:-30px;"><b>室温管温传感器</b></span>
                     <p style="width:664px;margin-left:40px;margin-top:-40px;line-height:26px;font-size:16px;color:#666666">室温传感器用于测量室内和室外的环境温度，管温传感器用于测量蒸发器和冷凝器的管壁温度。室温传感器和管温传感器的形状不同，但温度特性基本一致。按温度特性划分，美的使用的室温管温传感器有二种类型:1.常数B值为4100K±3%，基准电阻为25℃对应电阻10KΩ±3%。在0℃和55℃对应电阻公差约为±7%;而0℃以下及55℃以上，对于不同的供应商，电阻公差会有一定的差别。温度越高，阻值越小;温度越低，阻值越大。离25℃越远，对应电阻公差范围越大。</p>
                     <span style="font-size:80px;color:#ddd;position:relative;margin-left:660px;top:-45px;">”</span>
                     <img src="@/assets/img/1-34.gif" style="float:right;margin-top:-200px;margin-right:25px;" />
                     <p style="margin-top:-130px;margin-left:750px;">示例图片：</p>
                    </div>

                    <div v-show="show8">
                     <span style="font-size:80px;color:#ddd;">“</span>
                     <span style="font-size:16px;position:relative;top:-30px;"><b>排气温度传感器</b></span>
                     <p style="width:664px;margin-left:40px;margin-top:-40px;line-height:26px;font-size:16px;color:#666666">排气温度传感器用于测量压缩机顶部的排气温度，常数B值为3950K±3%,基准电阻为90℃对应电阻5KΩ±3%。</p>
                     <span style="font-size:80px;color:#ddd;position:relative;margin-left:660px;top:-45px;">”</span>
                     <img src="@/assets/img/1-34.gif" style="float:right;margin-top:-96px;margin-right:25px;" />
                     <p style="position:relative;top:-26px;margin-left:750px;">示例图片：</p>
                    </div>

                    <div v-show="show9">
                     <span style="font-size:80px;color:#ddd;">“</span>
                     <span style="font-size:16px;position:relative;top:-30px;"><b>模块温度传感器</b></span>
                     <p style="width:664px;margin-left:40px;margin-top:-40px;line-height:26px;font-size:16px;color:#666666">模块温度传感器用于测量变频模块(IGBT或IPM)的温度，用的感温头的型号是602F-3500F，基准电阻为25℃对应电阻6KΩ±1%。几个典型温度的对应阻值分别是:-10℃→(25.897~28.623)KΩ;0℃→(16.3248~17.7164)KΩ;50℃→(2.3262~2.5153)KΩ;90℃→<br/>(0.6671~0.7565)KΩ。
温度传感器的种类很多，经常使用的有热电阻:PT100、PT1000、Cu50、Cu100;热电偶:B、E、J、K、S等。温度传感器不但种类繁多，而且组合形式多样，应根据不同的场所选用合适的产品。
</p>
                     <span style="font-size:80px;color:#ddd;position:relative;margin-left:660px;top:-45px;">”</span>
                     <img src="@/assets/img/1-34.gif" style="float:right;margin-top:-200px;margin-right:25px;" />
                     <p style="margin-top:-130px;margin-left:750px;">示例图片：</p>
                    </div>

                     <div v-show="show10">
                     <span style="font-size:80px;color:#ddd;">“</span>
                     <span style="font-size:16px;position:relative;top:-30px;"><b>无线温度</b></span>
                     <p style="width:664px;margin-left:40px;margin-top:-40px;line-height:26px;font-size:16px;color:#666666">无线温度传感器将控制对象的温度参数变成电信号,并对接收终端发送无线信号，对系统实行检测、调节和控制。可直接安装在一般工业热电阻、热电偶的接线盒内，与现场传感元件构成一体化结构。通常和无线中继、接收终端、通信串口、电子计算机等配套使用，这样不仅节省了补偿导线和电缆，而且减少了信号传递失真和干扰，从而获的了高精度的测量结果。
无线温度传感器广泛应用于化工、冶金、石油、电力、水处理、制药、食品等自动化行业。例如:高压电缆上的温度采集;水下等恶劣环境的温度采集;运动物体上的温度采集;不易连线通过的空间传输传感器数据;单纯为降低布线成本选用的数据采集方案;没有交流电源的工作场合的数据测量;便携式非固定场所数据测量。
</p>
                     <span style="font-size:80px;color:#ddd;position:relative;margin-left:660px;top:-45px;">”</span>
                     <img src="@/assets/img/1-34.gif" style="float:right;margin-top:-252px;margin-right:25px;" />
                     <p style="margin-top:-182px;margin-left:750px;">示例图片：</p>
                    </div>

                     <div v-show="show11">
                     <span style="font-size:80px;color:#ddd;">“</span>
                     <span style="font-size:16px;position:relative;top:-30px;"><b>变频功率</b></span>
                     <p style="width:664px;margin-left:40px;margin-top:-40px;line-height:26px;font-size:16px;color:#666666">变频功率传感器通过对输入的电压、电流信号进行交流采样，再将采样值通过电缆、光纤等传输系统与数字量输入二次仪表相连，数字量输入二次仪表对电压、电流的采样值进行运算，可以获取电压有效值、电流有效值、基波电压、基波电流、谐波电压、谐波电流、有功功率、基波功率、谐波功率等参数。</p>
                     <span style="font-size:80px;color:#ddd;position:relative;margin-left:660px;top:-45px;">”</span>
                     <img src="@/assets/img/1-34.gif" style="float:right;margin-top:-148px;margin-right:25px;" />
                     <p style="position:relative;top:-78px;margin-left:750px;">示例图片：</p>
                    </div>
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

     
     isShow6:true,
     isShow7:false,

     isShow8:true,
     isShow9:false,

     isShow10:true,
     isShow11:false,

     isShow12:true,
     isShow13:false,


    show1:true,
    show2:false,
    show3:false,
    show4:true,
    show5:false,
    show6:false,
    show7:true,
    show8:false,
    show9:false,
    show10:false,
    show11:false,


    path11: require("@/assets/img/1-27.png"),
    path12: require("@/assets/img/1-25.png"),
    path13: require("@/assets/img/1-26.png"),




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


    change11(){
        this.isShow6 = !this.isShow6;
        this.isShow7 = !this.isShow7;
    },
     change12(){
        this.isShow6 = !this.isShow6;
        this.isShow7 = !this.isShow7;
    },

    change13(){
        this.isShow8 = !this.isShow8;
        this.isShow9 = !this.isShow9;
    },
     change14(){
        this.isShow8 = !this.isShow8;
        this.isShow9 = !this.isShow9;
    },

    change15(){
        this.isShow10 = !this.isShow10;
        this.isShow11 = !this.isShow11;
    },
     change16(){
         this.isShow10 = !this.isShow10;
        this.isShow11 = !this.isShow11;
    },

    change17(){
        this.isShow12 = !this.isShow12;
        this.isShow13 = !this.isShow13;
    },
     change18(){
        this.isShow12 = !this.isShow12;
        this.isShow13 = !this.isShow13;
    },

    change20(){
       this.path11 = require("@/assets/img/1-27.png"),
       this.path12 = require("@/assets/img/1-25.png"),
       this.path13 = require("@/assets/img/1-26.png"),
       this.show7 = true;
       this.show8 = false;
       this.show9 = false;
       document.getElementById("ca").style="background:#fff";
       document.getElementById("cb").style="background:#f5f5f5";
       document.getElementById("cc").style="background:#f5f5f5";
    },
     change21(){
       this.path11 = require("@/assets/img/1-24.png"),
       this.path12 = require("@/assets/img/1-28.png"),
       this.path13 = require("@/assets/img/1-26.png"),
       this.show7 = false;
       this.show8 = true;
       this.show9 = false;
       document.getElementById("ca").style="background:#f5f5f5";
       document.getElementById("cb").style="background:#fff";
       document.getElementById("cc").style="background:#f5f5f5";
       
    },
     change22(){
       this.path11 = require("@/assets/img/1-24.png"), 
       this.path12 = require("@/assets/img/1-25.png"), 
       this.path13 = require("@/assets/img/1-27.png"),
       this.show7 = false;
       this.show8 = false;
       this.show9 = true;
       document.getElementById("ca").style="background:#f5f5f5";
       document.getElementById("cb").style="background:#f5f5f5";
       document.getElementById("cc").style="background:#fff";
    },





  change25(){
     this.show1 = true;
     this.show2 = false;
     this.show3 = false;
     this.show4 = true;
     this.show5 = false;
     this.show6 = false;

     this.show7 = true;
     this.show8 = false;
     this.show9 = false;
     this.show10 = false;
     this.show11 = false;

     document.getElementById("ca") .style="background:#fff";
     document.getElementById("cb") .style="background:#f5f5f5";
     document.getElementById("cc") .style="background:#f5f5f5";

       this.path11 = require("@/assets/img/1-27.png"),
       this.path12 = require("@/assets/img/1-25.png"),
       this.path13 = require("@/assets/img/1-26.png")
  },
   change26(){
     this.show1 = false;
     this.show2 = true;
     this.show3 = false;
     this.show4 = false;
     this.show5 = true;
     this.show6 = false;
     
     this.show7 = false;
     this.show8 = false;
     this.show9 = false;
     this.show10 = true;
     this.show11 = false;
  },
   change27(){
     this.show1 = false;
     this.show2 = false;
     this.show3 = true;
     this.show4 = false;
     this.show5 = false;
     this.show6 = true;

     this.show7 = false;
     this.show8 = false;
     this.show9 = false;
     this.show10 = false;
     this.show11 = true;
  },



  },

  mounted(){
    $(document).ready(function () {

     if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        window.location.reload();
    }
 });


  $(function () {
  $('.shutter').shutter({
	shutterW: 100+'%', // 容器宽度
	shutterH: 600, // 容器高度
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
    margin-top:222px;
}

#d{
 
  background:url(../assets/img/1-10.png) ;
  /* background-size: 1441px 661px; */
  /* position: relative;
  margin-top: 200px;
  margin-left: 110px; */

}

#e{
  width:300px;height:400px;border:4px solid #007bff;position:relative;margin-left:860px;margin-top:-520px;background:#fff;
}

#e:hover{
  background:#007bff;
}
#e:hover p{
  color: #fff;
}
#f{
  font-size:20px;color:#007bff;text-align:center;position:relative;margin-top:47px;
}

#g{
  font-size:18px;color:#007bff;text-align:left;;width:258px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}

#h{
  position:relative;margin-top:108px;margin-left:-1px; width: 53px;height: 53px;
}



#i{
  width:300px;height:400px;border:4px solid #007bff;position:relative;margin-left:1130px;margin-top:-200px;background:#fff;
}
#i:hover{
  background: #007bff;
}
#i:hover p{
  color: #fff;
}
#j{
  font-size:20px;color:#007bff;text-align:center;position:relative;margin-top:47px;
}
#k{
  font-size:18px;color:#007bff;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#l{
  position:relative;margin-top:170px;margin-left:-1px;width: 53px;height: 53px;
}




#m{
  width:300px;height:400px;border:4px solid #007bff;position:relative;margin-left:1290px;margin-top:-200px;background:#fff;
}
#m:hover{
  background: #007bff;
}
#m:hover p{
  color: #fff;
}
#n{
  font-size:20px;color:#007bff;text-align:center;position:relative;margin-top:47px;
}
#o{
  font-size:18px;color:#007bff;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#p{
  position:relative;margin-top:-10px;margin-left:239px;width: 53px;height: 53px;
}



#q{
  width:300px;height:400px;border:4px solid #007bff;position:relative;margin-left:1586px;margin-top:-600px;background:#fff;
}
#q:hover{
  background: #007bff;
}
#q:hover p{
  color: #fff;
}
#r{
  font-size:20px;color:#007bff;text-align:center;position:relative;margin-top:47px;
}
#s{
  font-size:18px;color:#007bff;text-align:left;;width:251px;margin:0 auto;position:relative;margin-top:5px;line-height:30px;
}
#t{
  position:relative;margin-top:48px;margin-left:239px;width: 53px;height: 53px;
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

#bc{
  height:659px;
  background:url(../assets/img/1-22.png)no-repeat center;
  width: 100%;
  height: 640px;
  background-size: cover;
  position:relative;margin-bottom:241px;z-index:-1;margin-top:300px;
}

#bd{
  background: url(../assets/img/1-23.png) no-repeat center;
  width: 100%;
  height: 500px;
  background-size: cover;
  margin-bottom: 100px;
}

#aa{
  background: url(../assets/img/1-16.png)no-repeat center;
    width: 100%;
     height:908px;
    background-size:cover;
    margin-top: 150px;
    
   
}


#ca{
  height:100px;background:#fff;
}

#cb{
   height:100px;background:#f5f5f5;
}

#cc{
  height:100px;background:#f5f5f5;
}


</style>