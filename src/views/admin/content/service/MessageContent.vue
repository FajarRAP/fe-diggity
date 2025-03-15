<script setup lang="ts">
import type { ServiceOrder } from '@/common/models';
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import ErrorButton from '@/components/buttons/ErrorButton.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import SuccessButton from '@/components/buttons/SuccessButton.vue';
import WarningButton from '@/components/buttons/WarningButton.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Search from '@/components/icons/Search.vue';
import RoutesName from '@/router/routes';
import { useServiceStore } from '@/stores/service_store';
import { onMounted, ref, type Ref } from 'vue';

const serviceStore = useServiceStore()

const serviceOrders: Ref<Array<ServiceOrder>> = ref([])
const last_page: Ref<number> = ref(-1)
const page: Ref<number> = ref(1)
const name: Ref<string> = ref('')
const status: Ref<string> = ref('')

async function next() {
  if (page.value == last_page.value) return;
  serviceOrders.value = (await serviceStore.fetchServiceOrders({ name: name.value, page: ++page.value, status_id: status.value })).service_orders
}

async function prev() {
  if (page.value == 1) return;
  serviceOrders.value = (await serviceStore.fetchServiceOrders({ name: name.value, page: --page.value, status_id: status.value })).service_orders
}

async function search() {
  const res = await serviceStore.fetchServiceOrders({ name: name.value, page: page.value, status_id: status.value })
  serviceOrders.value = res.service_orders
  last_page.value = res.last_page
}

onMounted(search)
</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4 grow">
    <Breadcumb :to="RoutesName.dashboardAdminRoute">
      <BreadcumbLink text="Layanan" />
      <BreadcumbLink text="Pesan" />
    </Breadcumb>
    <HeadingTwo class="xl:mt-6 lg:mt-4" text="Pesan" />
    <div class="relative flex flex-col p-1 overflow-x-auto xl:gap-6 lg:gap-4">
      <div class="flex items-center justify-between">
        <select class="border border-gray-300 rounded-lg bg-gray-50 focus:outline-none hover:cursor-pointer"
          v-model="status">
          <option value="" disabled>Status</option>
          <option value="1">Diproses</option>
          <option value="2">Diterima</option>
          <option value="3">Dibatalkan</option>
          <option value="4">Selesai</option>
        </select>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-3">
            <Search />
          </div>
          <input type="text" class="border border-gray-300 rounded-lg ps-12 bg-gray-50" placeholder="Cari"
            v-model="name" @input="search">
        </div>
      </div>
      <div>
        <table class="w-full text-sm text-left text-gray-500 shadow-card">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="p-4"></th>
              <th scope="col" class="px-6 py-3">Nama</th>
              <th scope="col" class="px-6 py-3">Nomor Telepon</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50" v-for="e in serviceOrders" :key="e.id">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer">
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th class="px-6 py-4 font-medium text-gray-900">{{ e.name }}</th>
              <td class="px-6 py-4">{{ e.phone_number }}</td>
              <td class="px-6 py-4">{{ e.email }}</td>
              <td class="px-6 py-4" @click="$router.push({ path: `${RoutesName.messageAdminRoute}/${e.id}` })">
                <WarningButton v-if="e.status.id === 1" class="w-full" text="Proses" />
                <PrimaryButton v-if="e.status.id === 2" class="w-full" text="Diterima" />
                <ErrorButton v-if="e.status.id === 3" class="w-full" text="Dibatalkan" />
                <SuccessButton v-if="e.status.id === 4" class="w-full" text="Selesai" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
