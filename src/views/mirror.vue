<template>
   <div>
         <div id="a" @click="jumpRouter('/program')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">電子後視鏡</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >通過相機影像系統提高行駛車輛安全性</p>
    </div>

      <div id="b" >
         <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
      <div style="display:flex;margin:100px auto;width:1000px;margin-top:0px;">
        <img src="@/assets/img/2-3-7.png" />
        <p
          style="width:339px;position:relative;margin-top:154px;font-size:20px;text-align:left;margin-left:69px;"
        >
          隨著汽車智能化的不斷推進，
          人們對駕車視野越來越高的追求，
          以及大型車輛由於自身的長度和高度，
          駕駛位存在視野盲區，有數據顯示，
          30%以上交通事故與盲區有關。
          安裝電子後視鏡系統成為近兩年不斷被
          提及的商用車盲區解決方案。
        </p>
      </div>

      <div id="c">
        <div style="width:990px;position:relative;margin:0px auto;height:1300px;">
          <p
            style="font-size:30px;position:relative;top:55px;margin:0 auto;text-align:center;top:0px;"
          >一、全景電子後視鏡實現的功能</p>
          <ul style="font-size:20px;position:relative;margin-top:20px;width:980px;">
            <li>1. 視野無盲區:在原物理後視鏡基礎上，消除車頭A柱盲區，車身左右視野更加開闊。</li>
            <li>2. 夜晚看得見:星光級攝像頭具有寬動態及防眩光夜視功能，最低可視光照度0.1LUX,即使在夜間也能看見人和物體。</li>
            <li>3. 雨天看得清:攝像頭具有防凝結功能，即使在雨天，顯示幕上影像依然清晰。</li>
            <li>4. 光感功能 顯示柔和不刺眼:融盛電子後視鏡伴有人性化光感設計，螢幕顯示亮度融入周圍環境，不刺激駕駛員視覺。</li>
          </ul>

          <img
            src="@/assets/img/2-3-8.png"
            style="position:relative;margin-top:15px;margin-left:0px;"
          />
        </div>
      </div>

      <p style="font-size:30px;width:450px;margin:-220px auto;">二、安裝全景電子後視鏡的優勢</p>

    <div>
      <div style="display:flex;flex-desction;justify-content:space-around;width:1200px;margin:0px auto;margin-top:280px;">
                <div id="aa"  @mouseenter="change15()" @mouseleave="change16()">
                  <div id="ab">
                    <div id="ac">
                      <span id="za">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）
                        <br />技術水準超前
                      </span>
                    </div>
                  </div>
                </div>



                 <div id="ad" @mouseenter="change1()" @mouseleave="change2()">
                  <div id="ae">
                    <div id="af">
                      <span id="zb">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）
                        <br/>最大限度提高
                       <br/>  &nbsp;&nbsp;&nbsp;&nbsp;安全性的
                        <br/> &nbsp;&nbsp;&nbsp;&nbsp;設計理念
                      </span>
                    </div>
                  </div>
                </div>


                <div id="ag" @mouseenter="change3()" @mouseleave="change4()">
                  <div id="ah">
                    <div id="ai">
                      <span id="zc">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）
                        <br/> &nbsp;&nbsp;貨真價實的
                        <br/> &nbsp;&nbsp;元器件投入
                      </span>
                    </div>
                  </div>
                </div>



                <div id="aj" @mouseenter="change5()" @mouseleave="change6()">
                  <div id="ak">
                    <div id="al">
                      <span id="zd">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(四）
                       <br/> 超高的性價比
                      </span>
                    </div>
                  </div>
                </div>

      </div>
          <div>
         <p id="k" v-show="show1">
           <span style="position:relative;margin-left:230px;">（一）技術水準超前</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;視頻成像採用3D流媒體數字技術以及車規級晶片，採集、處理、成像流暢；
         給駕駛員提供強大的既視感，車距真實,顯示準確，並可配合雷達聲像報警。
        </p>
         <p id="k" v-show="show2">
           <span style="position:relative;margin-left:180px;">（二）最大限度提高安全性的設計理念</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;圖像處理模組與顯示幕幕分體設計，大大減少主顯示幕厚度，美觀大方，便於安裝，最大限度減少佔用駕駛員視野範圍，提高安全性。同時分體設計便於螢幕散熱，延長使用壽命，並且方便設備維護或更換。
        </p>
        <p id="k" v-show="show3">
           <span style="position:relative;margin-left:200px;">（三）貨真價實的元器件投入</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;6路攝像頭均採用車規級8玻魚眼鏡頭，進光量高的同時配備強光抑止、190度大廣角兼備扭曲修正，夜間、陰雨、濃霧依舊清晰；並採用同軸無損數字傳輸線，信號穩定抗干擾，傳輸速度相當於200M寬頻。
        </p>
        <p id="k" v-show="show4">
           <span style="position:relative;margin-left:230px;">（四）超高的性價比</span><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;電子後視鏡採用雙12.3寸液晶屏設計，其功能包含了常規電子後視鏡圖像內容且兼備了360環視系統的功能，可完全消滅車輛盲區，配備強大售後服務和超長質保，同時用戶維護入口集中。
        </p>
          </div>
    </div>

      <div>
        <p style="positioni:absolute;font-size:30px;width:450px;margin:300px auto;margin-top:80px;">三、澳門某车辆电子后视镜系统 </p>


          
          <div style="display:flex;justify-content: space-around;;margin:-250px auto;width:1208px;">
            <div>
               <ul>
                 <li  @mouseenter="change17()" @mouseleave="change18()" id="ca" >
                   <div  style="width:560px;" >
                    <span style="float:left;">
                       <div style=" border-radius: 35px;width: 40px; height: 40px; border: 2px solid #007bff;background:#007bff"><span style="color:#fff;font-size:30px;margin-left:8px;"><b>1</b></span></div>
                     </span>
                          <div id="bf">
                            <span  style="font-size:20px"><b>&nbsp;&nbsp;&nbsp;發動車輛時</b></span><br />
                            <span  style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;系統自動360°環視車身一周，確保行駛起步安全；</span>
                          </div>
                   </div>
                  </li>
                  <hr  style="position:absolute;width:560px;border:0px;border-bottom:2px solid #007bff;margin-left:0px;margin-top:0px;" />
                  <li  @mouseenter="change7()" @mouseleave="change8()" id="cb">
                    <div style="width:560px;color:#007bff;margin-top:10px;position:relative;" >
                     <span style="float:left;">
                       <div style=" border-radius: 35px;width: 40px; height: 40px; border: 2px solid #007bff;background:#007bff"><span style="color:#fff;font-size:30px;margin-left:8px;"><b>2</b></span></div>
                     </span>
                     <div id="bg">
                        <span style="font-size:20px"><b>&nbsp;&nbsp;&nbsp;當車速0~15km/h<span style="font-size:16px;">(車速條件可自訂義)</span></b></span><br />
                        <span style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;系統自動切換顯示5分屏模式，融合前向雷達感測訊息；</span>
                     </div>
                   </div>
                  </li>
                  <hr  style="position:absolute;width:560px;border:0px;border-bottom:2px solid #007bff;margin-left:0px;margin-top:0px;" />
                  <li  @mouseenter="change9()" @mouseleave="change10()" id="cc">
                    <div style="width:560px;color:#007bff;margin-top:10px;" >
                     <span style="float:left;">
                       <div style=" border-radius: 35px;width: 40px; height: 40px; border: 2px solid #007bff;background:#007bff"><span style="color:#fff;font-size:30px;margin-left:8px;"><b>3</b></span></div>
                     </span>
                     <div id="bh">
                        <span style="font-size:20px"><b>&nbsp;&nbsp;&nbsp;當車速15~25km/h<span style="font-size:16px;">（車速條件可自訂義）</span></b></span><br/>
                        <span style="font-size:16px;">&nbsp;&nbsp;&nbsp;&nbsp;系統自動切換至全景+電子後視鏡影像, 更廣視野範圍,<br/>&nbsp;&nbsp;&nbsp;&nbsp;車身周邊及後方影像一覽無餘；</span>
                     </div>
                   </div>
                  </li>
                  <hr  style="position:absolute;width:560px;border:0px;border-bottom:2px solid #007bff;margin-left:0px;margin-top:-10px;" />
                  <li  @mouseenter="change11()" @mouseleave="change12()" id="cd">
                     <div style="width:560px;color:#007bff;margin-top:0px;" >
                     <span style="float:left;">
                       <div style=" border-radius: 35px;width: 40px; height: 40px; border: 2px solid #007bff;background:#007bff"><span style="color:#fff;font-size:30px;margin-left:8px;"><b>4</b></span></div>
                     </span>
                     <div id="bi">
                        <span style="font-size:20px"><b>&nbsp;&nbsp;&nbsp;當車速≥25km/h<span style="font-size:16px;">（車速條件可自訂義）</span></b></span><br/>
                        <span style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;系統自動切換至全屏電子後視鏡影像, 更智慧化的畫面轉換,<br/>&nbsp;&nbsp;&nbsp;&nbsp;利於觀察後方來車輔助變道；</span>
                     </div>
                   </div>
                  </li>
                  <hr  style="position:absolute;width:560px;border:0px;border-bottom:2px solid #007bff;margin-left:0px;margin-top:-10px;" />
                  <li  @mouseenter="change13()" @mouseleave="change14()" id="ce">
                     <div style="width:560px;color:#007bff;margin-top:0px;" >
                    <span style="float:left;">
                       <div style=" border-radius: 35px;width: 40px; height: 40px; border: 2px solid #007bff;background:#007bff"><span style="color:#fff;font-size:30px;margin-left:8px;"><b>5</b></span></div>
                     </span>
                     <div id="bj">
                        <span style="font-size:20px"><b>&nbsp;&nbsp;&nbsp;倒車時<span style="font-size:16px;">（車速條件可自訂義）</span></b></span><br/>
                        <span style="font-size:16px;">&nbsp;&nbsp;&nbsp;&nbsp;系統自動切換右屏倒車影像，融合倒車雷達感測訊息，
                                                  圖像<br/>&nbsp;&nbsp;&nbsp;&nbsp;與聲音直觀組合警示。不一樣的倒車體驗與全方位的圖像監測。
                                                    </span>

                     </div>
                                                                 
                    </div>
                  </li>
                  <hr  style="position:absolute;width:560px;border:0px;border-bottom:2px solid #007bff;margin-left:0px;margin-top:-10px;" />
               </ul>
            </div>

            <div>
              <img src="@/assets/img/1.png" style="position:relative;margin-top:36px;width:468px;height:494px;" v-show="show5" />
              <img src="@/assets/img/2.png" style="position:relative;margin-top:36px;width:468px;height:494px;" v-show="show6"/>
              <img src="@/assets/img/3.png" style="position:relative;margin-top:36px;width:468px;height:494px;" v-show="show7"/>
              <img src="@/assets/img/4.png" style="position:relative;margin-top:36px;width:468px;height:494px;" v-show="show8" />
              <img src="@/assets/img/5.png" style="position:relative;margin-top:36px;width:468px;height:494px;" v-show="show9"/>
            </div>
          </div>


            <p style="font-size:30px;margin:300px auto;position:relative;width:300px;">四、融合雷達預警實例</p>



            <div style="display:flex;width:970px;margin:0 auto;margin-top:-260px;justify-content:space-around;">
               <div style="display:flex;margin-left:-40px;width:450px;justify-content:space-around;">
                 <img src="@/assets/img/2-3-11.png"  id="bb"/>
                 <img src="@/assets/img/2-3-12.png"  id="bc"/>
                 <img src="@/assets/img/2-3-13.png"  id="bd"/>

                 </div>

               <div style="margin-top:40px;margin-left:30px;line-height:60px;">
                  <div>
                    <p style="cursor:pointer;font-size:24px;color:#ff0000" @mouseenter="change20()" @mouseleave="change21()">0~0.8m红色盲区警示(行人)</p>
                    <hr v-show="show10" style="position:absolute;width:295px;border:0px;border-bottom:2px solid #ff0000;margin-left:0px;margin-top:-10px;" />
                     <p style="cursor:pointer;font-size:24px;color:#ffa500" @mouseenter="change22()" @mouseleave="change23()">0.8~1.2m橙色盲区警示(行人)</p>
                       <hr v-show="show11" style="position:absolute;width:310px;border:0px;border-bottom:2px solid #ffa500;margin-left:0px;margin-top:-10px;" />
                      <p style="cursor:pointer;font-size:24px;color:#008000" @mouseenter="change24()" @mouseleave="change25()">1.2~1.5m绿色接近警示(行人)</p>
                       <hr v-show="show12" style="position:absolute;width:305px;border:0px;border-bottom:2px solid #008000;margin-left:0px;margin-top:-10px;" />
                       <p style="cursor:pointer;font-size:24px;color:#efef00" @mouseenter="change26()" @mouseleave="change27()">0.8~1.2m黄色警示(侧方障碍物)</p>
                        <hr v-show="show13" style="position:absolute;width:335px;border:0px;border-bottom:2px solid #efef00;margin-left:0px;margin-top:-10px;" />

                  </div>
                   <div style="font-size:18px;width:400px;margin-top:110px;">多传感器融合，图像、色彩、声音提醒，
                        便于驾驶者感知，消除盲区的同时警示安全驻车及出行。
                        </div>
               </div>
                  


            </div>


             <img src="@/assets/img/2-3-10.png" style="width:976px;margin:0 auto;margin-top:50px;" />


         </div>




    </div>
   </div>
</template>

<script>
export default {
   data() {
    return {
      show1:true,
      show2:false,
      show3:false,
      show4:false,


      show5:true,
      show6:false,
      show7:false,
      show8:false,
      show9:false,


      show10:false,
      show11:false,
      show12:false,
      show13:false,

    };
  },
  methods: {
    jumpRouter(path){
          this.$router.push(path);
    },
    change1(){
      this.show1 = false,
      this.show2 = true,
      this.show3 = false,
      this.show4 = false,

      document.getElementById("af").style="background:#007bff;",
      document.getElementById("ac").style="background:#fff;",
      document.getElementById("ai").style="background:#fff;",
      document.getElementById("al").style="background:#fff;",
      document.getElementById("zb").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zc").style="color:black",
      document.getElementById("zd").style="color:black"
    },
   change2(){
      this.show1 = false,
      this.show2 = true,
      this.show3 = false,
      this.show4 = false,
       document.getElementById("ac").style="background:#fff;",
      document.getElementById("af").style="background:#007bff",
      document.getElementById("ai").style="background:#fff;",
      document.getElementById("al").style="background:#fff;",
      document.getElementById("zb").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zc").style="color:black",
      document.getElementById("zd").style="color:black"
    },
      
    change3(){
      this.show1 = false,
      this.show2 = false,
      this.show3 = true,
      this.show4 = false,
      document.getElementById("ai").style="background:#007bff;",
      document.getElementById("ac").style="background:#fff;",
      document.getElementById("af").style="background:#fff;",
      document.getElementById("al").style="background:#fff;",
      document.getElementById("zc").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zb").style="color:black",
      document.getElementById("zd").style="color:black"
    },
    change4(){
      this.show1 = false,
      this.show2 = false,
      this.show3 = true,
      this.show4 = false,
      document.getElementById("ac").style="background:#fff;color:black",
      document.getElementById("af").style="background:#fff;color:black",
      document.getElementById("ai").style="background:#007bff",
      document.getElementById("al").style="background:#fff;color:black",
      document.getElementById("zc").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zb").style="color:black",
      document.getElementById("zd").style="color:black"
    },
    change5(){
      this.show1 = false,
      this.show2 = false,
      this.show3 = false,
      this.show4 = true,
      document.getElementById("al").style="background:#007bff;color:black",
      document.getElementById("ac").style="background:#fff;color:black",
      document.getElementById("af").style="background:#fff;color:black",
      document.getElementById("ai").style="background:#fff;color:black",
      document.getElementById("zd").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zb").style="color:black",
      document.getElementById("zc").style="color:black"
    },
    change6(){
      this.show1 = false,
      this.show2 = false,
      this.show3 = false,
      this.show4 = true,
      document.getElementById("ac").style="background:#fff;color:black",
      document.getElementById("af").style="background:#fff;color:black",
      document.getElementById("ai").style="background:#fff",
      document.getElementById("al").style="background:#007bff;",
      document.getElementById("zd").style="color:#fff",
      document.getElementById("za").style="color:black",
      document.getElementById("zb").style="color:black",
      document.getElementById("zc").style="color:black"
    },

    change15(){
      this.show1 = true,
      this.show2 = false,
      this.show3 = false,
      this.show4 = false,
      document.getElementById("ac").style="background:#007bff;color:black",
      document.getElementById("af").style="background:#fff;color:black",
      document.getElementById("ai").style="background:#fff;color:black",
      document.getElementById("al").style="background:#fff;color:black",
      document.getElementById("za").style="color:#fff",
      document.getElementById("zb").style="color:black",
      document.getElementById("zc").style="color:black",
      document.getElementById("zd").style="color:black"
    },
    change16(){
      this.show1 = true,
      this.show2 = false,
      this.show3 = false,
      this.show4 = false,
      document.getElementById("ac").style="background:#007bff;color:black",
      document.getElementById("af").style="background:#fff;color:black",
      document.getElementById("ai").style="background:#fff;color:black",
      document.getElementById("al").style="background:#fff;color:black",
      document.getElementById("za").style="color:#fff",
      document.getElementById("zb").style="color:black",
      document.getElementById("zc").style="color:black",
      document.getElementById("zd").style="color:black"
      
    },


    change7(){
      this.show5 = false,
      this.show6 = true,
      this.show7 = false,
      this.show8 = false,
      this.show9 = false,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#007bff;";
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff;",
      document.getElementById("bg").style="color:#fff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"
      
    },
    change8(){
      this.show5 = false,
      this.show6 = true,
      this.show7 = false,
      this.show8 = false,
      this.show9 = false,
     document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#007bff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#fff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"
    },
    change9(){
      this.show5 = false,
      this.show6 = false,
      this.show7 = true,
      this.show8 = false,
      this.show9 = false,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#007bff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#fff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"
    },
    change10(){
       this.show5 = false,
      this.show6 = false,
      this.show7 = true,
      this.show8 = false,
      this.show9 = false,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#007bff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#fff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"
    },
    change11() {
      this.show5 = false,
      this.show6 = false,
      this.show7 = false,
      this.show8 = true,
      this.show9 = false,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#007bff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#fff;",
      document.getElementById("bj").style="color:#007bff;"
    },
     change12(){
       this.show5 = false,
      this.show6 = false,
      this.show7 = false,
      this.show8 = true,
      this.show9 = false,
       document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#007bff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#fff;",
      document.getElementById("bj").style="color:#007bff;"
    },
     change13() {
      this.show5 = false,
      this.show6 = false,
      this.show7 = false,
      this.show8 = false,
      this.show9 = true,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#007bff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#fff;"
    },
     change14(){
       this.show5 = false,
      this.show6 = false,
      this.show7 = false,
      this.show8 = false,
      this.show9 = true,
      document.getElementById("ca").style="background:#fff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#007bff;",
      document.getElementById("bf").style="color:#007bff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#fff;"
       
    },

    change17() {
      this.show5 = true,
      this.show6 = false,
      this.show7 = false,
      this.show8 = false,
      this.show9 = false,
      document.getElementById("ca").style="background:#007bff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#fff",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"

    },
    change18(){
      this.show5 = true,
      this.show6 = false,
      this.show7 = false,
      this.show8 = false,
      this.show9 = false,
      document.getElementById("ca").style="background:#007bff;",
      document.getElementById("cb").style="background:#fff;",
      document.getElementById("cc").style="background:#fff;",
      document.getElementById("cd").style="background:#fff;",
      document.getElementById("ce").style="background:#fff;",
      document.getElementById("bf").style="color:#fff;",
      document.getElementById("bg").style="color:#007bff;",
      document.getElementById("bh").style="color:#007bff;",
      document.getElementById("bi").style="color:#007bff;",
      document.getElementById("bj").style="color:#007bff;"
    },



    change20(){
      this.show10 = true;
      document.getElementById("bb").style="transform: scale(1.1);transition: all 2s;"
    },
    change21(){
       this.show10 = false;
      document.getElementById("bb").style="transform: scale(1);transition: all 2s;"
    },

    change22(){
      this.show11 = true;
      document.getElementById("bc").style="transform: scale(1.1);transition: all 2s;"
    },
    change23(){
      this.show11 = false;
      document.getElementById("bc").style="transform: scale(1);transition: all 2s;"
    },

    change24(){
      this.show12 = true;
      document.getElementById("bd").style="transform: scale(1.1);transition: all 2s;"
    },
    change25(){
      this.show12 = false;
      document.getElementById("bd").style="transform: scale(1);transition: all 2s;"
    },
    change26(){
       this.show13 = true;
      document.getElementById("bb").style="transform: scale(1.1);transition: all 2s;"
      document.getElementById("bc").style="transform: scale(1.1);transition: all 2s;"
      document.getElementById("bd").style="transform: scale(1.1);transition: all 2s;"
    },
    change27(){
       this.show13 = false;
      document.getElementById("bb").style="transform: scale(1);transition: all 2s;"
      document.getElementById("bc").style="transform: scale(1);transition: all 2s;"
      document.getElementById("bd").style="transform: scale(1);transition: all 2s;"
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
  background: url(../assets/img/2-3.png);
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  
    overflow: hidden;
  transition: all 2s;
}

#a:hover {
 transform: scale(1.2);
}

#b {
  background: #fff;
  width: 100%;
  height: 3979px;
  line-height: 35px;
  margin-top: 30px;
}

#c {
  width: 100%;
  height: 800px;
}

