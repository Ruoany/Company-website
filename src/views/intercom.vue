<template>


<div id="c" style="height:2220px;">

    <div id="a" @click="jumpRouter('/program')"></div>
      <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
      
      <p style="font-size:80px;width:400px;margin:0 auto;margin-top:0px;">移動對講機</p>

      <img src="@/assets/img/2-5-1.png" style="position:relative;margin-left:365px;margin-top:-130px;"/>
      <img src="@/assets/img/2-5-2.png" style="position:relative;margin-left:820px;margin-top:-590px;" />
      <img src="@/assets/img/2-5-4.png"  style="position:relative;margin-left:1300px;margin-top:-680px"/>
      
      <p style="font-size:30px;width:30px;position:relative;margin-left:1330px;margin-top:-300px">系统介绍</p>
      
      <div style="position:relative;margin-left:1450px;font-size:20px;margin-top:-240px;line-height:36px;">
        <p>QB-PTT</p>
        <hr style="width:70px;border:0px;border-bottom:2px solid gray;" />
        <p>是一款基於Android</p>
        <hr style="width:170px;border:0px;border-bottom:2px solid gray;" />
        <p>手機上運行的移動應用程序，</p>
        <hr style="width:250px;border:0px;border-bottom:2px solid gray;" />
        <p>提供對講機功能，但具有更多高</p>
        <hr style="width:280px;border:0px;border-bottom:2px solid gray;" />
        <p>級功能，可擴展，可根據新用戶的</p>
        <hr style="width:300px;border:0px;border-bottom:2px solid gray;" />
        <p>需求進一步開發。移動對講機服務可以</p>
        <hr style="width:340px;border:0px;border-bottom:2px solid gray;" />
        <p>在一些公司以服務器獨立模式部署，而其他</p>
        <hr style="width:380px;border:0px;border-bottom:2px solid gray;" />
        <p>中小企業則有雲版本。移動對講機是一種快速、</p>
        <hr style="width:410px;border:0px;border-bottom:2px solid gray;" />
        <p>智能的通訊工具，它為許多行業的人們提供不同的服務體驗。</p>
        <hr style="width:530px;border:0px;border-bottom:2px solid gray;" />
      </div>

      <img src="@/assets/img/2-5-5.png"  style="position:relative;margin-top:230px;margin-left:460px;"/>

      <p style="font-size:30px;position:relative;margin-left:820px;margin-top:-360px;">項目目標</p>

      <p style="position:relative;font-size:20px;width:520px;z-index:2;margin-left:650px;line-height:35px;margin-top:40px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通過使用雲平台對講APP，讓內部員工可隨時進群組，查看對應的消息、語音對講，內部人員可查看歷史消息等，讓員工溝通更加方便順捷，通暢，可實時拍照溝通等。</p>
    
    <img src="@/assets/img/2-5-3.png" style="position:relative;margin-left:1300px;margin-top:-450px;" />

     <img src="@/assets/img/2-5-6.png" style="position:relative;margin-top:-460px;margin-left:1420px;"/>

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








</style>