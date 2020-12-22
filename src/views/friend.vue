<template>
<div>
  <div class="friend" v-if="shown">
      <div class="header">
        <div @click="openn" class="camera">相机</div>
        <p class="name">王嘉磊</p>
        <div class="img"></div>
      </div>
      <div class="contain">
        <div class="item" v-for="(item, index) in fri" :key="index"> 
          <div class="item_left">
            <img class="headxiang" :src="item.head" alt="">
          </div>
          <div class="item_right">
            <div class="frititle">{{item.name}}</div>
            <div class="fritext">{{item.text}}</div>
            <div v-if="!item.pic==''" class="pics">
              <img class="pic" :src="item.pic" alt="">
            </div>
            <div class="fabutime">
              {{item.time}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="send" v-if="!shown">
      <div class="fabu_head">
        <span>取消</span>
        <span :disabled="[!xiangfa=='']" :class="[!xiangfa==''?'fabubtn':'fabubtn1']" @click="fabu">发布</span>
      </div>
      <div>
        <textarea 
          v-model="xiangfa"
          class="kuang" 
          cols="30" 
          rows="10" 
          placeholder="这一刻的想法..."></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      xiangfa:'',
      shown:true,
      fri:[
        {
          head:require('../assets/img/head.jpg'),
          name:'马云',text:'今天的成果',
          pic:require('../assets/img/name.jpg'),
          time:'2小时前'
        },
        {
          head:require('../assets/img/head.jpg'),
          name:'马云',text:'今天的成果',
          // pic:require('./assets/img/name.jpg'),
          time:'2小时前'
        },
      ],
    }
  },
  methods:{
    fabu(){
      if(this.xiangfa!=''){
        this.fri.unshift({head:require('../assets/img/head.jpg'),
          name:'我',text:this.xiangfa,
          time:'刚刚'})
      console.log(this.fri)
      this.xiangfa=''
      this.shown=true
      }
      
    },
    openn(){
      this.shown=false
    },
  }
}
</script>

<style>
.header {
      /* width: 100%; */
      height: 250px;
      background: yellowgreen;
      position: relative;
    }
    .name {
      position: absolute;
      bottom: -15px;
      right: 130px;
      font-size: 20px;
      color: white;
    }
    .img {
      width: 100px;
      height: 100px;
      background: orange;
      position: absolute;
      bottom: -50px;
      right:25px;
      border-radius: 15px;
    }
    .camera {
      width: 60px;
      height: 60px;
      background: #ffffff;
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contain{
      /* width: 100%; */
      height: auto;
      /* background: chocolate; */
      padding-top: 50px;
    }
    .item{
      padding-top: 30px;
      width: 100%;
      height: auto;
      /* background: rgb(133, 145, 145); */
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid rgb(133, 145, 145);
    }
    .item_left{
      width: 15%;
      height: auto;
      margin-right: 20px;
    }
    .headxiang{
      width: 60px;
      height: 60px;
      
    }
    .item_right{
      display: flex;
      flex-direction: column;
    }
    .frititle{
      font-size: 25px;
      color: rgb(30, 63, 211);
    }
    .fritext{
      margin-top: 6px;
      font-size: 20px;
    }
    .pics{
      display: flex;
      margin-top: 10px;
    }
    .pic{
      width: 100px;
      height: 100px;
      margin-right: 5px;
    }
    .fabutime{
      margin-top: 20px;
      height: 50px;
      color: rgb(216, 209, 209);
    }
    .send{
      width: 100%;
      height: 50px;
      /* background: orange; */
    }
    .fabu_head{ 
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .fabubtn{
      background: rgb(30, 247, 138);
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
    .fabubtn1{
      background: rgb(153, 172, 163);
      padding: 5px;
      border-radius: 5px;
      cursor: not-allowed;
    }
    .kuang {
      border: none;
      width:100%;
      height: 300px;
      /* padding-left: 20px; */
      font-size: 30px;
    }
</style>