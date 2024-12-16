<script setup lang="ts">
import type { BusinessDuration, Employee, Regency, Region } from '@/common/models';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '@/components/buttons/PrimaryOutlineButton.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import { useServiceStore } from '@/stores/service_store';
import { onMounted, ref, type Ref } from 'vue';

defineEmits<{
  prev: void,
  send: [companyName: string, position: string, employeeCount: string, businessOperated: string, region: string, regency: string],
}>()

const serviceStore = useServiceStore()

const employeeCounts: Ref<Array<Employee>> = ref([])
const businessDurations: Ref<Array<BusinessDuration>> = ref([])
const regions: Ref<Array<Region>> = ref([])
const regencies: Ref<Array<Regency>> = ref([])

onMounted(async () => {
  employeeCounts.value = await serviceStore.fetchEmployeesCount()
  businessDurations.value = await serviceStore.fetchBusinessOperatedDuration()
  regions.value = await serviceStore.fetchRegions()
  regencies.value = await serviceStore.fetchRegencies()
})

const companyName: Ref<string> = ref('')
const position: Ref<string> = ref('')
const employeeCount: Ref<string> = ref('')
const businessDuration: Ref<string> = ref('')
const region: Ref<string> = ref('')
const regency: Ref<string> = ref('')
</script>

<template>
  <div class="flex flex-col mx-auto text-left xl:w-1/2 lg:w-3/4 xl:gap-12 lg:gap-8">
    <div>
      <label for="company_name">
        <HeadingSix text="Nama Perusahaan" class="mb-1.5" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="company_name" placeholder="Nama Perusahaan"
        v-model="companyName">
    </div>
    <div>
      <label for="position">
        <HeadingSix text="Posisi Anda" class="mb-1.5" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="position" placeholder="Posisi Anda"
        v-model="position">
    </div>
    <div>
      <label for="employee_count">
        <HeadingSix text="Jumlah Karyawan" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="employee_count" v-model="employeeCount">
        <option disabled value="">Jumlah Karyawan</option>
        <template v-for="e in employeeCounts">
          <option :value="e.id">{{ e.employeeCount }}</option>
        </template>
      </select>
    </div>
    <div>
      <label for="business_duration">
        <HeadingSix text="Berapa Lama Usaha Berlangsung" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="business_duration" v-model="businessDuration">
        <option disabled value="">Pilih Lama Usaha</option>
        <template v-for="e in businessDurations">
          <option :value="e.id">{{ e.duration }}</option>
        </template>
      </select>
    </div>
    <div>
      <label for="region">
        <HeadingSix text="Pilih Provinsi" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="region" v-model="region">
        <option disabled value="">Pilih Provinsi</option>
        <template v-for="e in regions">
          <option :value="e.id">{{ e.name }}</option>
        </template>
      </select>
    </div>
    <div>
      <label for="regency">
        <HeadingSix text="Pilih Kota" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="regency" v-model="regency">
        <option disabled value="">Pilih Kota</option>
        <template v-for="e in regencies">
          <option :value="e.id">{{ e.name }}</option>
        </template>
      </select>
    </div>
    <div class="flex justify-between">
      <PrimaryOutlineButton type="button" text="Kembali" @click="$emit('prev')" />
      <PrimaryButton text="Kirim"
        @click="$emit('send', companyName, position, employeeCount, businessDuration, region, regency)" />
    </div>
  </div>
</template>
