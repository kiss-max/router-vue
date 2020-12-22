<template>
  <div>
    <input type="text" v-model.number="first" />
    <select v-model="ope">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="text" v-model.number="second" />
    <span>={{ result }}</span>
    <div class="cmp" @click="comput">计算</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      first: "",
      second: "",
      ope: "+",
      result: "",
    }
  },
  methods:{
    comput() {
      switch (this.ope) {
        case "+": {
          this.result = parseInt(this.first) + parseInt(this.second);
          break;
        }
        case "-": {
          this.result = parseInt(this.first) - parseInt(this.second);
          break;
        }
        case "*": {
          this.result = parseInt(this.first) * parseInt(this.second);
          break;
        }
        case "/": {
          this.result = parseInt(this.first) / parseInt(this.second);
          break;
        }
      }
  }
  }
}
</script>

<style lang="scss" scope>
.cmp{
  width: 50px;
  height: 30px;
  background: chartreuse;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>