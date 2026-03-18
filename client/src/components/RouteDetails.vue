<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = computed(() => AppState.activeRoute)
const account = computed(() => AppState.account)



</script>


<template>

    <div v-if="route != null" class="text-center my-2">

        <p> Number of Moves: {{ route.numberOfMoves }} </p>
        <p> Style: {{ route.style }}</p>
        <p> Grip Type: {{ route.gripType }} </p>
        <p v-if="route.creator"> Setter: {{ route.creator.name }} </p>

        <!-- <p> Real Setter: {{ route.creator.name }}</p> -->

        <!-- Do I want this information as a list?? -->

        <!-- Why won't creator show up on route section's page??  -->


    </div>

</template>


<style lang="scss" scoped></style>