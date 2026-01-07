<script setup>
import { Route } from '@/models/Route.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const props = defineProps({

    route: { type: Route, required: true },
    modelValue: { type: Object }
})

//I think the above has to be modelValue from video but not 100% sure... 

function setActiveRoute() {

    routesService.setActiveRoute(props.route)
}


// Will move formData to a different page if need be 
// const data = ref({
//     completed: ''


// })


async function deleteRoute() {

    const confirmed = await Pop.confirm('Are you sure you want to delete this route?')

    if (!confirmed) {
        return


    }

    try {
        logger.log('Delete that route')
        const routeId = props.route.id
        await routesService.deleteRoute(routeId)

    }

    catch (error) {
        Pop.error(error)
        logger.error('COULD NOT DELETE THAT ROUTE')


    }




}

</script>


<template>

    <div class="d-flex flex-row">
        <label for="route-completed"></label>
        <input type="checkbox" class="form-check-input m-2" name="route-completed" :value="modelValue"
            @input="$emit('update: modelValue', $event.target.value)">

        <!-- ts ignore?? -->

        <div @click="setActiveRoute()" data-bs-toggle="modal" data-bs-target="#active-route-modal">
            <h2>{{ route.color }}
                <span> {{ route.grade }}</span>
                <span @click="deleteRoute()"> 🗑 </span>
                <!-- Will need something analogous to v-if account above, but for setter accounts. Will have to ask Jake here...  -->



            </h2>
        </div>
    </div>




</template>


<style lang="scss" scoped></style>