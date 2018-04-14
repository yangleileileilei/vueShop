<template>
  <div id="app">
    <headDiv></headDiv>
    <router-view/>
    <footerDiv></footerDiv>
  </div>
</template>



<script>
  import headDiv from './components/header.vue'
  import footerDiv from './components/footer.vue'
  import '../static/css/page.css?=3'
  import '../static/css/fonts.css?=1'
  import '../static/css/animate.min.css?=2'

  export default {
    name: 'App',
    components:{
      headDiv,footerDiv
    }
  }
</script>
