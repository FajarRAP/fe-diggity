<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'

defineProps({ text: String })
</script>

<template>
  <button
    class="transition-all rounded outline-none bg-primary xl:py-3 lg:py-2 xl:px-5 lg:px-3 text-onPrimary focus:outline-primary focus:outline focus:outline-offset-2 disabled:bg-gray-400">
    <HeadingSix :text="text" />
  </button>
</template>
