<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <p class="xl:text-base lg:text-sm">{{ text }}</p>
</template>
