<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h5 class="font-semibold font-inter xl:text-lg lg:text-base">{{ text }}</h5>
</template>
