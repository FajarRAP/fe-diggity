<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '@/components/buttons/PrimaryOutlineButton.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import { Collaboration, Service, useServiceStore } from '@/stores/service_store';
import { defineAsyncComponent, onMounted, ref, type Ref } from 'vue';

const emit = defineEmits<{
  prev: void,
  next: void,
}>()

const serviceStore = useServiceStore()

const services: Ref<Array<Service>> = ref([])
const collaborations: Ref<Array<Collaboration>> = ref([])

onMounted(async () => {
  services.value = await serviceStore.fetchServices();
  collaborations.value = await serviceStore.fetchCollaborations();
})
</script>

<template>

  <div class="flex flex-col mx-auto text-left xl:w-1/2 lg:w-3/4 xl:gap-12 lg:gap-8">
    <div>
      <HeadingSix text="Layanan yang Dibutuhkan" class="mb-1.5" />
      <div class="grid grid-cols-3 gap-2">
        <div class="flex items-center gap-2" v-for="(e, i) in services">
          <input type="radio" :id="e.id" :value="e.name">
          <label :for="e.id">
            <Paragraph :text="e.name" />
          </label>
        </div>
      </div>
    </div>
    <div>
      <HeadingSix text="Model Kerjasama yang Diinginkan" class="mb-1.5" />
      <div class="space-y-2">
        <div class="flex items-center gap-2" v-for="(e, i) in collaborations">
          <input type="radio" :id="e.id" :value="e.type">
          <label :for="e.id">
            <Paragraph :text="e.type" />
          </label>
        </div>
      </div>
    </div>
    <div>
      <label for="description">
        <HeadingSix text="Detail Proyek" class="mb-1.5" />
      </label>
      <textarea class="w-full rounded" rows="5" id="description"></textarea>
    </div>
    <div>
      <label for="schedule">
        <HeadingSix text="Jadwal" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="schedule">
        <option disabled value="">Pilih Jadwal</option>
        <option value="1">Belum Tahu</option>
        <option value="2">Jadwal 1</option>
        <option value="3">Jadwal 2</option>
        <option value="4">Jadwal 3</option>
      </select>
    </div>
    <div>
      <label for="budget">
        <HeadingSix text="Anggaran" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="budget">
        <option disabled value="">Tentukan Anggaran</option>
        <option value="1">0</option>
        <option value="2">Anggaran 1</option>
        <option value="3">Anggaran 2</option>
        <option value="4">Anggaran 3</option>
      </select>
    </div>
    <div class="flex justify-between">
      <PrimaryOutlineButton type="button" text="Kembali" class="w-fit" @click="$emit('prev')" />
      <PrimaryButton text="Berikutnya" class="w-fit" @click="$emit('next')" />
    </div>
  </div>
</template>
