<script setup lang="ts">
import Card from '@/components/Card.vue';
import HeadingThree from '@/components/fonts/HeadingThree.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import { useServiceStore } from '@/stores/service_store';
import { onMounted, ref } from 'vue';

const serviceStore = useServiceStore()

const serviceOrderCount = ref(0)
const visitorCount = ref(0)

onMounted(async () => {
  serviceOrderCount.value = await serviceStore.fetchServiceOrderCount();
  visitorCount.value = await serviceStore.fetchVisitorCount('2024-01-01', '2024-12-31')
})

</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4 grow">
    <HeadingTwo text="Dashboard" />
    <Card class="w-fit">
      <Paragraph text="Pesan Layanan Masuk" />
      <HeadingThree class="mt-3" :text="`${serviceOrderCount}`" />
    </Card>
    <Card class="w-fit">
      <Paragraph text="Jumlah Pengunjung" />
      <HeadingThree class="mt-3" :text="`${visitorCount}`" />
    </Card>
  </div>
</template>
