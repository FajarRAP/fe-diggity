<script setup lang="ts">
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import WrapperSecondSidebar from '@/components/wrappers/WrapperSecondSidebar.vue';
import RoutesName from '@/router/routes';
import { ref } from 'vue';

const isOpen = ref(false)
</script>

<template>
  <WrapperSecondSidebar :class="{ 'min-w-40': isOpen }">
    <RouterLink :to="`${RoutesName.dashboardAdminRoute}/service/message`" active-class="text-primary bg-primary/20"
      class="gap-3 p-2.5 rounded-lg w-full hover:cursor-pointer " v-if="isOpen">
      <HeadingSix class="text-center" text="Pesan" />
    </RouterLink>
    <RouterLink :to="`${RoutesName.dashboardAdminRoute}/service/portfolio`" active-class="text-primary bg-primary/20"
      class="gap-3 p-2.5 rounded-lg w-full hover:cursor-pointer " v-if="isOpen">
      <HeadingSix class="text-center" text="Portofolio" />
    </RouterLink>
    <img src="@/assets/icons/right.png" alt="right" class="mt-auto xl:size-6 lg:size-4 me-auto hover:cursor-pointer"
      @click="isOpen = !isOpen">
  </WrapperSecondSidebar>
  <RouterView />
</template>
