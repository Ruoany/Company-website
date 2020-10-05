<template>
<div>
   <div id="f" @click="jumpRouter('/program')">
      <p style="color:#fff;font-size:40px;text-align:center;position:relative;top:236px;">數字化地圖</p>
      <p
        style="color:#fff;font-size:20px;text-align:center;position:relative;top:266px;"
      >借助AI驱动的道路勘测技术加快维护操作</p>
    </div> 
            
  <div class="a" >
    <el-button type="primary" plain style="width:100px;height:40px;position:relative;margin-left:2360px;font-size:20px;margin-top:20px;" @click="jumpRouter('/program')">點擊返回</el-button>
         <p style="position:relative;width:364px;font-size:40px;margin:0 auto;margin-top:100px;color:#fff;">Mobileye 数据服务 </p>
         <p style="position:relative;width:378px;font-size:16px;margin:0 auto;margin-top:20px;color:#fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借助AI驱动的道路勘测技术加快维护操作</p>
  
        
            <ol style="display:flex;width:1200px;margin:0 auto;position:relative;margin-top:56px;justify-content:space-around;">
            
                <img :src="path1"  @mouseenter="change1()" @mouseleave="change2()" />
            
              
                <img :src="path2" @mouseenter="change3()" @mouseleave="change4()"  />
              
               
                <img :src="path3" @mouseenter="change5()" @mouseleave="change6()"  />
             
            </ol>

            <ol style="display:flex;width:1280px;margin:0 auto;position:relative;margin-top:40px;justify-content:space-around;text-align:center;color:#fff">
              
               <li  style="position:relative;margin-left:-20px;">
                   <p style="font-size:24px">道路资产调查</p>
                   <p style="font-size:18px;margin-top:38px;">进行有效的资产管理和维护计划</p>
               </li>
               

               <li style="position:relative;margin-left:-80px;">
                   <p style="font-size:24px">路面状况评估</p>
                   <p style="font-size:18px;margin-top:38px;">用于数据驱动的道路维护</p>
               </li>

               <li style="position:relative;margin-left:-60px;">
                   <p style="font-size:24px">动态交通图</p>
                   <p style="font-size:18px;margin-top:38px;">用于基于证据的城市规划</p>
               </li>
            </ol>

            
            <div style="width:2477px;height:4995px;margin:0 auto;">
            <img src="@/assets/img/2-6-5.png" style="width:1411px;margin:0 auto;margin-top:324px;"/>

        
          
             <div style=" border-radius: 150px;width: 300px;height: 300px;border: 2px solid #053085;background:#053085;position:relative;margin-top:-2390px;margin-left:720px;" @click="isShow1 && start1()">
                <div style="color:#fff;position:relative;margin-left:0px;margin-top:90px;text-align:center;line-height:39px;">
                 <p style="font-size:28px">公共工程部门</p>
                 <p style="font-size:24px">公用事业公司</p>
                 <p style="font-size:24px">和运输当局</p>
                 <p style="font-size:24px">可以</p>
                </div>
            </div>
           


             
              
                  <img src="@/assets/img/2-6-7.png"    id="h"/>
                  <img src="@/assets/img/2-6-8.png"  id="i"/>
                  <img src="@/assets/img/2-6-9.png"    id="j"/>
                
           
             



         
              <div style=" border-radius: 150px;width: 300px;height: 300px;border: 2px solid #053085;background:#053085;position:relative;margin-top:-350px;margin-left:1620px;" @click="isShow2 && start2()">
                <div style="color:#fff;position:relative;margin-left:0px;margin-top:80px;text-align:center;line-height:39px;">
                 <p style="font-size:28px">交通部门</p>
                 <p style="font-size:24px">道路运营商和</p>
                 <p style="font-size:24px">道路维护专家</p>
                 <p style="font-size:24px">可以</p>
                </div>
            </div>
          
        
            <div style="width:950px;display:flex;position:relative;margin-top:-120px;margin-left:700px;">
              <img src="@/assets/img/2-6-10.png" id="k" />
              <img src="@/assets/img/2-6-11.png" id="l"/>
              <img src="@/assets/img/2-6-12.png" id="m"/>
            </div>

             
             <img  src="@/assets/img/2-6-21.png" id="u"  />
             <img  src="@/assets/img/2-6-22.png" id="v"/>
             <img  src="@/assets/img/2-6-23.png" id="w"/>
             
        
            <div style=" border-radius: 150px;width: 300px;height: 300px;border: 2px solid #053085;background:#053085;position:relative;margin-top:-10px;margin-left:580px;" @click="isShow3 && start3()">
                <div style="color:#fff;position:relative;margin-left:0px;margin-top:80px;text-align:center;line-height:39px;">
                 <p style="font-size:28px">地方政府</p>
                 <p style="font-size:24px">交通运输和</p>
                 <p style="font-size:24px">城市规划人员可以</p>
                </div>
            </div>


            

           <div style=" border-radius: 150px;width: 300px;height: 300px;border: 2px solid #053085;background:#053085;position:relative;margin-top:-170px;margin-left:1640px;"  @click="isShow4 && start4()">
                <div style="color:#fff;position:relative;margin-left:0px;margin-top:80px;text-align:center;line-height:39px;">
                 <p style="font-size:28px">动态GIS数据</p>
                 <p style="font-size:24px">可实现高效且</p>
                 <p style="font-size:24px">可持续的运营</p>
                 
                </div>
            </div>


            
              <img src="@/assets/img/2-6-14.png" id="o"  />
              <img src="@/assets/img/2-6-15.png" id="p" />
              <img src="@/assets/img/2-6-16.png" id="q" />
           

            <img src="@/assets/img/2-6-17.png" style="position:relative;margin-top:285px;margin-left:540px;" />




        
            
            <img src="@/assets/img/car.png" style="position:absolute;margin-top:-2440px;margin-left:1020px;visibility:hidden;" id="g" />
             <img src="@/assets/img/car.png" style="position:absolute;margin-top:-1970px;margin-left:1540px;visibility:hidden;" id="r" />

              <img src="@/assets/img/car.png" style="position:absolute;margin-top:-1075px;margin-left:994px;visibility:hidden;" id="s"  />

              <img src="@/assets/img/car2.png" style="position:absolute;margin-top:-945px;margin-left:1844px;visibility:hidden;" id="t" />



           
          </div>
            
  </div>


    
          
           

    


