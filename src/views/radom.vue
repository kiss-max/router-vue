<template>
  <div class="random">
      <input type="text" v-model="name">
      <button @click="add" :disabled="this.name==''">添加</button>
      <button @click="suiji" :disabled="this.arr.length==0">随机</button>
      <button @click="stopp" :disabled="this.arr.length==0">停</button>
      <div class="shuzu">
        <h2 v-if="!this.arr.length==0">添加的所有数据</h2>
        <span v-for="(item,index) in arr" :key="index">
          {{item}}
        </span>
      </div>
      <div class="shuzu">
        <h2 v-if="!this.arr.length==0">随机数据</h2>
        {{arr1}}
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      name:'',
      arr:[],
      arr1:'',
    }
  },
  methods:{
    add(){
      this.arr.push(this.name)
      this.name=''
      console.log(this.arr)
    },
    suiji(){
      this.start=setInterval(() => {
        this.arr1=this.arr[Math.floor(Math.random() * this.arr.length)]
      }, 10);
    },
    stopp(){
      clearInterval(this.start)
    },
  }
}
</script>

<style>
.shuzu{
  width: 500px;
  height: 250px;
  border: 1px solid red;
  margin: 10px auto;
}
</style>