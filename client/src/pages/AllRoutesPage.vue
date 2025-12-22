<script setup>
import { AppState } from '@/AppState.js';

import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

//Do I need a filter like below or just a getRoutesBySection?? 

// const routes = computed(() => AppState.routes.filter(route => route.routeSection == routeSection))

const routes = computed(() => AppState.routes)
const routeSections = computed(() => AppState.routeSections)

const route = useRoute()
const router = useRouter()

onMounted(() => {

    // getRoutesBySection()



})

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


// }







</script>


<template>
    <h2 class="text-center"> All routes </h2>

    <div v-for="routeSection in routeSections">

        <h4> {{ routeSection.name }} </h4>

        <div v-for="route in routes">

            <input type="checkbox" class="form-check-input m-2" name="route-completed">
            <p> {{ route.color }} {{ route.grade }}</p>

            <!-- Should probably just put the routeCard above... -->


        </div>


    </div>









</template>


<style lang="scss" scoped></style>