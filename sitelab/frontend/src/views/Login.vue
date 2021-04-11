<template>
  <div class="login">
    <LoginForm/>
    <Footer/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    Footer
  }
}
</script>
