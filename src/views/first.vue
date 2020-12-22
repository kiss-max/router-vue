<template>
  <div>
    <h1>this is first page</h1>
    <div @click="gotopage('/first/child1')">child1</div>
    <div @click="gotopage('/first/child2')">child2</div>
    <button @click="goback">1</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    gotopage(str) {
      if (this.$route.path !== str) {
        this.$router.push({
          path: str,
          query: {
            id: "123",
          },
          //name:'str',
          // params:{
          //     id:'233'
          // }
        });
        console.log(this.$route);
      }

      //replace
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>