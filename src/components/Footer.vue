<script setup lang="ts">
import HeadingOne from './fonts/HeadingOne.vue'
import HeadingTwo from './fonts/HeadingTwo.vue'
import Paragraph from './fonts/Paragraph.vue'
</script>

<template>
  <div class="grid grid-cols-3 xl:p-24 lg:p-16 bg-secondary text-onSecondary xl:gap-24 lg:gap-16">
    <div class="flex flex-col xl:gap-12 lg:gap-8">
      <div class="flex items-center xl:gap-6 lg:gap-4 xl:mb-6 lg:mb-4">
        <img src="@/assets/images/logo.png" alt="diggity logo" class="xl:size-24 lg:size-16 " />
        <div class="xl:space-y-3 lg:space-y-2">
          <HeadingOne text="Diggity" class="font-bold" />
          <Paragraph text="Craft Your Digital Dream" class="font-semibold" />
        </div>
      </div>
      <Paragraph text="Minggiran, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573" />
      <Paragraph text="+62 878-4305-2780" />
      <Paragraph text="info@diggity.co.id" />
    </div>
    <div class="grid grid-cols-3 col-span-2 xl:gap-24 lg-gap-16">
      <div class="xl-space-y-6 lg:space-y-4">
        <HeadingTwo text="Layanan" />
        <Paragraph text="Layanan Utama" />
        <Paragraph text="Model Kerja Sama" />
        <Paragraph text="Portofolio" />
      </div>
      <div class="xl-space-y-6 lg:space-y-4">
        <HeadingTwo text="Produk" />
        <Paragraph text="Produk Utama" />
        <Paragraph text="Harga" />
      </div>
      <div class="xl-space-y-6 lg:space-y-4">
        <HeadingTwo text="Kelas" />
        <Paragraph text="Kelas Utama" />
        <Paragraph text="Alur Belajar" />
        <Paragraph text="Bootcamp" />
        <Paragraph text="Webinar" />
        <Paragraph text="Universitas dan Perusahaan" />
      </div>
      <div class="xl-space-y-6 lg:space-y-4">
        <HeadingTwo text="Panduan" />
        <Paragraph text="Panduan" />
        <Paragraph text="Kolaborasi" />
        <Paragraph text="Partner Komersial" />
      </div>
      <div class="xl-space-y-6 lg:space-y-4">
        <HeadingTwo text="Tentang" />
        <Paragraph text="Tentang Diggity" />
        <Paragraph text="Mengapa Diggity" />
        <Paragraph text="Karir" />
      </div>
    </div>
  </div>
  <div class="flex items-center xl:px-24 lg:px-16 xl:py-12 lg:py-8 bg-tertiary text-onPrimary">
    <img src="@/assets/icons/copyright.png" alt="copyright icon" class="xl:size-6 lg:size-4" />
    <Paragraph text="Copyright 2024 CV Sinergi Cita Digital" class="xl:ms-7 lg:ms-5" />
    <Paragraph text="Ketentuan Pengguna" class="ms-auto" />
    <div class="bg-white rounded-full size-2 xl:mx-7 lg:mx-5"></div>
    <Paragraph text="Kebijakan Privasi" />
  </div>
</template>
