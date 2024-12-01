<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h1 class="xl:text-2xl lg:text-xl font-semibold">{{ text }}</h1>
</template>
