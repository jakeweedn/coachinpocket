<script setup>
import { AppState } from '@/AppState.js';
import RouteCard from '@/components/RouteCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import RouteDetails from '@/components/RouteDetails.vue';
import { RouteSection } from '@/models/RouteSection.js';
import { routeSectionsService } from '@/services/RouteSectionsService.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routeLogService } from '@/services/RouteLogService.js';


const routeSection = computed(() => AppState.activeRouteSection)
const routes = computed(() => AppState.routes)
// const routeSections = computed(() => AppState.routeSections)


// Trying Jeremy's suggestion below..

const route = useRoute()
const router = useRouter()

onMounted(() => {
    getRouteSectionById()
    getRoutesBySection()

})

watch(route, () => {
    getRouteSectionById()
    getRoutesBySection()

})


async function getRouteSectionById() {
    try {
        const routeSectionId = route.params.routeSectionId //id of active route section (see computed)

        logger.log('Getting the route section', routeSectionId)

        await routeSectionsService.getRouteSectionById(routeSectionId)



    }

    catch (error) {
        Pop.error(error, "Could not get route section!")
        logger.error(error)
        router.push({ name: 'Home' })



    }



}

async function getRoutesBySection() {

    try {

        const sectionId = route.params.routeSectionId //id of active route section (see computed)
        // const wallSection = route.params.wallSection
        logger.log('Getting the wall section', sectionId)
        await routesService.getRoutesBySection(sectionId)

    }

    catch (error) {
        Pop.error(error, "Could not get routes that belong to this section!")
        logger.error(error)
        router.push({ name: 'Home' })


    }


}





async function updateRouteLog() {

    try {

        logger.log("Updating to", routeLogData.value)
        await routeLogService.updateRouteLog()


    }

    catch (error) {
        Pop.error(error, "Could not update route log")
        logger.error(error)


    }
}

const routeLogData = ref({
    completed: ''


})

// Not convinced simply declaring formData twice will solve problem, (variable scope), but I need to get moving. If I do use a prop, keep original formData over here and put prop on routeCard to keep things from getting confusing



</script>


<template>

    <section class="container">
        <div class="row">


            <!-- Form for routelog. Does this formatting work? Where to put formData ref??  -->
            <form @submit.prevent="updateRouteLog()">
                <div v-for="route in routes" :key="route.id">

                    <RouteCard :route="route" />


                </div>

                <button class="btn btn-warning"> (Update Route Log/) Get Feedback!</button>

            </form>

            <ModalWrapper modalId="active-route-modal" modalTitle="Active Route Modal">
                <RouteDetails />


            </ModalWrapper>


        </div>




    </section>






</template>


<style lang="scss" scoped></style>