<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'

defineProps({ text: String })
</script>

<template>
  <button class="bg-primary rounded xl:py-3 lg:py-2 xl:px-5 lg:px-3 text-onPrimary">
    <HeadingSix :text="text" />
  </button>
</template>
