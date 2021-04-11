<template>
  <div class="">
    <div class="navbar">
        <button class="" v-on:click="func">1</button>
        <button class="" v-on:click="func">2</button>
        <button class="" v-on:click="func">3</button>
    </div>
    <div class="toolbox">
      <div class="buttons">
        <button class="pointer" v-on:click="func">&#128433;</button>
        <button class="text" v-on:click="func">1</button>
        <button class="image" v-on:click="func">2</button>
        <button class="button" v-on:click="func">3</button>
        <button class="" v-on:click="func">1</button>
        <button class="" v-on:click="func">2</button>
        <button class="" v-on:click="func">3</button>
      </div>
    </div>
    <BrowserWindow/>
  </div>
</template>

<script>
import BrowserWindow from '@/components/BrowserWindow.vue'

export default {
  name: 'Project',
  components: {
    BrowserWindow
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 60px;
  min-height: 60px;
  background-color: #e6e6e6;
  border-style: solid;
  border-color: #bfbfbf;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;

  .buttons {
    position: absolute;
    top: 5px;
    left: 1%;
    width: 98px;
    display: grid;
    grid-template-columns: repeat(20,5%);
    grid-template-rows: repeat(1,5%);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

.toolbox {
  width: 200px;
  min-width: 200px;
  height: 85vh;
  background-color: #e6e6e6;
  border-style: solid;
  border-color: #bfbfbf;
  overflow: hidden;
  position: relative;
  // float: left;

  .buttons {
    position: absolute;
    top: 20px;
    left: 1%;
    width: 98%;
    display: grid;
    grid-template-columns: repeat(2,50.67%);
    grid-template-rows: repeat(20,25%);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

button {
  outline:none;
  cursor: pointer;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 10%;
  height: 90px;
  appearance: none;
  background-color: #cccccc;
  font-size: 40px;
  color: #f2f2f2;
  border: none;
  transition: all .2s;
  text-align: center;
  line-height: 90px;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
}
button:hover {
  color: #111;
  background-color: #bfbfbf;
}
button:active {
  transition: font-size 0.1s;
  font-size: 39px;
}

</style>
