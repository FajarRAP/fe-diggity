<script setup lang="ts">
import HeadingFour from '../fonts/HeadingFour.vue'
import Paragraph from '../fonts/Paragraph.vue'
import Card from '../Card.vue'

defineProps({ title: String, description: String, img: String })
</script>

<template>
  <Card class="grid grid-cols-4 xl:gap-6 lg:gap-4 items-center">
    <img :src="img" alt="card image" class="rounded-lg" />
    <div class="xl:space-y-6 lg:space-y-4 col-span-3">
      <HeadingFour :text="title" />
      <Paragraph :text="description" />
    </div>
  </Card>
</template>
