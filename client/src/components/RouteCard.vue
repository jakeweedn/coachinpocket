<script setup>
import { Route } from '@/models/Route.js';
import { routesService } from '@/services/RoutesService.js';
import { ref } from 'vue';


const props = defineProps({

    route: { type: Route, required: true },
    yo: { type: Object }
})

function setActiveRoute() {

    routesService.setActiveRoute(props.route)
}


// Will move formData to a different page if need be 
// const data = ref({
//     completed: ''


// })
</script>


<template>

    <div class="d-flex flex-row">
        <input v-model="yo.completed" type="checkbox" class="form-check-input m-2">

        <div @click="setActiveRoute()" data-bs-toggle="modal" data-bs-target="#active-route-modal">
            <h2>{{ route.color }}
                <span> {{ route.grade }}</span>



            </h2>
        </div>
    </div>



</template>


<style lang="scss" scoped></style>