</div>
</template>

<script>
export default {
  data () {
    return {
       
       isShow1: true,
        isShow2: false,
         isShow3: false,
          isShow4: false,


      path1: require("@/assets/img/2-6-2.png"),
      path2: require("@/assets/img/2-6-3.png"),
      path3: require("@/assets/img/2-6-4.png")
     
    }
  },
  methods: {
    
    change1() {
       this.path1 = require("@/assets/img/2-6-18.png")
    },
    change2() {
       this.path1 = require("@/assets/img/2-6-2.png")
    },
    change3() {
       this.path2 = require("@/assets/img/2-6-19.png")
    },
    change4() {
       this.path2 = require("@/assets/img/2-6-3.png")
    },
    change5() {
       this.path3 = require("@/assets/img/2-6-20.png")
    },
    change6() {
       this.path3 = require("@/assets/img/2-6-4.png")
    },
   

    jumpRouter(path){
          this.$router.push(path);
    },
    start1() {
      document.getElementById("g").style="animation-play-state: running;",
      document.getElementById("h").style="animation-play-state: running;",
      document.getElementById("i").style="animation-play-state: running;",
      document.getElementById("j").style="animation-play-state: running;"
      // document.getElementById("g").style="animation-play-state: paused;visibility:hidden;"
      this.isShow2 = true;
    },
     start2() {
      document.getElementById("r").style="animation-play-state: running;",
      document.getElementById("k").style="animation-play-state: running;",
      document.getElementById("l").style="animation-play-state: running;",
      document.getElementById("m").style="animation-play-state: running;"
      this.isShow3 = true;
    },
     start3() {
      document.getElementById("s").style="animation-play-state: running;",
      document.getElementById("u").style="animation-play-state: running;",
      document.getElementById("v").style="animation-play-state: running;",
      document.getElementById("w").style="animation-play-state: running;"
      this.isShow4 = true;
    },

     start4() {
      document.getElementById("t").style="animation-play-state: running;",
      document.getElementById("o").style="animation-play-state: running;",
      document.getElementById("p").style="animation-play-state: running;",
      document.getElementById("q").style="animation-play-state: running;"
    },
    
  },
  
    
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  
overflow-x:hidden;
overflow-y:hidden;
}


@keyframes Axis1 {
  0% { transform: translateX(1040px) translateY(-2400px); opacity: 1;} 

  40%{ transform: translateX(1700px)  translateY(-2400px) ;opacity: 1;}

  60% { transform: translateX(1810px)  translateY(-2340px) rotate(50deg);opacity: 1; } 

  80% { transform: translateX(1875px)  translateY(-2210px) rotate(90deg); opacity: 1;} 

  100% { transform: translateX(1840px)  translateY(-2080px) rotate(125deg) ;opacity: 0;} 
  

}

@keyframes show {
   from{
      opacity: 0;
   }
   to{
      opacity: 1;
   }
}




