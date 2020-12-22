<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/first">First</router-link> -->
      <div class="title">
        <h1>往期作业成果</h1>
      </div>
      <router-link to="/radom">1</router-link>
      <div class="contain">
          <div class="nav">
          <div class="item" 
          v-for="(item,index) in nav" 
          :key="index"
          @click="hadlerTo(item.url)"
          >
          {{item.name }}</div>
        </div>
        <div class="main">
          <router-view />
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>

export default {
  data(){
    return{
      nav:[
        {name:'计算器',url:'/compute'},
        {name:'朋友圈',url:'/friend'},
        {name:'随机点名系统',url:'/radom'},
      ]
    }
  },
  methods:{
    hadlerTo(url){
      if (this.$route.path !== url) {
        this.$router.push({
        path:url,
      })
      }
      
    }
  }

}
</script>
<style>
.active{
  color: red;
}
html,body{
  padding: 0;
  margin: 0;
}
.title{
  /* position: fixed;
  top: 0; */
  width: 100%;
  height: 60px;
  background: rgb(231, 227, 210);
  display: flex;
  justify-content: center;
  align-items: center;
}
.contain{
  display: flex;
  flex-direction: row;
}
.nav{
  width: 200px;
  height: auto;
  background: rgb(177, 230, 221);
}
.item{
  width: 200px;
  height: 50px;
  background: rgb(202, 240, 216);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(245, 240, 240);
}
</style>
