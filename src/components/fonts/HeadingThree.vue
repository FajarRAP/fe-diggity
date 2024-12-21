<script setup lang="ts">
defineProps({ text: String })
</script>

<template>
  <h3 class="font-semibold font-inter xl:text-2xl lg:text-xl">{{ text }}</h3>
</template>
