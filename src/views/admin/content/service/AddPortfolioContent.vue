<script setup lang="ts">
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import Card from '@/components/Card.vue';
import FileField from '@/components/fields/FileField.vue';
import HeadingFive from '@/components/fonts/HeadingFive.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import MultiFileField from '@/components/fields/MultiFileField.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import RoutesName from '@/router/routes';
import SelectField from '@/components/fields/SelectField.vue';
import TextAreaField from '@/components/fields/TextAreaField.vue';
import TextField from '@/components/fields/TextField.vue';
import { PortfolioParams, Regency, Service } from '@/common/models';
import { onMounted, ref, type Ref } from 'vue';
import { useServiceStore } from '@/stores/service_store';

const serviceStore = useServiceStore()

const project: Ref<string> = ref('')
const service: Ref<string> = ref('')
const client: Ref<string> = ref('')
const location: Ref<string> = ref('')
const heroImage: Ref<FileList | null | undefined> = ref()
const link: Ref<string> = ref('')
const year: Ref<string> = ref('')
const technology: Ref<string> = ref('')
const project_detail: Ref<string> = ref('')
const responsibility: Ref<string> = ref('')
const galleries: Ref<FileList | null | undefined> = ref()

const regencies: Ref<Array<Regency>> = ref([])
const services: Ref<Array<Service>> = ref([])

function addHeroImage(event: Event) {
  const target = <HTMLInputElement>event.target
  heroImage.value = target.files
}

function addGalleries(event: Event) {
  const target = <HTMLInputElement>event.target
  galleries.value = target.files
}

async function insertPortfolio() {
  const technologies: Array<string> = technology.value.split(';').map(e => e.trim())
  if (!heroImage.value) return alert('Hero Image tidak boleh kosong')
  if (!galleries.value) return alert('Galeri tidak boleh kosong')

  const params = new PortfolioParams({ name: project.value, hero_image: heroImage.value, client_name: client.value, detail_project: project_detail.value, galleries: galleries.value, link: link.value, regency_id: location.value, service_id: service.value, task: responsibility.value, technology: technologies, year: year.value })

  await serviceStore.insertPortfolio(params)
}

onMounted(async () => {
  regencies.value = await serviceStore.fetchRegencies()
  services.value = await serviceStore.fetchServices()
})
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
          <SelectField id="service" label="Layanan" placeholder="Pilih Layanan" :list="services" v-model="service" />
          <TextField id="client" label="Klien" placeholder="Nama Klien" v-model="client" />
          <SelectField id="location" label="Lokasi" placeholder="Pilih Lokasi" :list="regencies" v-model="location" />
          <FileField id="hero_image" label="Hero Image" @change="addHeroImage" />
          <TextField id="link" label="Link" v-model="link" />
          <TextField id="year" label="Tahun" v-model="year" />
          <TextField id="tech" label="Teknologi" placeholder="Pisahkan dengan ; (e.g.: Laravel;Javascript)"
            v-model="technology" />
        </div>
        <TextAreaField id="project_detail" label="Detail Proyek" v-model="project_detail" />
        <TextAreaField id="responsibility" label="Tanggung Jawab" v-model="responsibility" />
        <div class="border border-gray-300 rounded bg-gray-50 xl:p-6 lg:p-4">
          <MultiFileField id="gallery" label="Galeri" @change="addGalleries" />
        </div>
        <PrimaryButton class="w-fit ms-auto" text="Tambah" @click="insertPortfolio" />
      </Card>
    </div>
  </div>
</template>
