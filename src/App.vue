<template>
  <div id="app">
    <Header style="padding-top:100px"></Header>
    <router-view />
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{

    }
  },
}
</script>

<style>
#app{
  font-family: SourceHanSansSC-Medium;
}
</style>
