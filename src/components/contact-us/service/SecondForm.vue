<script setup lang="ts">
import type { Budget, Collaboration, Schedule, Service } from '@/common/models';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '@/components/buttons/PrimaryOutlineButton.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import {  useServiceStore } from '@/stores/service_store';
import { onMounted, ref, type Ref } from 'vue';

defineEmits<{
  prev: void,
  next: [service: string, collaboration: string, description: string, schedule: string, budget: string],
}>()

const serviceStore = useServiceStore()

const services: Ref<Array<Service>> = ref([])
const collaborations: Ref<Array<Collaboration>> = ref([])
const schedules: Ref<Array<Schedule>> = ref([])
const budgets: Ref<Array<Budget>> = ref([])

onMounted(async () => {
  services.value = await serviceStore.fetchServices();
  collaborations.value = await serviceStore.fetchCollaborations();
  schedules.value = await serviceStore.fetchSchedules();
  budgets.value = await serviceStore.fetchBudgets();
})

const service: Ref<string> = ref('')
const collaboration: Ref<string> = ref('')
const description: Ref<string> = ref('')
const schedule: Ref<string> = ref('')
const budget: Ref<string> = ref('')
</script>

<template>
  <div class="flex flex-col mx-auto text-left xl:w-1/2 lg:w-3/4 xl:gap-12 lg:gap-8">
    <div>
      <HeadingSix text="Layanan yang Dibutuhkan" class="mb-1.5" />
      <div class="grid grid-cols-3 gap-2">
        <div class="flex items-center gap-2" v-for="e in services">
          <input type="radio" :id="`service-${e.id}`" :value="e.id" v-model="service">
          <label :for="`service-${e.id}`">
            <Paragraph :text="e.name" />
          </label>
        </div>
      </div>
    </div>
    <div>
      <HeadingSix text="Model Kerjasama yang Diinginkan" class="mb-1.5" />
      <div class="space-y-2">
        <div class="flex items-center gap-2" v-for="e in collaborations">
          <input type="radio" :id="`collaboration-${e.id}`" :value="e.id" v-model="collaboration">
          <label :for="`collaboration-${e.id}`">
            <Paragraph :text="e.type" />
          </label>
        </div>
      </div>
    </div>
    <div>
      <label for="description">
        <HeadingSix text="Detail Proyek" class="mb-1.5" />
      </label>
      <textarea class="w-full rounded" rows="5" id="description" v-model="description"></textarea>
    </div>
    <div>
      <label for="schedule">
        <HeadingSix text="Jadwal" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="schedule" v-model="schedule">
        <option disabled value="">Pilih Jadwal</option>
        <template v-for="e in schedules">
          <option :value="e.id">{{ e.schedule }}</option>
        </template>
      </select>
    </div>
    <div>
      <label for="budget">
        <HeadingSix text="Anggaran" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="budget" v-model="budget">
        <option disabled value="">Tentukan Anggaran</option>
        <template v-for="e in budgets">
          <option :value="e.id">{{ e.budget }}</option>
        </template>
      </select>
    </div>
    <div class="flex justify-between">
      <PrimaryOutlineButton type="button" text="Kembali" class="w-fit" @click="$emit('prev')" />
      <PrimaryButton text="Berikutnya" class="w-fit"
        @click="$emit('next', service, collaboration, description, schedule, budget)" />
    </div>
  </div>
</template>
