<template>
<div>
  <button class="left-btn" v-on:click="leftCard">&#10094;</button>
  <div class="cards-wrapper">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
    <div class="card">5</div>
    <div class="card">6</div>
    <div class="card_center">center</div>
    <div class="card">6</div>
    <div class="card">5</div>
    <div class="card">4</div>
    <div class="card">3</div>
    <div class="card">2</div>
    <div class="card">1</div>
  </div>
  <button class="right-btn" v-on:click="rightCard">&#10095;</button>
</div>
</template>

<script>
export default {
  name: 'TipCards',
  method: {
    leftCard: function () {

    },
    rightCard: function () {
      this.scrollLeft -= 100
    }
  }
}
</script>

<style lang="less" scoped>
.cards-wrapper {
  float: left;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  overflow-x: hidden;
  box-sizing: border-box;
  width: 70%;
  height: 500px;
  margin: auto;
  margin-left: calc(100vw/2 - 35vw - 10vw); // window width /2 - wrapper width /2 - button width

  .card_center {
    flex: 0 0 auto;
    width: 500px;
    height: 300px;
    margin: 10px;
    background-color: #f2f2f2;
  }

  .card {
    flex: 0 0 auto;
    width: 500px;
    height: 300px;
    margin: 10px;
    background-color: #f2f2f2;
  }
}

button {
  background: none;
  border: none;
  outline:none;
  width: 10%;
  height: 300px;
  color: #f2f2f2;
  font-size: 180px;
  text-align: center;
  cursor: pointer;
  transition: color 0.5s;
}
button:hover {
    color: #111;
}
button:active {
  transition: font-size 0.1s;
  font-size: 178px;
}

.left-btn {
  float: left;
}
.right-btn {
  float: right;
}
</style>
