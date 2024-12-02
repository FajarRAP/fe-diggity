<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h2 class="font-semibold font-inter xl:text-3xl lg:text-2xl">{{ text }}</h2>
</template>
