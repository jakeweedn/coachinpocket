<script setup>
import { AppState } from '@/AppState.js';
import RouteCard from '@/components/globals/RouteCard.vue';
import ModalWrapper from '@/components/ModalWrapper.vue';
import RouteDetails from '@/components/RouteDetails.vue';
import { RouteSection } from '@/models/RouteSection.js';
import { computed, ref } from 'vue';


const routes = computed(() => {
    if (selectedWallSection.value == 'All') {
        return AppState.routes

    }

    return AppState.routes.filter(route => route.wallSection == selectedWallSection.value)


})

const selectedWallSection = ref('All')


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