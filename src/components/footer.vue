<template>
  <div id="footer">
    <ul class="justify">

      <li class="box">
        <router-link to="/shopList">
          <span class="icon icon_a icon-classify"></span>
          <span class="icon icon_b icon-selected"></span>
          <p>商品分类</p>
        </router-link>
      </li>
      <li class="box">
        <router-link to="/car">
          <span class="icon icon_a icon-cart_nomal"></span>
          <span class="icon icon_b icon-cart_selected"></span>
          <p>购物车</p>
          <em>99+</em>
        </router-link>
      </li>
      <li class="box">
        <router-link to="/center">
          <span class="icon icon_a icon-tab_nomal"></span>
          <span class="icon icon_b icon-tab_selected"></span>
          <p>个人中心</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footerDiv',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

