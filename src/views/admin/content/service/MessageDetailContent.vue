<script setup lang="ts">
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import Card from '@/components/Card.vue';
import ErrorButton from '@/components/buttons/ErrorButton.vue';
import HeadingFive from '@/components/fonts/HeadingFive.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import RoutesName from '@/router/routes';
import SuccessButton from '@/components/buttons/SuccessButton.vue';
import TextAreaField from '@/components/fields/TextAreaField.vue';
import TextField from '@/components/fields/TextField.vue';
import WarningButton from '@/components/buttons/WarningButton.vue';
import type { ServiceOrder } from '@/common/models';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useServiceStore } from '@/stores/service_store';

const serviceStore = useServiceStore()
const route = useRoute()

const serviceOrder: Ref<ServiceOrder | undefined> = ref()

onMounted(async () => {
  serviceOrder.value = await serviceStore.fetchServiceOrderById({ id: `${route.params.id}` })
})
</script>

<template>
  <div class="flex flex-col bg-onPrimary xl:py-12 lg:py-8 xl:px-7 lg:px-5 xl:gap-12 lg:gap-8 grow">
    <Breadcumb :to="RoutesName.dashboardAdminRoute">
      <BreadcumbLink text="Layanan" />
      <BreadcumbLink text="Pesan" :link="RoutesName.messageAdminRoute" />
      <BreadcumbLink text="Detail Pesan" />
    </Breadcumb>
    <div class="flex items-center justify-between">
      <HeadingTwo text="Detail Pesan" />
      <Paragraph class="ms-auto me-3" text="Status: " />
      <WarningButton v-if="serviceOrder?.status.id === 1" text="Proses" />
      <PrimaryButton v-if="serviceOrder?.status.id === 2" text="Diterima" />
      <ErrorButton v-if="serviceOrder?.status.id === 3" text="Dibatalkan" />
      <SuccessButton v-if="serviceOrder?.status.id === 4" text="Selesai" />
    </div>
    <div>
      <HeadingFive class="p-4 rounded-t-lg shadow-card bg-inversePrimary" text="Informasi Customer" />
      <Card class="!rounded-t-none flex flex-col xl:gap-12 lg:gap-8">
        <TextField :readonly="true" id="name" label="Nama" :placeholder="serviceOrder?.name" />
        <TextField :readonly="true" id="phone" label="Nomor Telepon" :placeholder="serviceOrder?.phone_number" />
        <TextField :readonly="true" id="email" label="Alamat Email" :placeholder="serviceOrder?.email" />
      </Card>
    </div>
    <div>
      <HeadingFive class="p-4 rounded-t-lg shadow-card bg-inversePrimary" text="Layanan yang Dibutuhkan" />
      <Card class="!rounded-t-none flex flex-col xl:gap-12 lg:gap-8">
        <TextField :readonly="true" id="service" label="Layanan" :placeholder="serviceOrder?.service.name" />
        <TextField :readonly="true" id="collaboration" label="Model Kerja Sama"
          :placeholder="serviceOrder?.collaboration.type" />
        <TextAreaField :readonly="true" id="project_detail" label="Kebutuhan"
          :placeholder="serviceOrder?.project_detail" />
        <TextField :readonly="true" id="schedule" label="Jadwal" :placeholder="serviceOrder?.schedule.schedule" />
        <TextField :readonly="true" id="budget" label="Anggaran" :placeholder="serviceOrder?.budget.budget" />
      </Card>
    </div>
    <div>
      <HeadingFive class="p-4 rounded-t-lg shadow-card bg-inversePrimary" text="Informasi Perusahaan" />
      <Card class="!rounded-t-none flex flex-col xl:gap-12 lg:gap-8">
        <TextField :readonly="true" id="company" label="Nama Perusahaan" :placeholder="serviceOrder?.company_name" />
        <TextField :readonly="true" id="position" label="Posisi" :placeholder="serviceOrder?.position" />
        <TextField :readonly="true" id="employee" label="Jumlah Karyawan"
          :placeholder="serviceOrder?.employee.employeeCount" />
        <TextField :readonly="true" id="company_type" label="Jenis Usaha"
          :placeholder="serviceOrder?.business_operated" />
        <TextField :readonly="true" id="duration" label="Lama Usaha" :placeholder="serviceOrder?.duration.duration" />
        <TextField :readonly="true" id="region" label="Provinsi" :placeholder="serviceOrder?.region.name" />
        <TextField :readonly="true" id="regency" label="Kota" :placeholder="serviceOrder?.regency.name" />
      </Card>
    </div>
  </div>
</template>
