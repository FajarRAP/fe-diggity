<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '@/components/buttons/PrimaryOutlineButton.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';

defineEmits<{
  prev: void,
  send: void,
}>()

</script>

<template>
  <div class="flex flex-col mx-auto text-left xl:w-1/2 lg:w-3/4 xl:gap-12 lg:gap-8">
    <div>
      <label for="company_name">
        <HeadingSix text="Nama Lengkap" class="mb-1.5" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="company_name" placeholder="Nama Perusahaan">
    </div>
    <div>
      <label for="position">
        <HeadingSix text="Posisi Anda" class="mb-1.5" />
      </label>
      <input type="text" class="w-full px-3 py-2 border rounded " id="position" placeholder="Posisi Anda">
    </div>
    <div>
      <label for="employee_count">
        <HeadingSix text="Jumlah Karyawan" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="employee_count">
        <option disabled value="">Jumlah Karyawan</option>
        <option value="1">Jumlah Karyawan 1</option>
        <option value="2">Jumlah Karyawan 2</option>
        <option value="3">Jumlah Karyawan 3</option>
      </select>
    </div>
    <div>
      <label for="business_operated">
        <HeadingSix text="Berapa Lama Usaha Berlangsung" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="business_operated">
        <option disabled value="">Pilih Lama Usaha</option>
        <option value="1">Lama Usaha 0</option>
        <option value="2">Lama Usaha 1</option>
        <option value="3">Lama Usaha 2</option>
        <option value="4">Lama Usaha 3</option>
      </select>
    </div>
    <div>
      <label for="region">
        <HeadingSix text="Pilih Provinsi" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="region">
        <option disabled value="">Pilih Provinsi</option>
        <option value="1">Provinsi 0</option>
        <option value="2">Provinsi 1</option>
        <option value="3">Provinsi 2</option>
        <option value="4">Provinsi 3</option>
      </select>
    </div>
    <div>
      <label for="regency">
        <HeadingSix text="Pilih Kota" class="mb-1.5" />
      </label>
      <select class="w-full rounded" id="regency">
        <option disabled value="">Pilih Kota</option>
        <option value="1">Kota 0</option>
        <option value="2">Kota 1</option>
        <option value="3">Kota 2</option>
        <option value="4">Kota 3</option>
      </select>
    </div>
    <div class="flex justify-between">
      <PrimaryOutlineButton type="button" text="Kembali" @click="$emit('prev')" />
      <PrimaryButton text="Kirim" @click="$emit('send')" />
    </div>
  </div>
</template>
