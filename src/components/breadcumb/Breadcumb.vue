<script setup lang="ts">
import RoutesName from '@/router/routes';
import Home from '../icons/Home.vue'

const props = defineProps<{
  to?: string
}>()
</script>

<template>
  <div class="flex items-center xl:gap-7 lg:gap-5">
    <RouterLink :to="to ?? RoutesName.serviceRoute">
      <Home />
    </RouterLink>
    <slot></slot>
  </div>
</template>
