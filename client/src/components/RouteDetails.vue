<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = computed(() => AppState.activeRoute)



</script>


<template>

    <div v-if="route != null" class="text-center my-2">

        <p> Number of Moves: {{ route.numberOfMoves }} </p>
        <p> Style: {{ route.style }}</p>

        <!-- Do I want this information as a list?? -->



    </div>

</template>


<style lang="scss" scoped></style>