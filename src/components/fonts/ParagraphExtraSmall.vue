<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <p class="font-inter xl:text-xs lg:text-xxs">{{ text }}</p>
</template>
