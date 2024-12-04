<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import RoutesName from '@/router/routes';
</script>

<template>
  <div class="grid grid-cols-5 h-dvh">
    <img src="@/assets/images/auth-bg.png" alt="auth bg" class="object-cover h-full col-span-2">
    <div class="flex flex-col col-span-3 xl:p-36 lg:p-24 xl:gap-6 lg:gap-4">
      <div class="flex xl:gap-6 lg:gap-4 xl:mb-6 lg:mb-4">
        <img src="@/assets/images/logo.png" alt="logo" class="xl:size-24 lg:size-16">
        <div>
          <HeadingTwo text="Diggity" />
          <HeadingOne text="Account" />
        </div>
      </div>
      <HeadingOne text="Sign Up" />
      <Paragraph text="Lengkapi form di bawah dengan menggunakan data Anda yang valid" class="xl:mb-6 lg:mb-4" />
      <Card class="xl:space-y-6 lg:space-y-4">
        <div>
          <label for="username">
            <Paragraph text="Username" class="mb-1.5 font-semibold" />
          </label>
          <input type="text"
            class="w-full px-3 py-2 border border-gray-400 rounded focus:border-primary focus:ring-primary focus:outline-primary"
            id="username" placeholder="Username">
        </div>
        <div>
          <label for="email">
            <Paragraph text="Email" class="mb-1.5 font-semibold" />
          </label>
          <input type="email"
            class="w-full px-3 py-2 border border-gray-400 rounded focus:border-primary focus:ring-primary focus:outline-primary"
            id="email" placeholder="Email">
        </div>
        <div>
          <label for="password">
            <Paragraph text="Password" class="font-semibold mb-1.5" />
          </label>
          <input type="password"
            class="w-full px-3 py-2 border border-gray-400 rounded focus:border-primary focus:ring-primary focus:outline-primary"
            id="password" placeholder="Password">
        </div>
        <div>
          <label for="confirm_password">
            <Paragraph text="Confirm Password" class="font-semibold mb-1.5" />
          </label>
          <input type="password"
            class="w-full px-3 py-2 border border-gray-400 rounded focus:border-primary focus:ring-primary focus:outline-primary"
            id="confirm_password" placeholder="Confirm Password">
        </div>
        <PrimaryButton text="Sign In" class="w-full" />
        <span class="block text-center">
          <Paragraph text="Belum punya akun?" class="inline" />
          <RouterLink :to="RoutesName.signInRoute">
            <HeadingSix text=" Sign In" class="inline text-primary" />
          </RouterLink>
        </span>
      </Card>
      <div class="flex items-center">
        <Paragraph text="Ketentuan Pengguna" class="font-semibold ms-auto" />
        <div class="mx-3 bg-black rounded-full size-3"></div>
        <Paragraph text="Kebijakan Privasi" class="font-semibold me-auto" />
      </div>
    </div>
  </div>
</template>
