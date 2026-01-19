<script setup>
import { AppState } from '@/AppState.js';
import RouteCard from '@/components/RouteCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import RouteDetails from '@/components/RouteDetails.vue';
import { routeSectionsService } from '@/services/RouteSectionsService.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { all } from 'axios';
import { Modal } from 'bootstrap';
import { computed, onMounted, ref } from 'vue';
import RouteSectionForm from '@/components/globals/RouteSectionForm.vue';


// const routes = computed(() => AppState.routes)
// const routeSections = computed(() => AppState.routeSections)

// Above what I did before. Redoing it below... 



const routes = computed(() => {
  if (selectedRouteSection.value == 'All') {
    return AppState.routes

  }

  return AppState.routes.filter(route => route.routeSection == selectedRouteSection.value)


})

const routeSections = computed(() => AppState.routeSections)







const account = computed(() => AppState.account) //come back, do we need on this app? 
const selectedRouteSection = ref('All')


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





    <div class="row m-2">

      <h2 class="text-center"> Sort by Category</h2>

      <!-- <RouteSectionForm> </RouteSectionForm> -->

      <ModalWrapper modalId="route-section-form-modal" modalTitle="Route Section Form Modal">
        <RouteSectionForm />

      </ModalWrapper>


      <button class="btn btn-vue w-25" data-bs-toggle="modal" data-bs-target="#route-section-form-modal"> + Route
        Section </button>



      <div v-for="routeSection in routeSections" :key="'filter button-' + routeSection.name" class="col-sm-3">


        <RouterLink :to="{ name: 'Route Section Page', params: { routeSectionId: routeSection.id } }"
          title="Go to this section's page!">
          <button @click="selectedRouteSection = routeSection.name" class="btn btn-dark m-2">
            {{ routeSection.name }}



          </button>
        </RouterLink>

      </div>



    </div>

    <div class="row d-flex justify-content-center ">
      <h2 class="text-center"> Or see all routes: </h2>

      <RouterLink :to="{ name: 'All Routes Page' }" title="Go to the page with all the routes!">
        <div class="text-center">
          <button class="btn btn-warning w-25 h-50"> All routes</button>
        </div>
      </RouterLink>
    </div>

  </section>

  <!-- Below will be on separate page...  -->

  <section class="container">
    <!-- <div class="row">
      <div v-for="route in routes" :key="route.id">
        <RouteCard :route="route" />


      </div> -->

    <ModalWrapper modalId="active-route-modal" modalTitle="Active Route Modal">
      <RouteDetails />


    </ModalWrapper>



    <!-- </div> -->



  </section>

</template>

<style scoped lang="scss"></style>
