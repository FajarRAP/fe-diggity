<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue'
import Arrow from './Arrow.vue'

interface Props {
  text?: string
  link?: string
}

const props = withDefaults(defineProps<Props>(), {
  link: '#'

})
</script>

<template>
  <Arrow />
  <RouterLink :to="`${link}`">
    <HeadingSix class="text-secondary" :text="text" />
  </RouterLink>
</template>
