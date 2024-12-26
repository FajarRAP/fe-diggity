<script setup lang="ts">
import { PortfolioParams } from '@/common/models';
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '@/components/buttons/PrimaryOutlineButton.vue';
import Card from '@/components/Card.vue';
import FileField from '@/components/fields/FileField.vue';
import MultiFileField from '@/components/fields/MultiFileField.vue';
import TextAreaField from '@/components/fields/TextAreaField.vue';
import TextField from '@/components/fields/TextField.vue';
import HeadingFive from '@/components/fonts/HeadingFive.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Search from '@/components/icons/Search.vue';
import RoutesName from '@/router/routes';
import { useServiceStore } from '@/stores/service_store';
import { ref, type Ref } from 'vue';

const serviceStore = useServiceStore()

const project: Ref<string> = ref('Project Name')
const service: Ref<string> = ref('1')
const client: Ref<string> = ref('Client Name')
const location: Ref<string> = ref('33')
const heroImage: Ref<FileList | null | undefined> = ref()
const link: Ref<string> = ref('https://google.com')
const year: Ref<string> = ref('2024')
const technology: Ref<string> = ref('Laravel')
const project_detail: Ref<string> = ref('This is Project Name Detail Project')
const responsibility: Ref<string> = ref('Ngibrit')
const galleries: Ref<FileList | null | undefined> = ref()

function addHeroImage(event: Event) {
  const target = <HTMLInputElement>event.target
  heroImage.value = target.files
}

function addGalleries(event: Event) {
  const target = <HTMLInputElement>event.target
  galleries.value = target.files
}

async function onClick() {
  console.log(project.value)
  console.log(service.value)
  console.log(client.value)
  console.log(location.value)
  console.log(heroImage.value)
  console.log(link.value)
  console.log(year.value)
  console.log(technology.value)
  console.log(project_detail.value)
  console.log(responsibility.value)
  console.log(galleries.value)

  const params = new PortfolioParams({ name: project.value, hero_image: heroImage.value, client_name: client.value, detail_project: project_detail.value, galleries: galleries.value, link: link.value, regency_id: location.value, service_id: service.value, task: responsibility.value, technology: [technology.value, 'Teknologi', 'Terbaru'], year: year.value })
  console.log(params)
  await serviceStore.insertPortfolio(params)
}
</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4 grow">
    <Breadcumb :to="RoutesName.dashboardAdminRoute">
      <BreadcumbLink text="Layanan" />
      <BreadcumbLink text="Portofolio" :link="`${RoutesName.portfolioAdminRoute}`" />
      <BreadcumbLink text="Tambah Portofolio" />
    </Breadcumb>
    <HeadingTwo class="xl:mt-6 lg:mt-4" text="Tambah Portofolio" />
    <div>
      <HeadingFive class="p-4 rounded-t-lg shadow-card bg-inversePrimary" text="Informasi Customer" />
      <Card class="!rounded-t-none flex flex-col xl:gap-12 lg:gap-8">
        <div class="grid grid-cols-2 xl:gap-12 lg:gap-8">
          <TextField id="project" label="Proyek" v-model="project" />
          <TextField id="service" label="Layanan" v-model="service" />
          <TextField id="client" label="Klien" placeholder="Nama Klien" v-model="client" />
          <TextField id="location" label="Lokasi" v-model="location" />
          <FileField id="hero_image" label="Hero Image" @change="addHeroImage" />
          <TextField id="link" label="Link" v-model="link" />
          <TextField id="year" label="Tahun" v-model="year" />
          <TextField id="tech" label="Teknologi" v-model="technology" />
        </div>
        <TextAreaField id="project_detail" label="Detail Proyek" v-model="project_detail" />
        <TextAreaField id="responsibility" label="Tanggung Jawab" v-model="responsibility" />
        <div class="border border-gray-300 rounded bg-gray-50 xl:p-6 lg:p-4">
          <MultiFileField id="gallery" label="Galeri" @change="addGalleries" />
        </div>
        <div class="flex justify-between">
          <PrimaryOutlineButton text="Hapus" />
          <PrimaryButton text="Simpan" @click="onClick" />
        </div>
      </Card>
    </div>
  </div>
</template>
