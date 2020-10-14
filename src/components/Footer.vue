<template>
    
   <div>
        <div  class="footer-content">

                
          <ul class="content-nav">
    
           <li>
              <p @click="jumpRouter('/',0)">泓睿科技</p>
              <!-- <span @click="jumpRouter('/program/wisdom')">人車安全智慧雲</span>
              <span @click="jumpRouter('/program/yipo')">易泊停車誘導及預約</span>
              <span @click="jumpRouter('/program/mirror')">電子後視鏡</span> -->
              <span @click="jumpRouter('/',0)">藍牙5.2</span>
              <span @click="jumpRouter('/',0)">Wi-Fi 6</span>
              <span @click="jumpRouter('/',0)">NB-IoT網絡</span>
            </li>
            <li>
              <p @click="jumpRouter('/program',1)">解決方案</p>
              <span @click="jumpRouter('/program',1)" >人車安全智慧雲</span>
              <span  @click="jumpRouter('/transit/yipo',1)">易泊停車誘導及預約</span>
              <span @click="jumpRouter('/transit/mirror',1)">電子後視鏡</span>
              <span @click="jumpRouter('/transit/warning',1)">行人過街預警</span>
               <span @click="jumpRouter('/transit/intercom',1)">移動雲對講</span>
                <span @click="jumpRouter('/transit/mobileye',1)">數字化地圖</span>
                 <!-- <span @click="jumpRouter('/transit/integrated')">項目案例</span> -->
            </li>
             <li>
              <p @click="jumpRouter('/integrated',2)">項目案例</p>
              <span @click="jumpRouter('/integrated',2)" >服務種類</span>
              <span @click="jumpRouter('/integrated',2)">服務流程</span>
              <span @click="jumpRouter('/integrated',2)">服務項目</span>
            </li>
            <li>
              <p @click="jumpRouter('/about',3)">關於泓睿</p>
              <span @click="jumpRouter('/about',3)">公司介紹</span>
            </li>
             <li>
              <p @click="jumpRouter('/join',4)">加入泓睿</p>
              <span @click="jumpRouter('/join',4)">駐場工程師</span>
              <span @click="jumpRouter('/join',4)">大數據駐場運維</span>
              <span @click="jumpRouter('/join',4)">產品經理</span>
              <span @click="jumpRouter('/join',4)">Java高級工程師</span>
              <span @click="jumpRouter('/join',4)">C#軟件工程師</span>
              <span @click="jumpRouter('/join',4)">>>></span>
            </li>
            <li>
              <p>聯繫我們</p>
              <span>電話：<span style="font-size:25px">+853 2859 0953</span></span>
              <span>傳真：+853 2852 8112</span>
              <span>郵箱：contactus@inplexmacau.com</span>
              <span>地址：澳門俾利喇街149 號 A-B地下</span>
              <span>Address：Rua de Francisco Xavier 
                Pereira No.149 A-B R/C,Macau</span>
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
    return {};
  },
  methods: {
    jumpRouter(path,index){
          this.$router.push(path);
          sessionStorage.clear();
          sessionStorage.setItem('navIndex',index);
          
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
    background: #000096 fixed;
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
          color: #d4edff;
          padding: 10px 0;
          width: 95px;
          cursor:pointer;
          padding-top: 10px;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 3px 0;
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
      
  
@media screen and (max-width: 997px) {
   .footer-content{
     display: none;
   }
}
</style>