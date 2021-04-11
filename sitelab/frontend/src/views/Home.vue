<template>
  <div class="home">
    <TipCards/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import TipCards from '@/components/TipCards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    TipCards,
    Footer
  }
}
</script>
