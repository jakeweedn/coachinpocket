<script setup>
import { AppState } from '@/AppState.js';
import { routeSectionsService } from '@/services/RouteSectionsService.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const routes = computed(() => AppState.routes)
const routeSections = computed(() => AppState.routeSections)

onMounted(() => {

  getRoutes()
  getRouteSections()




})



async function getRoutes() {

  try {
    await routesService.getRoutes()


  }

  catch (error) {

    Pop.error(error)
    logger.error(error)
  }

}
async function getRouteSections() {

  try {
    await routeSectionsService.getRouteSections()

  }

  catch (error) {

    Pop.error(error)
    logger.error(error)
  }
}




</script>

<template>

  <h1 class="text-center"> Hello what's up </h1>









  <div v-for="route in routes" :key="route.id">




    <div v-if="route">
      <p> {{ routes }}</p>


      <p> {{ route.color }} </p>

      <h3>{{ routeSections }} </h3>
    </div>






  </div>


  <div v-for="routeSection in routeSections" :key="routeSection.id">

    <p> {{ routeSection.name }}</p>

  </div>
</template>

<style scoped lang="scss"></style>
