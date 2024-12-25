<script setup lang="ts">
import { type InputTypeHTMLAttribute } from 'vue';
import HeadingSix from '../fonts/HeadingSix.vue';


const props = defineProps<{
  id: string,
  label: string,
  placeholder?: string,
  type?: InputTypeHTMLAttribute,
}>()


const emits = defineEmits<{
  (emit: 'change', event: Event): void
}>()

</script>

<template>
  <div>
    <label :for="props.id">
      <HeadingSix :text="props.label" class="mb-1.5" />
    </label>
    <input type="file" ref="input"
      class="w-full text-gray-500 border border-gray-300 rounded outline-none file:p-2 focus:outline-primary file:font-semibold file:bg-primary file:border-none file:text-onPrimary bg-gray-50"
      :id="props.id" :placeholder="props.placeholder ?? props.label" v-on:change="(e) => $emit('change', e)">
  </div>

</template>
