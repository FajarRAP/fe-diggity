<script setup lang="ts">
import Dashboard from '@/components/icons/Dashboard.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import Info from '@/components/icons/Info.vue';
import Service from '@/components/icons/Service.vue';
import { ref, type Ref } from 'vue';
import RoutesName from '@/router/routes';

const isSideBarOpened: Ref<boolean> = ref(false)
function toggleSidebar() {
  isSideBarOpened.value = !isSideBarOpened.value
}

console.log(sessionStorage.getItem('token'))

</script>

<template>
  <div class="flex min-h-screen">
    <div class="flex flex-col bg-inversePrimary xl:px-7 lg:px-5 xl:py-12 lg:py-8 xl:gap-12 lg:gap-8">
      <RouterLink :to="RoutesName.dashboardAdminRoute" active-class=" bg-primary/20 rounded-xl">
        <div class="flex items-center p-2.5 gap-3 router-link-exact-active  hover:cursor-pointer"
          :class="{ 'justify-center': !isSideBarOpened }">
          <Dashboard />
          <HeadingSix text="Dashboard" v-if="isSideBarOpened" />
        </div>
      </RouterLink>
      <RouterLink :to="`${RoutesName.dashboardAdminRoute}/service`" active-class="bg-primary/20 rounded-xl">
        <div class="flex items-center gap-3 p-2.5" :class="{ 'justify-center': !isSideBarOpened }">
          <Service />
          <HeadingSix text="Layanan" v-if="isSideBarOpened" />
        </div>
      </RouterLink>
      <div class="flex items-center gap-3 p-2.5" :class="{ 'justify-center': !isSideBarOpened }"
        active-class=" bg-primary/20 rounded-xl">
        <Info />
        <HeadingSix text="Tentang" v-if="isSideBarOpened" />
      </div>
      <img src="@/assets/icons/slide-right.png" alt="slide right"
        class="mt-auto xl:size-6 lg:size-4 hover:cursor-pointer" @click="toggleSidebar">
    </div>
    <RouterView />
  </div>
</template>
