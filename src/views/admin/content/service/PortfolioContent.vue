<script setup lang="ts">
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import RoutesName from '@/router/routes';
import Search from '@/components/icons/Search.vue';
import type { Portfolio } from '@/common/models';
import { onMounted, ref, type Ref } from 'vue';
import { useServiceStore } from '@/stores/service_store';

const serviceStore = useServiceStore()

const portfolios: Ref<Array<Portfolio>> = ref([])
const last_page: Ref<number> = ref(-1)
const page: Ref<number> = ref(1)
const name: Ref<string> = ref('')

async function next() {
  if (page.value == last_page.value) return;
  const res = await serviceStore.fetchDashboardPortfolios({ page: ++page.value, keyword: name.value })
  portfolios.value = res.portfolios
}

async function prev() {
  if (page.value == 1) return;
  const res = await serviceStore.fetchDashboardPortfolios({ page: --page.value, keyword: name.value })
  portfolios.value = res.portfolios
}

async function fetchPortfolios() {
  const res = await serviceStore.fetchDashboardPortfolios({ page: page.value, keyword: name.value })
  portfolios.value = res.portfolios
  last_page.value = res.last_page
}

onMounted(fetchPortfolios)
</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4 grow">
    <Breadcumb :to="RoutesName.dashboardAdminRoute">
      <BreadcumbLink text="Layanan" />
      <BreadcumbLink text="Portofolio" :link="`${RoutesName.portfolioAdminRoute}`" />
    </Breadcumb>
    <div class="flex justify-between xl:mt-6 lg:mt-4">
      <HeadingTwo text="Portofolio" />
      <RouterLink :to="RoutesName.addPortfolioAdminRoute">
        <PrimaryButton text="Tambah" />
      </RouterLink>
    </div>
    <div class="relative ms-auto">
      <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-3">
        <Search />
      </div>
      <input type="text" class="border border-gray-300 rounded-lg ps-12 bg-gray-50" placeholder="Cari" v-model="name"
        @input="fetchPortfolios">
    </div>
    <div>
      <table class="w-full text-sm text-left text-gray-500 shadow-card">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3">Portofolio</th>
            <th scope="col" class="px-6 py-3">Klien</th>
            <th scope="col" class="px-6 py-3">Layanan</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50" v-for="e in portfolios" :key="e.id"
            @click="$router.push({ path: `${RoutesName.detailPortfolioAdminRoute}/${e.id}` })">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th class="px-6 py-4 font-medium text-gray-900">
              {{ e.name }}
            </th>
            <td class="px-6 py-4">
              {{ e.client_name }}
            </td>
            <td class="px-6 py-4">
              {{ e.service }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="flex items-center justify-between">
      <span class="block w-full text-sm text-gray-500">
        Halaman
        <span class="font-semibold text-gray-900">{{ page }}</span>
        dari
        <span class="font-semibold text-gray-900">{{ last_page }}</span>
      </span>
      <ul class="inline-flex h-8 text-sm">
        <li
          class="flex items-center justify-center w-20 h-8 px-3 text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer"
          @click="prev">
          Previous
        </li>
        <li
          class="flex items-center justify-center w-20 h-8 px-3 text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer"
          @click="next">
          Next
        </li>
      </ul>
    </nav>
  </div>
</template>
