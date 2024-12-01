<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h6 class="xl:text-base lg:text-sm font-semibold">{{ text }}</h6>
</template>