@keyframes Axis2 {
  0% { transform: translateX(1540px) translateY(-2020px); opacity: 1;} 

  /* 5%{ transform: translateX(1200px)  translateY(-2020px) ;opacity: 1;} */

  10%{ transform: translateX(720px)  translateY(-2020px) ;opacity: 1;}

  20% { transform: translateX(590px)  translateY(-1960px) rotate(-55deg);opacity: 1; } 

  30% { transform: translateX(530px)  translateY(-1850px) rotate(-80deg); opacity: 1;} 

  40% { transform: translateX(550px)  translateY(-1720px) rotate(-120deg) ;opacity: 1;} 

  50% { transform: translateX(690px)  translateY(-1590px) rotate(-180deg) ;opacity: 1;} 

  55% { transform: translateX(1000px)  translateY(-1590px) rotate(-180deg) ;opacity: 1;}

  60% { transform: translateX(1670px)  translateY(-1590px) rotate(-180deg) ;opacity: 1;} 

  70% { transform: translateX(1770px)  translateY(-1540px) rotate(-130deg) ;opacity: 1;} 

  75% { transform: translateX(1830px)  translateY(-1450px) rotate(-100deg) ;opacity: 1;} 

  80% { transform: translateX(1830px)  translateY(-1350px) rotate(-60deg) ;opacity: 1;} 

  85% { transform: translateX(1750px)  translateY(-1250px) rotate(-30deg) ;opacity: 1;} 

  90% { transform: translateX(1700px)  translateY(-1230px) rotate(-10deg) ;opacity: 1;} 

  100% { transform: translateX(890px)  translateY(-1220px) ;opacity: 0;} 
  

}



@keyframes Axis3 {
  0% { transform: translateX(1000px) translateY(-1070px); opacity: 1;} 

  100%{ transform: translateX(1540px)  translateY(-1070px) ;opacity: 0;}

}


@keyframes Axis4 {
  0% { transform: translateX(1850px) translateY(-950px); opacity: 1;} 

  10%{ transform: translateX(1850px)  translateY(-890px) ;opacity: 1;}

  20% { transform: translateX(1830px)  translateY(-830px) rotate(45deg);opacity: 1; } 

  30% { transform: translateX(1730px)  translateY(-790px) rotate(90deg); opacity: 1;} 

  35% { transform: translateX(1000px)  translateY(-790px) rotate(90deg); opacity: 1;} 

  40% { transform: translateX(740px)  translateY(-790px) rotate(90deg) ;opacity: 1;} 

  50% { transform: translateX(640px)  translateY(-750px) rotate(45deg);opacity: 1;} 

  60% { transform: translateX(620px)  translateY(-700px) rotate(0deg) ;opacity: 1;} 

  70% { transform: translateX(630px)  translateY(-620px) rotate(-30deg) ;opacity: 1;} 

  80% { transform: translateX(690px)  translateY(-580px) rotate(-90deg) ;opacity: 1;} 

  82% { transform: translateX(1000px)  translateY(-580px) rotate(-90deg) ;opacity: 1;} 

  85% { transform: translateX(1690px)  translateY(-580px) rotate(-90deg) ;opacity: 1;} 

  90% { transform: translateX(1790px)  translateY(-550px) rotate(-45deg) ;opacity: 1;} 

  95% { transform: translateX(1820px)  translateY(-500px) rotate(-10deg) ;opacity: 1;} 

  96% { transform: translateX(1830px)  translateY(-440px) rotate(20deg);opacity: 1;}

  97% { transform: translateX(1810px)  translateY(-390px) rotate(45deg);opacity: 1;}

  100% { transform: translateX(1700px)  translateY(-345px) rotate(90deg);opacity: 0;}
  

}




.a{
  
    background: url(../assets/img/2-6-1.png) no-repeat center;
    width: 100%;
    height: 3639px;
     background-size:100% 100%;
    overflow: hidden;
    
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

#g{
 
 animation-name:  Axis1 ; 
 animation-duration: 10s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
   
}

#r{
   animation-name:  Axis2 ; 
 animation-duration: 15s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}

#s{
  
   animation-name:  Axis3 ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}

#t{
  
   animation-name:  Axis4 ; 
 animation-duration: 10s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}


#h{

position:relative;margin-left:1010px;top:-120px;opacity:0;

   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}

#i{

  position:relative;margin-left:1050px;top:-195px;opacity:0;
  
   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
 animation-delay: 2s;
}

#j{
position:relative;margin-left:1100px;top:-270px;opacity:0;

   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
 animation-delay: 4s;
}


#k{

 opacity: 0;

   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards; 
 animation-delay: 4s;
}

#l{

 opacity: 0;
  
   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
 animation-delay: 2s;
}

#m{

 opacity: 0;
   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;

}



#o{
   position:relative;margin-top:-160px;margin-left: 890px;opacity: 0;

animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}

#p{
   position:relative;margin-top:-132px;margin-left: 1235px;opacity: 0;

animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
  animation-delay: 2s;
}

#q{
   position:relative;margin-top:-135px;margin-left: 890px;opacity: 0;

animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
  animation-delay: 4s;
}

#u{
  position: relative;margin-top: 160px;margin-left: 700px;opacity: 0;

   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
}

#v{
  position: relative;margin-left: 1140px;margin-top:-215px;opacity: 0;

  animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
   animation-delay: 2s;
}

#w{
   position: relative;margin-left: 1140px;margin-top:-38px;opacity: 0;

   animation-name:  show ; 
 animation-duration: 3s; 
 animation-timing-function: ease-out; 
 animation-iteration-count: 1;
 animation-play-state: paused; 
 animation-fill-mode:forwards;
   animation-delay: 4s;
}








</style>