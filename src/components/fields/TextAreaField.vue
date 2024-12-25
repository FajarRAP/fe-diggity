<script setup lang="ts">
import HeadingSix from '../fonts/HeadingSix.vue';

const props = defineProps<{
  id: string,
  label: string,
  placeholder?: string,
  readonly?: boolean,
}>()

const model = defineModel({ default: '' })

</script>

<template>
  <div>
    <label :for="props.id">
      <HeadingSix :text="label" class="mb-1.5" />
    </label>
    <textarea :readonly="readonly ?? false" class="w-full border-gray-300 rounded bg-gray-50" rows="5" :id="props.id"
      :placeholder="props.placeholder ?? props.label" v-model="model"></textarea>
  </div>
</template>
