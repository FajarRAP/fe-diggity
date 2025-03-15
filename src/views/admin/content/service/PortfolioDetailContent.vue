<script setup lang="ts">
import { PortfolioDetail, PortfolioParams } from '@/common/models';
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
import RoutesName from '@/router/routes';
import { useServiceStore } from '@/stores/service_store';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const serviceStore = useServiceStore()
const route = useRoute()
const router = useRouter()

const portfolio: Ref<PortfolioDetail | undefined> = ref()
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

function addHeroImage(event: Event) {
  const target = <HTMLInputElement>event.target
  console.log(typeof target.files![0]);
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

  const params = new PortfolioParams({ name: project.value, hero_image: heroImage.value, client_name: client.value, detail_project: project_detail.value, galleries: galleries.value, link: link.value, regency_id: location.value, service_id: service.value, task: responsibility.value, technology: [technology.value], year: year.value })
  console.log(params)
  await serviceStore.insertPortfolio(params)
}

async function deletePortfolio({ portfolioId }: { portfolioId: string }) {
  if (await serviceStore.deletePortfolio({ id: portfolioId })) router.back()
}

onMounted(async () => {
  portfolio.value = await serviceStore.fetchDashboardPortfolioById({ id: `${route.params.id}` })
  project.value = `${portfolio.value?.name}`
  service.value = `${portfolio.value?.service}`
  client.value = `${portfolio.value?.client_name}`
  location.value = `${portfolio.value?.regency}`
  link.value = `${portfolio.value?.link}`
  year.value = `${portfolio.value?.year}`
  technology.value = `${portfolio.value?.technology}`
  project_detail.value = `${portfolio.value?.detail_project}`
  responsibility.value = `${portfolio.value?.task}`
});
</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-6 lg:gap-4 grow">
    <Breadcumb :to="RoutesName.dashboardAdminRoute">
      <BreadcumbLink text="Layanan" />
      <BreadcumbLink text="Portofolio" :link="`${RoutesName.portfolioAdminRoute}`" />
      <BreadcumbLink text="Detail Portofolio" />
    </Breadcumb>
    <HeadingTwo class="xl:mt-6 lg:mt-4" text="Detail Portofolio" />
    <div>
      <HeadingFive class="p-4 rounded-t-lg shadow-card bg-inversePrimary" text="Informasi Customer" />
      <Card class="!rounded-t-none flex flex-col xl:gap-12 lg:gap-8">
        <div class="grid grid-cols-2 xl:gap-12 lg:gap-8">
          <TextField id="project" label="Proyek" v-model="project" />
          <TextField id="service" label="Layanan" v-model="service" />
          <TextField id="client" label="Klien" placeholder="Nama Klien" v-model="client" />
          <TextField id="location" label="Lokasi" v-model="location" />
          <div class="flex flex-col">
            <img :src="`${heroImage == undefined ? portfolio?.hero_image : heroImage[0]}`" alt="hero image">
            <FileField id="hero_image" label="Hero Image" @change="addHeroImage" />
          </div>
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
          <PrimaryOutlineButton text="Hapus" @click="deletePortfolio({ portfolioId: `${$route.params.id}` })" />
          <PrimaryButton text="Simpan" @click="onClick" />
        </div>
      </Card>
    </div>
  </div>
</template>
