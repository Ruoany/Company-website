<template>
    
   <div>
      <hr style="margin-top:-1px;" />
        <div  class="footer-content">

                
          <ul class="content-nav">
    
           <li>
              <p @click="jumpRouter('/',0)">泓睿科技</p>
              <!-- <span @click="jumpRouter('/program/wisdom')">人車安全智慧雲</span>
              <span @click="jumpRouter('/program/yipo')">易泊停車誘導及預約</span>
              <span @click="jumpRouter('/program/mirror')">電子後視鏡</span> -->
              <span @click="jumpRouter('/',0)" @mouseenter="show1 = !show1" @mouseleave="show1 = !show1">藍牙5.2</span>
              <hr v-show="show1" style="position:absolute;width:50px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:85px;z-index:2;" />
              <span @click="jumpRouter('/',0)" @mouseenter="show2 = !show2" @mouseleave="show2 = !show2">Wi-Fi 6</span>
              <hr v-show="show2" style="position:absolute;width:50px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:115px;z-index:2;" />
              <span @click="jumpRouter('/',0)" @mouseenter="show3 = !show3" @mouseleave="show3 = !show3">NB-IoT網絡</span>
              <hr v-show="show3" style="position:absolute;width:75px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:145px;z-index:2;" />
            </li>
            <li>
              <p @click="jumpRouter('/program',1)">解決方案</p>
              <span @click="jumpRouter('/transit/wisdom',1)" @mouseenter="show4 =  !show4" @mouseleave="show4 = !show4" >人車安全智慧雲</span>
              <hr  v-show="show4" style="position:absolute;width:102px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:85px;z-index:2;" />
              <span  @click="jumpRouter('/transit/yipo',1)" @mouseenter="show5 =  !show5" @mouseleave="show5 = !show5">易泊停車誘導及預約</span>
              <hr v-show="show5" style="position:absolute;width:128px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:115px;z-index:2;" />
              <span @click="jumpRouter('/transit/mirror',1)" @mouseenter="show6 =  !show6" @mouseleave="show6 = !show6">電子後視鏡</span>
              <hr v-show="show6"  style="position:absolute;width:72px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:145px;z-index:2;" />
              <span @click="jumpRouter('/transit/warning',1)" @mouseenter="show7 =  !show7" @mouseleave="show7 = !show7">行人過街預警</span>
              <hr v-show="show7" style="position:absolute;width:85px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:175px;z-index:2;" />
               <span @click="jumpRouter('/transit/intercom',1)" @mouseenter="show8 =  !show8" @mouseleave="show8 = !show8">移動雲對講</span>
               <hr v-show="show8" style="position:absolute;width:72px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:205px;z-index:2;" />
                <span @click="jumpRouter('/transit/mobileye',1)" @mouseenter="show9 =  !show9" @mouseleave="show9 = !show9">數字化地圖</span>
                <hr v-show="show9" style="position:absolute;width:72px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:235px;z-index:2;" />
                 <!-- <span @click="jumpRouter('/transit/integrated')">項目案例</span> -->
            </li>
             <li>
              <p @click="jumpRouter('/integrated',2)">項目案例</p>
              <span @click="jumpRouter('/integrated',2)" @mouseenter="show10 =  !show10" @mouseleave="show10 = !show10">服務種類</span>
              <hr v-show="show10" style="position:absolute;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:85px;z-index:2;" />
              <span @click="jumpRouter('/integrated',2)" @mouseenter="show11 =  !show11" @mouseleave="show11 = !show11">服務流程</span>
              <hr v-show="show11" style="position:absolute;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:115px;z-index:2;" />
              <span @click="jumpRouter('/integrated',2)" @mouseenter="show12 =  !show12" @mouseleave="show12 = !show12">服務項目</span>
              <hr v-show="show12" style="position:absolute;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:145px;z-index:2;" />
            </li>
            <li>
              <p @click="jumpRouter('/about',3)">關於泓睿</p>
              <span @click="jumpRouter('/about',3)" @mouseenter="show13 =  !show13" @mouseleave="show13 = !show13">公司介紹</span>
              <hr v-show="show13" style="position:absolute;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:85px;z-index:2;" />
            </li>
             <li>
              <p @click="jumpRouter('/join',4)">加入泓睿</p>
              <span @click="jumpRouter('/join',4)" @mouseenter="show14 =  !show14" @mouseleave="show14 = !show14">駐場工程師</span>
              <hr v-show="show14" style="position:absolute;width:74px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:85px;z-index:2;" />
              <span @click="jumpRouter('/join',4)" @mouseenter="show15 =  !show15" @mouseleave="show15 = !show15">大數據駐場運維</span>
              <hr v-show="show15" style="position:absolute;width:102px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:115px;z-index:2;" />
              <span @click="jumpRouter('/join',4)" @mouseenter="show16 =  !show16" @mouseleave="show16 = !show16">產品經理</span>
              <hr v-show="show16" style="position:absolute;width:60px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:145px;z-index:2;" />
              <span @click="jumpRouter('/join',4)" @mouseenter="show17 =  !show17" @mouseleave="show17 = !show17">Java高級工程師</span>
              <hr v-show="show17" style="position:absolute;width:102px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:175px;z-index:2;" />
              <span @click="jumpRouter('/join',4)" @mouseenter="show18 =  !show18" @mouseleave="show18 = !show18">C#軟件工程師</span>
              <hr v-show="show18" style="position:absolute;width:90px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:205px;z-index:2;" />
              <span @click="jumpRouter('/join',4)" @mouseenter="show19 =  !show19" @mouseleave="show19 = !show19">>>></span>
              <hr v-show="show19" style="position:absolute;width:28px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:235px;z-index:2;" />
            </li>
            <li>
              <p>聯繫我們</p>
              <span @mouseenter="show20 =  !show20" @mouseleave="show20 = !show20">電話：<span style="font-size:25px" >+853 2859 0953</span></span>
              <hr v-show="show20" style="position:absolute;width:240px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:100px;z-index:2;" />
              <span @mouseenter="show21 =  !show21" @mouseleave="show21 = !show21">傳真：+853 2852 8112</span>
              <hr v-show="show21" style="position:absolute;width:150px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:132px;z-index:2;" />
              <span @mouseenter="show22 =  !show22" @mouseleave="show22 = !show22"><a href="https://qiye.aliyun.com/alimail/auth/login" style="color:#999;text-decoration: none;">郵箱：contactus@inplexmacau.com</a></span>
              <hr v-show="show22" style="position:absolute;width:240px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:162px;z-index:2;" />
              <span @mouseenter="show23 =  !show23" @mouseleave="show23 = !show23">地址：澳門俾利喇街149 號 A-B地下</span>
              <hr v-show="show23" style="position:absolute;width:220px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:192px;z-index:2;" />
              <span @mouseenter="show24 =  !show24" @mouseleave="show24 = !show24">Address：Rua de Francisco Xavier 
                
                Pereira No.149 A-B R/C,Macau</span>
                <hr v-show="show24" style="position:absolute;width:440px;border:0px;border-bottom:2px solid #007bff;margin-left:-2px;margin-top:222px;z-index:2;" />
            </li>
          </ul> 
          
          <!-- <div class="copyright">
              <span>CopyRight&nbsp;&copy;&nbsp;2020&nbsp;澳門泓睿咨询科技有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.</span>
              <span><br/>粤ICP备*********号</span>
          </div>
         -->
        </div>
         
    </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      flag:true,


      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      show7:false,
      show8:false,
      show9:false,
      show10:false,
      show11:false,
      show12:false,
      show13:false,
      show14:false,
      show15:false,
      show16:false,
      show17:false,
      show18:false,
      show19:false,
      show20:false,
      show21:false,
      show22:false,
      show23:false,
      show24:false,

    };
  },
  methods: {
    jumpRouter(path,index){
       sessionStorage.clear();
        sessionStorage.setItem('navIndex',index);
          this.$router.push(path);
          
    },   
  },
   
   

};
</script>
<style scoped>
  
  .footer-content {
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
    /* padding-left: 220px; */
    display: flex;
    justify-content: space-between;
    background: #fff fixed;
    height: 345px;
    
  }
    .content-nav {
    margin: 0 auto;
     
      display: flex;
      justify-content: space-between;
    }
      li {
        display: flex;
        flex-direction: column;
        padding: 0 100px;
      
       
      }
        p {
          font-size: 20px;
          color: #000;
          padding: 10px 0;
          width: 95px;
          cursor:pointer;
          padding-top: 10px;
        }
        span {
          color: #999;
          font-weight: 300;
          padding: 5px 0;
          font-size: 14px;
          cursor:pointer;
          
        }

.copyright {
    
      position: absolute;
      width: 600px;
      text-align: center;
      margin-top:250px;
      margin-left: 1410px;
      

 } 

 span:hover{
   color: #006cff;
 }

      
  
@media screen and (max-width: 997px) {
   .footer-content{
     display: none;
   }
}

</style>