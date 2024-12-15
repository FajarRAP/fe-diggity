<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import { ref, type Ref } from 'vue';


const name: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const email: Ref<string> = ref('')

defineEmits<{
  next: [name: string, phone: string, email: string]
}>()

</script>

<template>
  <div class="flex flex-col w-1/2 mx-auto text-left xl:gap-12 lg:gap-8">
    <div>
      <label for="name">
        <Paragraph text="Nama Lengkap" class="mb-1.5 font-semibold" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="name" placeholder="Nama Lengkap" v-model="name">
    </div>
    <div>
      <label for="phoneNumber">
        <Paragraph text="Nomor Telepon" class="mb-1.5 font-semibold" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="phoneNumber" placeholder="Nomor Telepon"
        v-model="phone">
    </div>
    <div>
      <label for="email">
        <Paragraph text="Email" class="mb-1.5 font-semibold" />
      </label>
      <input type="email" class="w-full px-3 py-2 border rounded " id="email" placeholder="Email" v-model="email">
    </div>
    <PrimaryButton text="Berikutnya" class="ms-auto w-fit" @click="$emit('next', name, phone, email)" />
  </div>
</template>
