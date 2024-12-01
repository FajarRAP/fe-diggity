<script setup lang="ts">
import PrimaryButton from './buttons/PrimaryButton.vue'
import HeadingTwo from './fonts/HeadingTwo.vue'
import Paragraph from './fonts/Paragraph.vue'
import WrapperInversePrimary from './wrappers/WrapperInversePrimary.vue'
import HomeImage from '@/assets/images/image.png'
</script>

<template>
  <WrapperInversePrimary>
    <div class="grid grid-cols-2 xl:gap-24 lg:gap-16 items-center">
      <div class="xl:space-y-12 lg:space-y-8">
        <HeadingTwo
          text="Konsultasi Gratis Mengenai Bagaimana Solusi Kami dapat Membantu Perkembangan Bisnis Anda!"
        />
        <Paragraph
          text="Jika Anda memiliki proyek yang ingin direalisasikan atau ingin berkolaborasi dengan kami dalam mengembangkan bisnis impian Anda, jangan ragu untuk menghubungi kami sekarang!"
        />
        <PrimaryButton text="Hubungi Kami" />
      </div>

      <img :src="HomeImage" alt="contact us image" class="rounded-3xl" />
    </div>
  </WrapperInversePrimary>
</template>
