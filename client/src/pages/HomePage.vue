<script setup>
import { AppState } from '@/AppState.js';
import { routeSectionsService } from '@/services/RouteSectionsService.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';


// const routes = computed(() => AppState.routes)
// const routeSections = computed(() => AppState.routeSections)

// Above what I did before. Redoing it below... 



const routes = computed(() => {
  if (selectedWallSection.value == 'all') {
    return AppState.routes

  }

  return AppState.routes.filter(route => route.wallSection == selectedWallSection.value)


})

const routeSections = computed(() => AppState.routeSections)







const account = computed(() => AppState.account) //come back, do we need on this app? 
const selectedWallSection = ref('all')


// const wallSections = [
//   {
//     name: 'all',
//     // backgroundImg: 

//     name: {{ routeSection.name }}
//     // // backgroundImg: 

//   }


// ]


//I'm not even sure I need the above section since I already have model and schema for route section... Maybe for all, hmmm....




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



  <section class="container">

    <div v-for="routeSection in routeSections" :key="'filter button-' + routeSection.name">

      <div @click="selectedWallSection = routeSection.name" role="button">
        {{ routeSection.name }}

      </div>




    </div>

  </section>

</template>

<style scoped lang="scss"></style>
