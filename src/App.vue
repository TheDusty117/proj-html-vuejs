<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';



</script>

<template>
  
  <Header/>
  <Main/>
  <Footer/>

</template>

<style lang="scss">

@use './style/general.scss' as *;

body{
  background-color: rgb(107, 107, 107);
}

</style>
