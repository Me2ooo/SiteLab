<template>
  <div class="login-form">
    <div class="box-wrapper" :class="{active:logginIn}">
      <div v-if="logginIn">
        <p>User login</p>
        <form>
          <input type="email" placeholder="Email" v-model="form.email">
          <span class="error-messages" v-if="emailError">Invalid email address</span>
          <input type="password" placeholder="Password" v-model="form.password">
          <span class="error-messages" v-if="passwordError">Invalid password</span>
        </form>
        <button @click="login">Login</button>
        <p style="cursor:pointer;" v-on:click="changeForm">Register?</p>
      </div>
      <div class="box-wrapper" v-else>
        <p>Create an account</p>
        <form>
          <input type="email" placeholder="Email" v-model="form.email">
          <input type="password" placeholder="Password" v-model="form.password">
        </form>
        <button @click="register">Register</button>
        <p style="cursor:pointer;" v-on:click="changeForm">Login?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      logginIn: true,
      emailError: false,
      passwordError: false,
      existed: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    changeForm () {
      this.logginIn = !this.logginIn
      this.form.email = ''
      this.form.password = ''
    },
    login () {

    },
    register () {

    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  width: 200px;
  height: 200px;
}
</style>
