<script setup lang="ts">
import Home from '../icons/Home.vue'
</script>

<template>
  <div class="flex items-center xl:gap-7 lg:gap-5">
    <Home />
    <slot></slot>
  </div>
</template>
