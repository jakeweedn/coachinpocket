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

<!-- // async function listRoutesBySection(routeSection) {

//     try {

//         await routesService.listRoutesBySection(routeSection)


//     }

//     catch (error) {
//         Pop.error(error)
//         logger.error(error)


//     }
// }

// async function getRoutesBySection() {

//     try {

//         const sectionId = route.params.routeSectionId //id of active route section (see computed)
//         // const wallSection = route.params.wallSection
//         logger.log('Getting the wall section', sectionId)
//         await routesService.getRoutesBySection(sectionId)

//     }

//     catch (error) {
//         Pop.error(error, "Could not get routes that belong to this section!")
//         logger.error(error)
//         router.push({ name: 'Home' })


//     }
// } -->