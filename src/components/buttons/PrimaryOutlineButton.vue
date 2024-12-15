<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'

defineProps({ text: String })
</script>

<template>
  <button
    class="transition-all border rounded outline-none border-primary bg-onPrimary xl:py-3 lg:py-2 xl:px-5 lg:px-3 text-primary focus:outline-primary focus:outline-offset-2">
    <HeadingSix :text="text" />
  </button>
</template>
