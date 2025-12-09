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
        const sectionId = route.params.routeSectionId //id of active route section (see computed)

        logger.log('Getting the route section', sectionId)

        await routeSectionsService.getRouteSectionById(sectionId)



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



</script>


<template>

    <section class="container">
        <div class="row">
            <div v-for="route in routes" :key="route.id">
                <RouteCard :route="route" />


            </div>

            <ModalWrapper modalId="active-route-modal" modalTitle="Active Route Modal">
                <RouteDetails />


            </ModalWrapper>



        </div>



    </section>

</template>


<style lang="scss" scoped></style>