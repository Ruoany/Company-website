<template>


<div id="c" style="height:2000px;">

    <div id="a" @click="jumpRouter('/program')">
      
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">移動雲對講</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >一種快速、智能的通訊工具</p>
    </div>


       <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
    
     <div style="width:1601px;position:relative;margin:0 auto;margin-top:60px;height:1300px;">
         
       <p id="b"><b>移動對講機</b></p>
      <img src="@/assets/img/2-5-2.png" style="position:relative;margin-left:530px;top:-420px;" />
         <div style="  width: 0;height: 0;border-bottom: 500px solid #000096;border-right: 600px solid transparent;opacity:0.7;position:relative;margin-top:-970px;margin-left:980px;  ">
              
         </div>
         <p style="font-size:30px;color:#fff;position:relative;margin-left:990px;margin-top:-380px;">系統介紹</p>
         <p style="font-size:20px;color:#fff;position:relative;margin-left:990px;margin-top:10px;line-height:34px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; QB-PTT<br/>
                        是一款基於Android<br/>
                        手機上運行的移動應用程序，<br/>
                        提供對講機功能，但具有更多高<br/>
                        級功能，可擴展，可根據新用戶的<br/>
                        需求進一步開發。移動對講機服務可以<br/>
                        在一些公司以服務器獨立模式部署，而其他<br/>
                        中小企業則有雲版本。移動對講機是一種快速、<br/>
                        智能的通訊工具，它為許多行業的人們提供不同的服務體驗。
        </p>

        <img src="@/assets/img/2-5-4.png" style="position:relative;margin-left:350px;margin-top:40px;" />
        <p style="font-size:30px;position:relative;text-align:right;margin-left:30px;width:900px;line-height:36px;margin-top:-470px;color:#fff;">項目目標</p>
        <p style="font-size:20px;position:relative;text-align:right;margin-left:60px;width:900px;line-height:36px;margin-top:20px;color:#fff;">通過使用雲平台對講APP，<br/>
            讓內部員工可隨時進群組，<br/>
            查看對應的消息、語音對講，<br/>
            內部人員可查看歷史消息等，<br/>
            讓員工溝通更加方便順捷，通暢，<br/>
            可實時拍照溝通等。</p>
        <img src="@/assets/img/2-5-3.png" style="position:relative;margin-left:990px;margin-top:-330px;" />
   
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
  background: url(../assets/img/2-5.png) no-repeat center;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
    overflow: hidden;
  transition: all 2s;
}

#a:hover {
 transform: scale(1.1);
}

#b{
    color:#053085;font-size:80px; writing-mode: vertical-lr;
    position: relative;
    margin-left: 339px;
    top: 105px;
}

#c{
    background: url(../assets/img/2-5-1.png) no-repeat center;
    z-index: -1;
    background-size: 100% 100%;
}






</style>