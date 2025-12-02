<script setup>
import { Route } from '@/models/Route.js';


defineProps({

    route: { type: Route, required: true }
})

</script>


<template>

    <h2> {{ route.grade }} </h2>

</template>


<style lang="scss" scoped></style>