#ab {
  border-radius: 115px;
  width: 230px;
  height: 230px;
  border: 2px dashed #007bff;
}

/* #ab :hover {
       background:#053085;
      
}
#ab :hover span{
  color: #fff;
} */


#ac {
  width: 181px;
  height: 181px;
  background-color: #fff;
  border-radius: 90.5px;
  position: relative;
  left: 22px;
  top: 22px;
  border: 2px solid #007bff;
  background: #007bff;
  color: #fff;
}

#ac span {
 
  font-size: 20px;
  position: relative;
  left: 30px;
  top: 44px;
}



#aa {
  position: relative;
  
}



#ae {
  border-radius: 115px;
  width: 230px;
  height: 230px;
  border: 2px dashed #007bff;
}
#ae :hover {
       background: #007bff;     
}
#ae :hover span{
  color: #fff;
}





#af {
  width: 181px;
  height: 181px;
  background-color: #fff;
  border-radius: 90.5px;
  position: relative;
  left: 22px;
  top: 22px;
  border: 2px solid #007bff;
}

#af span {
  color: #000;
  font-size: 20px;
  position: relative;
  left: 30px;
  top: 14px;
}



#ad {
  position: relative;
}



#ah {
  border-radius: 115px;
  width: 230px;
  height: 230px;
  border: 2px dashed #007bff;
}
#ah :hover {
       background: #007bff;
      
}
#ah :hover span{
  color: #fff;
}


#ai {
  width: 181px;
  height: 181px;
  background-color: #fff;
  border-radius: 90.5px;
  position: relative;
  left: 22px;
  top: 22px;
  border: 2px solid #007bff;
}

#ai span {
  color: #000;
  font-size: 20px;
  position: relative;
  left: 30px;
  top: 14px;
}



#ag {
  position: relative;
}



#ak {
  border-radius: 115px;
  width: 230px;
  height: 230px;
  border: 2px dashed #007bff;
}
#ak :hover {
       background: #007bff;
      
}
#ak :hover span{
  color: #fff;
}


#al {
  width: 181px;
  height: 181px;
  background-color: #fff;
  border-radius: 90.5px;
  position: relative;
  left: 22px;
  top: 22px;
  border: 2px solid #007bff;
}

#al span {
  color: #000;
  font-size: 20px;
  position: relative;
  left: 30px;
  top: 44px;
}



#aj {
  position: relative;

  


}

#k {
  font-size: 20px;
  position: relative;
  
  line-height: 34px;
  max-width:700px;
  margin:0px auto;
  margin-top: 100px;
 
}


#ca{
   background: #007bff;
   color:#fff ;
}



   
</style>