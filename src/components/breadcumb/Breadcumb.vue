<script setup lang="ts">
import RoutesName from '@/router/routes';
import Home from '../icons/Home.vue'
</script>

<template>
  <div class="flex items-center xl:gap-7 lg:gap-5">
    <RouterLink :to="RoutesName.serviceRoute">
      <Home />
    </RouterLink>
    <slot></slot>
  </div>
</template>
