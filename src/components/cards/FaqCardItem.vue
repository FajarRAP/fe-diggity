<script setup lang="ts">
import { Faq } from '@/common/constants';
import Arrow from '../breadcumb/Arrow.vue';
import Card from '../Card.vue';
import Paragraph from '../fonts/Paragraph.vue';
import ParagraphSmall from '../fonts/ParagraphSmall.vue';

defineProps({ faq: Faq, index: Number, faqIndex: Number })
const emit = defineEmits<{
  (e: 'openFaq', index: number): void
}>()
</script>

<template>
  <Card class="xl:space-y-6 lg:space-y-4">
    <div class="flex items-center justify-between xl:gap-12 lg:gap-8 hover:cursor-pointer">
      <Paragraph :text="faq?.question" class="font-medium" @click="emit('openFaq', index!)" />
      <Arrow class="transition" :class="{ 'rotate-90': faqIndex !== index, '-rotate-90': faqIndex === index }" />
    </div>
    <Transition>
      <ParagraphSmall v-if="faqIndex === index" :text="faq?.answer" class="text-gray-500" />
    </Transition>
  </Card>
</template>
