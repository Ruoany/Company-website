<template>

<div id="a">

         <h3 class="animate__animated animate__bounceInDown">澳門泓睿科技</h3>
         <div id="b">
             <p style="text-align:left" class="animate__animated animate__backInLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;澳門泓睿資訊科技有限公司，以技術創新為導向的澳門企業，致力於為客戶提供整體資訊化解決方案。主營業務包括客戶需求內應用端產品研發、智能型交通、大數據分析、車輛管理系統以及企業軟體集成、弱電機房工程運維服務，主要服務客戶為澳門政府機構、澳門企業、澳門娛樂度假村等。</p>
             <p style="text-align:left" class="animate__animated animate__backInRight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我們的使命從客戶體驗出發，以多年積累經驗及創新型技術在資訊科技領域扎根澳門，契合本地客戶需要，擬定合適方案為澳門各政府機構及企業提供服務 。</p>
             <p style="text-align:left" class="animate__animated animate__backInUp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司業務主體分為四個板塊：</p>
              <ol class="animate__animated animate__backInUp">
                  <li>1、應用級系統集成及開發交付</li>
                  <li>2、弱電機房及工程專案</li>
                  <li>3、政府機構及企業客戶雲平台運維服務</li>
                  <li>4、交通類產品及方案研發中心、交付中心</li>
              </ol>
         </div>

         
 </div>

</template>

<script>
export default {
    data() {
        return{
          
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



*{
    margin: 0;
    padding: 0;
}


#a{
   background: url(../assets/img/about.png) no-repeat center;
     width:100%;
    height:1305px;
    background-size:cover;
    overflow: hidden;

}
h3{
    font-size: 40px;
    color: #fff;
     width: 248px;
     height: 38px;
    margin: 402px auto;
}

#b{
    color: #fff;
    font-size: 23px;
    line-height: 30px;
    max-width: 780px;
    margin:-300px auto;
    
}
#b p{
    position: relative;
    margin-top: 20px;
    line-height: 30px;
    font-size: 23px;
    
}
li{
    line-height: 33px;
}











</style>