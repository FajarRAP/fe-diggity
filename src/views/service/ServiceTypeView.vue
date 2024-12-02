<script setup lang="ts">
import Arrow from '@/components/breadcumb/Arrow.vue';
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import Constants from '@/common/constants';
import ContactUs from '@/components/ContactUs.vue';
import FaqCardItem from '@/components/cards/FaqCardItem.vue';
import Footer from '@/components/Footer.vue';
import HeadingFive from '@/components/fonts/HeadingFive.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import HeadingTwo from '@/components/fonts/HeadingTwo.vue';
import HomeImage from '@/assets/images/image.png';
import Paragraph from '@/components/fonts/Paragraph.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import RoutesName from '@/router/routes';
import ServiceTypeBenefitCardItem from '@/components/cards/ServiceTypeBenefitCardItem.vue';
import WrapperBottomBreadcumb from '@/components/wrappers/WrapperBottomBreadcumb.vue';
import WrapperInversePrimary from '@/components/wrappers/WrapperInversePrimary.vue';
import WrapperTransparent from '@/components/wrappers/WrapperTransparent.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({ slug: String })
const route = useRoute()

watch(() => route.params.slug, (newSlug, _) => setServiceType(`${newSlug}`))

const serviceType = ref(Constants.serviceTypePage.find((e) => e.slug == props.slug))
const faqIndex = ref(-1)

const setFaqIndex = (index: number) => {
  if (index == faqIndex.value) return faqIndex.value = -1
  faqIndex.value = index
}
const setServiceType = (slug: string) => serviceType.value = Constants.serviceTypePage.find((e) => e.slug === slug)
const toSlug = (name: string) => name.toLowerCase().split(' ').join('-');

</script>

<template>
  <WrapperInversePrimary>
    <Breadcumb>
      <BreadcumbLink :text="serviceType?.title" />
    </Breadcumb>
    <div class="grid items-center grid-cols-2 xl:gap-24 lg:gap-16">
      <div class="xl:space-y-12 lg:space-y-8">
        <HeadingOne :text="serviceType?.title" />
        <Paragraph :text="serviceType?.description" />
        <PrimaryButton text="Hubungi Kami" />
      </div>
      <img :src="HomeImage" alt="heading image" class="rounded-2xl" />
    </div>
  </WrapperInversePrimary>

  <WrapperTransparent class="text-center">
    <HeadingOne text="Benefit" />
    <Paragraph text="Manfaat yang Anda Dapatkan" />
    <div class="grid grid-cols-2 xl:gap-x-7 lg:gap-x-5 xl:gap-y-12 lg:gap-y-8">
      <template v-for="e in serviceType?.benefits">
        <ServiceTypeBenefitCardItem :title="e.title" :description="e.description" :img="e.img" />
      </template>
    </div>
  </WrapperTransparent>

  <WrapperInversePrimary>
    <div class="xl:space-y-6 lg:space-y-4">
      <HeadingFive text="Frequently Asked Questions" class="text-accent" />
      <HeadingTwo text="Pelajari Lebih Lanjut" />
    </div>
    <div class="xl:space-y-6 lg:space-y-4">
      <template v-for="(e, i) in serviceType?.faqs">
        <FaqCardItem :faq="e" :index="i" :faq-index="faqIndex" @open-faq="setFaqIndex" />
      </template>
    </div>
  </WrapperInversePrimary>

  <WrapperTransparent>
    <div class="flex justify-between">
      <div class="xl:space-y-6 lg:space-y-4">
        <HeadingFive text="Previous" class="text-accent" />
        <RouterLink :to="toSlug(`${RoutesName.serviceTypeRoute}/${serviceType?.prev}`)" class="block">
          <div class="flex items-center xl:gap-6 lg:gap-4">
            <div class="border-2 border-black rounded-full xl:size-10 lg:size:6 xl:p-4 lg:p-2.5">
              <Arrow class="rotate-180" />
            </div>
            <HeadingTwo :text="serviceType?.prev" />
          </div>
        </RouterLink>
      </div>
      <div class="xl:space-y-6 lg:space-y-4">
        <HeadingFive text="Next" class="text-right text-accent" />
        <RouterLink :to="toSlug(`${RoutesName.serviceTypeRoute}/${serviceType?.next}`)" class="block">
          <div class="flex flex-row-reverse items-center xl:gap-6 lg:gap-4">
            <div class="border-2 border-black rounded-full xl:size-10 lg:size:6 xl:p-4 lg:p-2.5">
              <Arrow />
            </div>
            <HeadingTwo :text="serviceType?.next" />
          </div>
        </RouterLink>
      </div>
    </div>
  </WrapperTransparent>

  <ContactUs />

  <WrapperBottomBreadcumb>
    <Breadcumb>
      <BreadcumbLink :text="serviceType?.title" />
    </Breadcumb>
  </WrapperBottomBreadcumb>

  <Footer />
</template>
