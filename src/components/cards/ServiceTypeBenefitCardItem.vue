<script setup lang="ts">
import Card from '../Card.vue';
import HeadingSix from '../fonts/HeadingSix.vue';
import ParagraphSmall from '../fonts/ParagraphSmall.vue';

defineProps({ title: String, description: String, img: String })
</script>

<template>
  <Card class="grid items-center grid-cols-5 text-left xl:gap-3 lg:gap-2">
    <img :src="img" alt="benefit icon">
    <div class="col-span-4 xl:space-y-3 lg:space-y-2">
      <HeadingSix :text="title" />
      <ParagraphSmall :text="description" />
    </div>
  </Card>
</template>
