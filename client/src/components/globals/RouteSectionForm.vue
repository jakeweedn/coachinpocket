<script setup>
import { routeSectionsService } from '@/services/RouteSectionsService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const routeSectionData = ref({
    name: '',

})

async function createRouteSection() {

    try {

        await routeSectionsService.createRouteSection(routeSectionData.value)
    }

    catch (error) {
        Pop.toast("Could not create album", "error")


    }

}

</script>


<template>

    <form @submit.prevent="createRouteSection()" class="row">

        <label for="route-section-name"> Route Section Name </label>
        <input v-model="routeSectionData.name" type="text" id="route-section-name" name="route-section-name" minlength=3
            maxlength=25 class="form-control w-25" required>



        <button class="btn btn-success w-25" type="submit"> Submit </button>
    </form>

</template>


<style lang="scss" scoped></style>