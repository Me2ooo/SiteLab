<template>
  <div id="app">
    <div id="header" v-bind:style="{ 'margin-left': headerMargin }">
      <span style="cursor:pointer;" v-on:click="openMenu">&#9776;</span>
      <!-- <router-link to="/"> Welcome to Sitelab</router-link> -->
      <p style="display:inline;"> Welcome to Sitelab</p>
    </div>
    <div id="nav" v-bind:style="{ width: navWidth }">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeMenu">&times;</a>
      <router-link to="/login" v-on:click.native="closeMenu">Hello, Login</router-link>
      <router-link to="/project" v-on:click.native="closeMenu">Project</router-link>
      <router-link to="/profile" v-on:click.native="closeMenu">Profile</router-link>
      <router-link to="/portfolio" v-on:click.native="closeMenu">Portfolio</router-link>
      <router-link to="/about" v-on:click.native="closeMenu">About Us</router-link>
      <router-link to="/theme" v-on:click.native="closeMenu">Theme</router-link>
      <router-link to="/" v-on:click.native="closeMenu">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navWidth: 0,
      headerMargin: '-8px'
    }
  },
  methods: {
    openMenu: function () {
      if (this.headerMargin === '-8px' && this.navWidth === 0) {
        this.headerMargin = '242px'
        this.navWidth = '250px'
      } else {
        this.navWidth = 0
        this.headerMargin = '-8px'
      }
    },
    closeMenu: function () {
      this.navWidth = 0
      this.headerMargin = '-8px'
    }
  }
}
</script>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

#nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f2f2f2;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #808080;
    display: block;
    transition: 0.3s;

    &.router-link-exact-active {
      color: #404040;
    }
  }
  a:hover {
    color: #111;
  }

  .closebtn {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 25px;
    margin-left: 50px;
  }
}

#header {
  width: 100%;
  height: 20px;
  padding: 20px;
  background-color: #405984;
  color: #131b27;
  font-family: Georgia, serif;
  font-size: 25px;
  margin-top: -16px;
  margin-left: -8px;
  vertical-align: middle;
  transition: margin-left 0.5s;
}

@media (prefers-color-scheme: dark) {

}
</style>
