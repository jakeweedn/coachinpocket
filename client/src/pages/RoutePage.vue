<script setup>
import { AppState } from '@/AppState.js';
import RouteCard from '@/components/globals/RouteCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import RouteDetails from '@/components/RouteDetails.vue';
import { RouteSection } from '@/models/RouteSection.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const routes = computed(() => AppState.routes)
const wallSections = computed(() => AppState.routeSections)


// Trying Jeremy's suggestion below..

const route = useRoute()
const router = useRouter()

onMounted(() => {
    getRoutesBySection()

})

watch(route, () => {
    getRoutesBySection()

})

async function getRoutesBySection() {

    try {

        const wallSection = route.params.wallSection
        logger.log('Getting the wall section', wallSection)
        await routesService.getRoutesBySection(wallSection)

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