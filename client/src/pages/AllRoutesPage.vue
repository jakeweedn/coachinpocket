<script setup>
import { AppState } from '@/AppState.js';
import RouteCard from '@/components/RouteCard.vue';

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

    // listRoutesBySection()
    // getRoutesBySection()

    getRoutes()


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







</script>


<template>
    <main>
        <h2 class="text-center"> All routes </h2>


        <div v-for="routeSection in routeSections" :key="routeSection.id">

            <div v-if="routeSection">
                <h1> {{ routeSection.name }} </h1>
            </div>



            <div v-if="route">
                <div v-for="route in routes.filter(r => r.routeSectionId === routeSection.id)" :key="route.id">

                    <!-- <input type="checkbox" class="form-check-input m-2" name="route-completed">
            <p> {{ route.color }} {{ route.grade }}</p> -->

                    <RouteCard :route="route" />



                    <!-- Should probably just put the routeCard above... -->



                </div>
            </div>



        </div>







        <button class="btn btn-warning"> Get Feedback!</button>
    </main>
</template>


<style lang="scss" scoped></style>