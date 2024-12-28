<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue';

const props = defineProps<{
  id: string,
  label: string,
  placeholder: string,
  list?: Array<{ id: string, name: string }>
}>()

const model = defineModel({ default: '' })
</script>

<template>
  <div>
    <label :for="props.id">
      <HeadingSix :text="label" class="mb-1.5" />
    </label>
    <select class="w-full border border-gray-300 rounded bg-gray-50" :id="props.id" v-model="model">
      <option disabled value="">{{ props.placeholder }}</option>
      <template v-for="e in list">
        <option :value="e.id">{{ e.name }}</option>
      </template>
    </select>
  </div>
</template>
