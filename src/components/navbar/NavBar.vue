<script setup lang="ts">
import RoutesName from '@/router/routes';
import PrimaryButton from '../buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '../buttons/PrimaryOutlineButton.vue';
import HeadingTwo from '../fonts/HeadingTwo.vue';
import { useAuthStore, User } from '@/stores/auth_store';
import { onMounted } from 'vue';

const authStore = useAuthStore();

const signOut = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}v1/auth/logout`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
  });

  if (!response.ok) return;
  sessionStorage.clear();
  authStore.checkIsLoggedIn();
}
</script>

<template>
  <div class="flex items-center xl:px-24 lg:px-16 xl:py-8 lg:py-5 xl:gap-6 lg:gap-4 shadow-navbar bg-onPrimary">
    <RouterLink :to="RoutesName.serviceRoute" class="flex items-center xl:gap-6 lg:gap-4">
      <img src="@/assets/images/logo.png" alt="logo" class="xl:size-16 lg:size-10">
      <HeadingTwo text="Diggity" />
    </RouterLink>
    <div class="ms-auto xl:space-x-6 lg:space-x-4" v-if="!authStore.isLoggedIn">
      <RouterLink :to="RoutesName.signInRoute">
        <PrimaryOutlineButton text="Sign In" />
      </RouterLink>
      <RouterLink :to="RoutesName.signUpRoute">
        <PrimaryButton text="Sign Up" />
      </RouterLink>
    </div>
    <div class="ms-auto xl:space-x-6 lg:space-x-4" v-if="authStore.isLoggedIn">
      <PrimaryButton text="Sign Out" @click="signOut" />
    </div>
  </div>
</template>
