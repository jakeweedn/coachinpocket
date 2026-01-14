<script setup>
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';



const editableRouteData = ref({
    grade: '',
    color: '',
    routeSection: '',
    // routeSectionId: '',
    gripType: '',
    numberOfMoves: '',
    style: ''


})



async function createRoute() {

    try {

        const route = await routesService.createRoute(editableRouteData.value)

        editableRouteData.value = {

            grade: '',
            color: '',
            routeSection: '',
            // routeSectionId: '',
            gripType: '',
            numberOfMoves: '',
            style: ''

        }


    }

    catch (error) {

        Pop.error(error)
        logger.error('COULD NOT CREATE ROUTE, error')


    }


}

</script>


<template>

    <form @submit.prevent="createRoute()">

        <!-- Maybe only requirement that matters here is required on form??  -->

        <label for="grade"> Grade </label>
        <input v-model="editableRouteData.grade" type="text" class="form-control" id="grade">

        <label for="color"> Color </label>
        <input v-model="editableRouteData.color" type="text" class="form-control" id="color">

        <label for="route-section"> Route Section </label>
        <input v-model="editableRouteData.routeSection" type="text" class="form-control" id="route-section">

        <!-- <label for="route-section-id"> Route Section I.D. </label>
        <input v-model="editableRouteData.routeSectionId" type="text" class="form-control" id="route-section-id"> -->

        <!-- Is the type right above?? -->

        <label for="grip-type"> Grip Type </label>
        <input v-model="editableRouteData.gripType" type="text" class="form-control" id="grip-type">

        <label for="number-of-moves"> Number of Moves </label>
        <input v-model="editableRouteData.numberOfMoves" type="number" class="form-control" id="number-of-moves">

        <label for="style"> Style </label>
        <input v-model="editableRouteData.style" type="text" class="form-control" id="style">


        <button class="btn btn-success" type="submit"> + route</button>


    </form>



</template>


<style lang="scss" scoped></style>