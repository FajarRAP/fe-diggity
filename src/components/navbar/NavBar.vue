<script setup lang="ts">
import RoutesName from '@/router/routes';
import PrimaryButton from '../buttons/PrimaryButton.vue';
import PrimaryOutlineButton from '../buttons/PrimaryOutlineButton.vue';
import HeadingTwo from '../fonts/HeadingTwo.vue';
</script>

<template>
  <div class="flex items-center xl:px-24 lg:px-16 xl:py-8 lg:py-5 xl:gap-6 lg:gap-4">
    <img src="@/assets/images/logo.png" alt="logo" class="xl:size-16 lg:size-10">
    <HeadingTwo text="Diggity" />
    <RouterLink :to="RoutesName.signInRoute" class="block ms-auto">
      <PrimaryOutlineButton text="Sign In" />
    </RouterLink>
    <PrimaryButton text="Sign Up" />
  </div>
</template>
