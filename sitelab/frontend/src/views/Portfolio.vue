<template>
  <div class="portofolio">
    <h1>This is a portofolio </h1>
    <p> <img src="@/port-img/1.png" width="630" height="280"></p>
    <p> <img src="@/port-img/2.png" width="630" height="280"></p>
    <p> <img src="@/port-img/3.png" width="630" height="280"></p>
    <p> <img src="@/port-img/4.png" width="630" height="280"></p>
    <p> <img src="@/port-img/5.png" width="630" height="280"> <br> <br> <br> <br> <br></p>
    <Footer/>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
  name: 'porotoflio',
  components: {
    Footer
  }
}
</script>
