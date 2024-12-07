<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import { useAuthStore } from '@/stores/auth_store';
import { ref, type Ref } from 'vue';

const authStore = useAuthStore()
const email: Ref<string> = ref('');
</script>

<template>
  <div class="flex items-center justify-center h-dvh">
    <Card class="flex flex-col w-lg xl:gap-6 lg:gap-4 xl:p-12 lg:p-8">
      <div class="flex items-center justify-center xl:gap-6 lg:gap-4">
        <img src="@/assets/images/logo.png" alt="logo" class="xl:size-24 lg:size-16">
        <div>
          <HeadingOne text="Diggity" />
        </div>
      </div>
      <div class="xl:mt-6 lg:mt-4">
        <label for="email">
          <Paragraph text="Email" class="mb-1.5 font-semibold" />
        </label>
        <input type="email" class="w-full px-3 py-2 border border-gray-400 rounded" id="email" placeholder="Email"
          v-model="email">
      </div>
      <div class="flex items-center justify-end gap-2 xl:mt-6 lg:mt-4">
        <PrimaryButton text="Email Password Reset Link" @click="authStore.forgotPassword(email)" />
      </div>
    </Card>
  </div>
</template>
