<script setup lang="ts">
import Constants from '@/common/constants';
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import FaqCardItem from '@/components/cards/FaqCardItem.vue';
import ContactUs from '@/components/ContactUs.vue';
import HeadingFive from '@/components/fonts/HeadingFive.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import ParagraphExtraSmall from '@/components/fonts/ParagraphExtraSmall.vue';
import Footer from '@/components/Footer.vue';
import WrapperBottomBreadcumb from '@/components/wrappers/WrapperBottomBreadcumb.vue';
import WrapperInversePrimary from '@/components/wrappers/WrapperInversePrimary.vue';
import WrapperTransparent from '@/components/wrappers/WrapperTransparent.vue';
import RoutesName from '@/router/routes';
import { ref } from 'vue';

const props = defineProps({ slug: String })

const service = Constants.servicePages.find((e) => e.slug == props.slug)
const faqIndex = ref(-1);

const setFaqIndex = (index: number) => {
  if (faqIndex.value == index) return faqIndex.value = -1
  faqIndex.value = index
}
</script>

<template>
  <WrapperInversePrimary class="text-center">
    <Breadcumb>
      <BreadcumbLink text="Layanan" :link="RoutesName.serviceRoute" />
      <BreadcumbLink :text="service?.title" />
    </Breadcumb>
    <HeadingOne :text="service?.title" />
    <Paragraph :text="service?.description" />
    <PrimaryButton text="Hubungi Kami" />
  </WrapperInversePrimary>

  <WrapperTransparent>
    <div class="grid items-center grid-cols-2 xl:gap-24 lg:gap-16">
      <HeadingOne :text="`Layanan ${service?.title} yang Kami Sediakan`" />
      <div class="grid grid-cols-2 xl:gap-7 lg:gap-5">
        <div class="xl:space-y-6 lg:space-y-4" v-for="e in service?.benefits">
          <HeadingTwo :text="e.title" />
          <Paragraph :text="e.description" />
        </div>
      </div>
    </div>
  </WrapperTransparent>

  <WrapperInversePrimary class="text-center">
    <HeadingTwo :text="`Layanan ${service?.title} Kami Membantu Anda Membangun Berbagai Solusi`" />
    <div class="grid grid-cols-3 xl:gap-x-7 lg:gap-x-5 xl:gap-y-12 lg:gap-y-8">
      <div class="xl:space-y-6 lg:space-y-4" v-for="e in service?.solutions">
        <img :src="e.img" alt="solution image" class="mx-auto xl:size-20 lg:size-14">
        <HeadingSix :text="e.title" />
        <ParagraphExtraSmall :text="e.description" />
      </div>
    </div>
  </WrapperInversePrimary>

  <WrapperTransparent>
    <div class="grid grid-cols-2 xl:gap-36 lg:gap-24">
      <div class="xl:space-y-6 lg:space-y-4">
        <HeadingFive text="Frequently Asked Questions" class="text-accent" />
        <HeadingTwo :text="`Apa itu layanan ${service?.title}?`" />
        <Paragraph :text="service?.definition" />
      </div>
      <div class="xl:space-y-6 lg:space-y-4">
        <template v-for="(e, i) in service?.faqs">
          <FaqCardItem :faq="e" :index="i" :faq-index="faqIndex" @open-faq="setFaqIndex" />
        </template>
      </div>
    </div>
  </WrapperTransparent>

  <ContactUs />

  <WrapperBottomBreadcumb>
    <Breadcumb>
      <BreadcumbLink text="Layanan" :link="RoutesName.serviceRoute" />
      <BreadcumbLink :text="service?.title" />
    </Breadcumb>
  </WrapperBottomBreadcumb>

  <Footer />
</template>
