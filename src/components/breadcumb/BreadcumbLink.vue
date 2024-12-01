<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'
import Arrow from './Arrow.vue'

defineProps({ text: String })
</script>

<template>
  <Arrow />
  <HeadingSix class="text-secondary" :text="text" />
</template>
