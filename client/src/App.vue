<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="container">
    <RouterView />
  </main>
  <!-- <footer class=" text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by Asana Climbing
  </footer> -->
</template>

<style lang="scss">
main {

  background-color: red;

}
</style>
