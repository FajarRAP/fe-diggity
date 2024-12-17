<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'

defineProps({ text: String })
</script>

<template>
  <button
    class="px-3 py-2 transition-all border rounded outline-none border-primary bg-onPrimary text-primary focus:outline-primary focus:outline-offset-2">
    <HeadingSix :text="text" />
  </button>
</template>
