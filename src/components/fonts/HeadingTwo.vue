<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h1 class="xl:text-3xl lg:text-2xl font-semibold">{{ text }}</h1>
</template>
