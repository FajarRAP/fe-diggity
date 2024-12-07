<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import RoutesName from '@/router/routes';
import { useAuthStore } from '@/stores/auth_store';
import { ref, watch, type Ref } from 'vue';

const authStore = useAuthStore()
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const rememberMe: Ref<boolean> = ref(false)

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
      <div>
        <label for="password">
          <Paragraph text="Password" class="font-semibold mb-1.5" />
        </label>
        <input type="password" class="w-full px-3 py-2 border border-gray-400 rounded" placeholder="Password"
          v-model="password">
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" class="border-gray-400 rounded" v-model="rememberMe">
        <label for="remember_me">
          <Paragraph text="Remember me" />
        </label>
      </div>
      <div class="flex items-center justify-end gap-2 xl:mt-6 lg:mt-4">
        <RouterLink :to="RoutesName.forgotPasswordRoute" class="block">
          <Paragraph text="Forgot your password?" />
        </RouterLink>
        <PrimaryButton text="Sign In" @click="authStore.signIn(email, password, rememberMe)" />
      </div>
    </Card>
  </div>
</template>
