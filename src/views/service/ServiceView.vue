<script setup lang="ts">
import Breadcumb from '@/components/breadcumb/Breadcumb.vue'
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue'
import Constants from '@/common/constants'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'
import HeadingOne from '@/components/fonts/HeadingOne.vue'
import HeadingTwo from '@/components/fonts/HeadingTwo.vue'
import HomeImage from '@/assets/images/image.png'
import Paragraph from '@/components/fonts/Paragraph.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import RoutesName from '@/router/routes'
import ServiceCardItem from '@/components/cards/ServiceCardItem.vue'
import ServiceTypeCardItem from '@/components/cards/ServiceTypeCardItem.vue'
import WrapperBottomBreadcumb from '@/components/wrappers/WrapperBottomBreadcumb.vue'
import WrapperInversePrimary from '@/components/wrappers/WrapperInversePrimary.vue'
import WrapperTransparent from '@/components/wrappers/WrapperTransparent.vue'

</script>

<template>
  <WrapperInversePrimary>
    <Breadcumb>
      <BreadcumbLink text="Layanan" />
    </Breadcumb>
    <div class="grid items-center grid-cols-2 xl:gap-24 lg:gap-16">
      <div class="xl:space-y-12 lg:space-y-8">
        <HeadingOne text="Layanan" />
        <Paragraph
          text="Diggity menyediakan beragam layanan terbaik yang dirancang khusus untuk memenuhi kebutuhan teknologi dan digitalisasi produk Anda. Kami mengakui bahwa setiap produk memiliki karakteristik uniknya sendiri. Oleh karena itu, jangan sungkan untuk menghubungi kami dan berkonsultasi tentang produk Anda." />
        <RouterLink :to="RoutesName.contactUsServiceRoute" class="block">
          <PrimaryButton text="Hubungi Kami" />
        </RouterLink>
      </div>
      <img :src="HomeImage" alt="heading image" class="rounded-2xl" />
    </div>
  </WrapperInversePrimary>

  <WrapperTransparent>
    <HeadingTwo text="Layanan yang Kami Sediakan" />
    <div class="xl:space-y-12 lg:space-y-8">
      <template v-for="e in Constants.serviceCards">
        <RouterLink :to="`${RoutesName.serviceRoute}service/${e.slug}`" class="block">
          <ServiceCardItem :title="e.title" :description="e.description" :img="e.img" />
        </RouterLink>
      </template>
    </div>
  </WrapperTransparent>

  <WrapperInversePrimary class="text-center">
    <HeadingTwo text="Tidak Menemukan Solusi yang Sesuai Kebutuhan Anda?" />
    <Paragraph text="Tim kami siap memberikan bantuan dengan senang hati" />
    <RouterLink :to="`${RoutesName.contactUsServiceRoute}/page/1`" class="block">
      <PrimaryButton text="Hubungi Kami" />
    </RouterLink>
  </WrapperInversePrimary>

  <WrapperTransparent>
    <HeadingTwo text="Model Kerja Sama" />
    <div class="grid grid-cols-3 xl:gap-7 lg:gap-5">
      <template v-for="e in Constants.ServiceTypeCards">
        <RouterLink :to="`${RoutesName.serviceTypeRoute}/${e.slug}`">
          <ServiceTypeCardItem class="h-full" :title="e.title" :description="e.description" :benefits="e.benefits"
            :img="HomeImage" />
        </RouterLink>
      </template>
    </div>
  </WrapperTransparent>

  <ContactUs />

  <WrapperBottomBreadcumb>
    <Breadcumb>
      <BreadcumbLink text="Layanan" />
    </Breadcumb>
  </WrapperBottomBreadcumb>

  <Footer />
</template>
