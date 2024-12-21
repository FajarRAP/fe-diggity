<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'

defineProps({ text: String })
</script>

<template>
  <button
    class="px-3 py-2 transition-all rounded outline-none bg-accent text-onPrimary focus:outline-accent focus:outline focus:outline-offset-2 disabled:bg-gray-400">
    <HeadingSix :text="text" />
  </button>
</template>
