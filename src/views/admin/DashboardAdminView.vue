<script setup lang="ts">
import Arrow from '@/components/breadcumb/Arrow.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import ParagraphExtraSmall from '@/components/fonts/ParagraphExtraSmall.vue';
import ParagraphSmall from '@/components/fonts/ParagraphSmall.vue';
import Dashboard from '@/components/icons/Dashboard.vue';
import Info from '@/components/icons/Info.vue';
import Search from '@/components/icons/Search.vue';
import Service from '@/components/icons/Service.vue';
import { computed, ref, type Ref } from 'vue';


const isSideBarOpened: Ref<boolean> = ref(false)
const isSecondSideBarOpened: Ref<boolean> = ref(false)

const toggleSidebar = () => isSideBarOpened.value = !isSideBarOpened.value
const toggleSecondSidebar = () => isSecondSideBarOpened.value = !isSecondSideBarOpened.value
</script>

<template>
  <div class="grid min-h-screen grid-cols-12">
    <div class="flex flex-col bg-inversePrimary xl:px-7 lg:px-5 xl:py-12 lg:py-8 xl:gap-12 lg:gap-8"
      :class="{ 'col-span-2': isSideBarOpened, 'col-span-1': !isSideBarOpened }">
      <div class="flex items-center gap-3 p-2.5 bg-primary/20 rounded-xl"
        :class="{ 'justify-center': !isSideBarOpened }">
        <Dashboard />
        <HeadingSix text="Dashboard" v-if="isSideBarOpened" />
      </div>
      <div class="flex items-center gap-3 p-2.5" :class="{ 'justify-center': !isSideBarOpened }">
        <Service />
        <HeadingSix text="Layanan" v-if="isSideBarOpened" />
      </div>
      <div class="flex items-center gap-3 p-2.5" :class="{ 'justify-center': !isSideBarOpened }">
        <Info />
        <HeadingSix text="Tentang" v-if="isSideBarOpened" />
      </div>
      <img src="@/assets/icons/slide-right.png" alt="slide right"
        class="mt-auto xl:size-6 lg:size-4 hover:cursor-pointer" @click="toggleSidebar">
    </div>
    <div class="flex flex-col items-center xl:p-7 lg:p-5 xl:gap-12 lg:gap-8"
      :class="{ 'col-span-2': isSecondSideBarOpened, 'col-span-1': !isSecondSideBarOpened }">
      <HeadingSix text="Pesan" v-if="isSecondSideBarOpened" />
      <HeadingSix text="Portfolio" v-if="isSecondSideBarOpened" />
      <img src="@/assets/icons/right.png" alt="right" class="mt-auto xl:size-6 lg:size-4 me-auto hover:cursor-pointer"
        @click="toggleSecondSidebar">
    </div>
    <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4"
      :class="{ 'col-span-9': isSideBarOpened || isSecondSideBarOpened, 'col-span-8': isSideBarOpened && isSecondSideBarOpened, 'col-span-10': !isSideBarOpened && !isSecondSideBarOpened }">
      <div class="flex items-center gap-3 ">
        <ParagraphSmall text="Layanan" />
        <Arrow class="size-2" />
        <ParagraphSmall class="font-semibold" text="Pesan" />
      </div>
      <HeadingTwo text="Pesan" />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div
          class="flex flex-wrap items-center justify-between p-1 pb-4 space-y-4 flex-column sm:flex-row sm:space-y-0">
          <select class="border border-gray-300 rounded-lg bg-gray-50 focus:outline-none" type="button">
            <option value="">Status</option>
          </select>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-3">
              <Search />
            </div>
            <input type="text" class="border border-gray-300 rounded-lg ps-12 bg-gray-50" placeholder="Cari">
          </div>
        </div>
        <div class="p-1">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-card">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4">
                </th>
                <th scope="col" class="px-6 py-3">
                  Nama
                </th>
                <th scope="col" class="px-6 py-3">
                  Nomor Telepon
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  <PrimaryButton class="w-full" text="Diterima" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <nav class="flex flex-wrap items-center justify-between pt-4 flex-column md:flex-row"
        aria-label="Table navigation">
        <span
          class="block w-full mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">Halaman
          <span class="font-semibold text-gray-900 dark:text-white">1</span> dari <span
            class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
          <li>
            <a href="#"
              class="flex items-center justify-center w-20 h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <!-- <li>
            <a href="#"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
              class="flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li> -->
          <li>
            <a href="#"
              class="flex items-center justify-center w-20 h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
