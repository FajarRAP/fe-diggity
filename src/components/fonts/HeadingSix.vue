<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h6 class="font-semibold font-inter xl:text-sm lg:text-xs">{{ text }}</h6>
</template>
