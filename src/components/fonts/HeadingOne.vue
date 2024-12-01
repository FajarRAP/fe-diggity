<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h1 class="xl:text-4xl lg:text-3xl font-semibold">{{ text }}</h1>
</template>
