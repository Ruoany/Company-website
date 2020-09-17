<template>
  <div class="a">
         <p style="position:relative;width:364px;color:#fff;font-size:40px;margin:0 auto;margin-top:100px;">Mobileye 数据服务 </p>
         <p style="position:relative;width:378px;color:#fff;font-size:16px;margin:0 auto;margin-top:20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;借助AI驱动的道路勘测技术加快维护操作</p>
  
        
            <ol style="display:flex;width:1200px;margin:0 auto;position:relative;margin-top:56px;">
              <li style=" width:200px;height:200px;background:#fff;border-radius: 100px;">
                <img src="@/assets/img/2-6-2.png" style="width:117px;position:relative;top:53px;left:32px;" />
                 <p style="font-size:24px;color:#fff;position:relative;top:140px;left:35px;">道路资产调查</p>
                 <p style="font-size:18px;color:#fff;position:relative;top:190px;left:-20px;width:500px;">进行有效的资产管理和维护计划</p>
              </li>
               <li style=" width:200px;height:200px;background:#fff;border-radius: 100px;position:relative;margin-left:300px;">
                <img src="@/assets/img/2-6-3.png" style="width:70px;position:relative;top:23px;left:62px;" />
                 <p style="font-size:24px;color:#fff;position:relative;top:70px;left:35px;">路面状况评估</p>
                 <p style="font-size:18px;color:#fff;position:relative;top:120px;width:500px;left:15px;">用于数据驱动的道路维护</p>
              </li>
               <li style=" width:200px;height:200px;background:#fff;border-radius: 100px;position:relative;margin-left:300px;">
                <img src="@/assets/img/2-6-4.png" style="width:117px;position:relative;top:53px;left:42px;" />
                 <p style="font-size:24px;color:#fff;position:relative;top:110px;left:35px;">动态交通图</p>
                 <p style="font-size:18px;color:#fff;position:relative;top:160px;left:10px;width:500px;">用于基于证据的城市规划</p>
              </li>
            </ol>
         
            
            <div>
               <img src="@/assets/img/2-6-5.png" style="position:relative;width:1411px;margin:0 auto;margin-top:443px;" />
               <div @mouseover="isShow1 = true" style="width:300px;height:300px;background:#053085;border-radius: 150px;position:relative;margin-top:-2401px;margin-left:682px;">
                 <p style="color:#fff;font-size:24px;position:relative;top:70px;left:60px;line-height:42px;"><span style="font-size:28px;">公共工程部门</span><br/>
                    &nbsp;&nbsp;公用事业公司<br />
                     &nbsp;&nbsp; &nbsp;和运输当局<br/>
                     &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;可以
                    </p>
               </div>
                 <div v-show="isShow1">
                   <img src="@/assets/img/2-6-7.png" style="position:absolute;margin-left:970px;margin-top:-110px;" />
                   <img src="@/assets/img/2-6-8.png" style="position:absolute;margin-left:1010px;margin-top:-25px;" />
                   <img src="@/assets/img/2-6-9.png" style="position:absolute;margin-left:1060px;margin-top:90px;" />
                 </div>

                 <div  @mouseover="isShow2 = true"  style="width:300px;height:300px;background:#053085;border-radius: 150px;position:relative;margin-top:120px;margin-left:1782px;">
                     <p style="color:#fff;font-size:24px;line-height:42px;position:relative;margin-left:60px;top:90px;"><span style="font-size:28px;">&nbsp;&nbsp;&nbsp;&nbsp;交通部门</span><br/>
                       &nbsp;&nbsp; 道路运营商和<br/>
                        道路维护专家可以:</p>
                 </div>

                 <div style="display:flex;position:absolute;margin-top:-230px;" v-show="isShow2" >
                   <img src="@/assets/img/2-6-10.png" style="position:absolute;margin-left:830px;margin-top:180px;" />
                    <img src="@/assets/img/2-6-11.png" style="position:absolute;margin-left:1150px;margin-top:180px;" />
                     <img src="@/assets/img/2-6-12.png" style="position:absolute;margin-left:1450px;margin-top:180px;" />
                 </div>

                 
                 <img src="@/assets/img/2-6-13.png" style="position:absolute;margin-left:590px;margin-top:470px;" />
                 
                 <div  @mouseover="isShow3 = true" style="width:300px;height:300px;background:#053085;border-radius: 150px;position:relative;margin-top:760px;margin-left:1782px;">
                      <p style="color:#fff;font-size:24px;position:relative;margin-left:80px;top:100px;line-height:42px;"><span style="font-size:28px;">动态GIS数据</span><br/>
                          &nbsp;可实现高效且<br/>
                          &nbsp;可持续的运营</p>
                 </div>

                 <div style="position:absolute;margin-left:0px;margin-top:-45px;" v-show="isShow3">
                    <img src="@/assets/img/2-6-14.png" style="position:relative;margin-left:1030px;margin-top:-140px;"/>
                     <img src="@/assets/img/2-6-15.png" style="position:relative;margin-left:1375px;margin-top:-135px;"/>
                      <img src="@/assets/img/2-6-16.png" style="position:relative;margin-left:1030px;margin-top:-135px;"/>
                 </div>

                 <img src="@/assets/img/2-6-17.png" style="position:absolute;margin-left:620px;margin-top:420px;"/>

            </div>

  
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow1: false,
      isShow2: false,
      isShow3: false
     
    }
  },
  methods: {
    changeShow1 () {
      this.isShow1 = true;
    }
  }
    
}
</script>


<style scoped>

*{
    margin: 0;
    padding: 0;
}

.a{
   background: url(../assets/img/2-6-1.png) no-repeat center fixed;
    width: 100%;
    height: 3439px;
     background-size:cover;
    overflow: hidden;
}

</style>