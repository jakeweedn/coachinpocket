<script setup>
import { AppState } from '@/AppState.js';
import { routesService } from '@/services/RoutesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const routes = computed(() => AppState.routes)

onMounted(() => {

  getRoutes()

})

async function getRoutes() {

  try {
    await routesService.getRoutes()


  }

  catch (error) {

    Pop.error(error)
    logger.error(error)
  }


}


</script>

<template>

  <h1 class="text-center"> Hello what's up </h1>

  <p> {{ routes }} </p>

  <div v-for="route in routes" :key="route.id">

    <p> {{ route.color }} </p>


  </div>
</template>

<style scoped lang="scss"></style>
