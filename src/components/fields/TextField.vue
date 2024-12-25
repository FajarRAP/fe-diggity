<script setup lang="ts">
import { type InputTypeHTMLAttribute } from 'vue';
import HeadingSix from '../fonts/HeadingSix.vue';

const props = defineProps<{
  id: string,
  label: string,
  placeholder?: string,
  type?: InputTypeHTMLAttribute,
  readonly?: boolean
}>()

const model = defineModel()
</script>

<template>
  <div>
    <label :for="props.id">
      <HeadingSix :text="props.label" class="mb-1.5" />
    </label>
    <input :readonly="readonly" :type="props.type ?? 'text'"
      class="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50" :id="props.id"
      :placeholder="props.placeholder ?? props.label" v-model="model">
  </div>
</template>
