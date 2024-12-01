<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <p class="xl:text-sm lg:text-xs">{{ text }}</p>
</template>
