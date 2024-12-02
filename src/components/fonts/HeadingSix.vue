<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h6 class="font-semibold font-inter xl:text-base lg:text-sm">{{ text }}</h6>
</template>
