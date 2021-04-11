<template>
  <div class="footer">
    <router-link to="/help">Help/Support Centre</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less">
.footer {
    width: 100%;
    padding: 50px;
    background-color: #f2f2f2;
    margin-left: -8px;
    position: fixed; // Cannot be 'fixed;', change and fix horizontal scrollbar
    bottom: 0;
    left: 0;
    bottom: 0;

    a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #808080;

    &.router-link-exact-active {
      color: #404040;
    }
  }
  a:hover {
    color: #111;
  }
}
</style>
