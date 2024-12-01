<script setup lang="ts">
import Card from '../Card.vue'
import HeadingFour from '../fonts/HeadingFour.vue'
import ParagraphSmall from '../fonts/ParagraphSmall.vue'
import CheckCircle from '../icons/CheckCircle.vue'

defineProps({ title: String, description: String, benefits: Array<string>, img: String })
</script>

<template>
  <Card class="flex flex-col xl:gap-6 lg:gap-4">
    <img :src="img" alt="card image" class="xl:size-24 lg:size-16" />
    <HeadingFour :text="title" class="border-b xl:pb-3 lg:pb-2" />
    <ParagraphSmall :text="description" />
    <div class="flex items-center xl:gap-2 lg:gap-1" v-for="e in benefits">
      <CheckCircle />
      <ParagraphSmall :text="e" />
    </div>
    <hr class="mt-auto" />
  </Card>
</template>
