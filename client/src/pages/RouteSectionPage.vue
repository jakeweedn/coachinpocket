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
import RouteForm from '@/components/RouteForm.vue';



const routeSection = computed(() => AppState.activeRouteSection)
const routes = computed(() => AppState.routes)
// const routeSections = computed(() => AppState.routeSections)

const account = computed(() => AppState.account)


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




//Or should it be create Route Log
async function updateRouteLog() {

    try {

        logger.log("Updating to", routeLogData.value)
        await routeLogService.updateRouteLog(routeLogData.value)


    }

    catch (error) {
        Pop.error(error, "Could not update route log")
        logger.error(error)


    }
}

const routeLogData = ref({
    completed: ''


})

// const routeLogData = ref("")

// Not convinced simply declaring formData twice will solve problem, (variable scope), but I need to get moving. If I do use a prop, keep original formData over here and put prop on routeCard to keep things from getting confusing


async function deleteRouteSection() {
    try {
        const sectionId = route.params.routeSectionId
        await routeSectionsService.deleteRouteSection(sectionId)
        Pop.success('This route section was successfully deleted.')

    }

    catch (error) {

        Pop.toast("Could not delete this route section.")


    }


}


</script>


<template>

    <main class="container">

        <h1 class="text-center" v-if="routeSection"> {{ routeSection.name }} </h1>
        <div class="row">

            <div v-if="account" class="d-flex justify-content-between">
                <button @click="deleteRouteSection()" class="btn btn-info w-25 m-2"> 🗑 Section </button>


                <button class="btn btn-primary w-25 my-2" data-bs-toggle="modal" data-bs-target="#route-form-modal">
                    +
                    Route
                </button>

            </div>



            <!-- <RouteForm> </RouteForm> -->

            <ModalWrapper modalId="route-form-modal" modalTitle="Route Form Modal">
                <RouteForm />


            </ModalWrapper>


            <!-- Form for routelog. Does this formatting work? Where to put formData ref??  -->
            <form @submit.prevent="updateRouteLog()">
                <div v-for="route in routes" :key="route.id">

                    <RouteCard :route="route" v-model="routeLogData" />
                    <!-- <RouteCard :routeLogValue = "routeLogData"
                     @update: modelValue /> -->


                </div>

                <button class="btn btn-warning"> (Update Route Log/) Get Feedback!</button>

            </form>

            <ModalWrapper modalId="active-route-modal" modalTitle="Active Route Modal">
                <RouteDetails />


            </ModalWrapper>


        </div>




    </main>






</template>


<style lang="scss" scoped></style>