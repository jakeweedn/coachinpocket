<script setup>
import { Route } from '@/models/Route.js';


defineProps({

    route: { type: Route, required: true }
})

</script>


<template>

    <div class="d-flex flex-row">
        <input type="checkbox" class="form-check-input m-2">
        <h2>{{ route.color }}
            <span> {{ route.grade }}</span>



        </h2>
    </div>


</template>


<style lang="scss" scoped></style>