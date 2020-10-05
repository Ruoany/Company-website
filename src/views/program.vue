<template>
  <div>
    <div id="a" @click="jumpRouter('/transit/wisdom')" >
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">人車安全智慧雲</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >提供基於位置資訊和安全管理的“Safety+TM”智慧車聯網平臺</p>
    </div>

     <div id="b"  @click="jumpRouter('/transit/yipo')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">易泊停車誘導及預約</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >結合人工智慧及大數據 創新的停車場智慧管理及商業模式</p>
    </div>
 

    <div id="z"  @click="jumpRouter('/transit/mirror')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">電子後視鏡</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >通過相機影像系統提高行駛車輛安全性</p>
    </div>


    <div id="d"   @click="jumpRouter('/transit/warning')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">行人過街預警</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >通过为人行道交通信号灯,数据汇聚到后台进行数据分析和人脸比对等，实现交通泛感知能力</p>
    </div>

    <div id="e" @click="jumpRouter('/transit/intercom')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">移動雲對講</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >一種快速、智能的通訊工具</p>
    </div>

    <div id="f" @click="jumpRouter('/transit/mobileye')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">數字化地圖</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >借助AI驱动的道路勘测技术加快维护操作</p>
    </div> 

   
  </div>
</template>





<script>
export default {
  data() {
    return {
    }
  },
  methods: {

    jumpRouter(path){
          this.$router.push(path);
    }
    
  },
};
</script>




<style scoped>
* {
  margin: 0;
  padding: 0;
  
overflow-x:hidden;
overflow-y:hidden;
}



#a {
  background: url(../assets/img/2-1.png) no-repeat;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  transition: all 2s;
}

#a:hover {
 transform: scale(1.1);
}

#b {
  background: url(../assets/img/2-2.png) no-repeat;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  transition: all 2s;
}

#b:hover {
 transform: scale(1.1);
}

#z {
  background: url(../assets/img/2-3.png);
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
  
  transition: all 2s;
}

#z:hover {
 transform: scale(1.1);
}

#d {
  background: url(../assets/img/2-4.png) no-repeat center;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
    overflow: hidden;
  transition: all 2s;
}

#d:hover {
 transform: scale(1.1);
}

#e {
  background: url(../assets/img/2-5.png) no-repeat center;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
    overflow: hidden;
  transition: all 2s;
}

#e:hover {
 transform: scale(1.1);
}

#f {
  background: url(../assets/img/2-6.png) no-repeat center;
  width: 100%;
  height: 600px;
  position: relative;
  background-size: 100% 100%;
    overflow: hidden;
  transition: all 2s;
}

#f:hover {
  transform: scale(1.1);
}

</style>