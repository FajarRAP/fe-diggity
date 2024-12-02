<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <p class="font-inter xl:text-sm lg:text-xs">{{ text }}</p>
</template>
