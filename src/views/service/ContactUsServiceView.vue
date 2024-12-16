<script setup lang="ts">
import { ServiceOrderParams } from '@/common/models';
import Breadcumb from '@/components/breadcumb/Breadcumb.vue';
import BreadcumbLink from '@/components/breadcumb/BreadcumbLink.vue';
import FirstForm from '@/components/contact-us/service/FirstForm.vue';
import SecondForm from '@/components/contact-us/service/SecondForm.vue';
import ThirdForm from '@/components/contact-us/service/ThirdForm.vue';
import HeadingFour from '@/components/fonts/HeadingFour.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import HeadingSix from '@/components/fonts/HeadingSix.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import { useServiceStore } from '@/stores/service_store';
import { ref, type Ref } from 'vue';

const serviceStore = useServiceStore()

const pageIndex: Ref<number> = ref(0)

const nextPage = () => ++pageIndex.value
const prevPage = () => --pageIndex.value

const name: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const email: Ref<string> = ref('')
const service: Ref<string> = ref('')
const collaboration: Ref<string> = ref('')
const description: Ref<string> = ref('')
const schedule: Ref<string> = ref('')
const budget: Ref<string> = ref('')
const companyName: Ref<string> = ref('')
const position: Ref<string> = ref('')
const employeeCount: Ref<string> = ref('')
const businessDuration: Ref<string> = ref('')
const region: Ref<string> = ref('')
const regency: Ref<string> = ref('')

</script>

<template>
  <div class="container flex flex-col mx-auto text-center xl:my-24 lg:my-16 xl:gap-12 lg:gap-8">
    <Breadcumb>
      <BreadcumbLink text="Hubungi Kami" />
    </Breadcumb>
    <div class="xl:space-y-6 lg:space-y-4">
      <HeadingOne text="Hubungi Kami" />
      <Paragraph
        text="Konsultasikan kebutuhan digitalisasi perusahaan Anda dengan Diggity. Segera bangun platform digital bisnis Anda bersama kami." />
    </div>
    <div class="xl:space-y-6 lg:space-y-4">
      <HeadingFour :text="`Tahap 1 dari 3`" />
      <HeadingSix text="Bagaimana cara kami menghubungi Anda?" />
    </div>

    <FirstForm v-show="pageIndex == 0" @next="(p0, p1, p2) => { name = p0; phone = p1; email = p2; nextPage(); }" />
    <SecondForm v-show="pageIndex == 1" @prev="prevPage"
      @next="(p0, p1, p2, p3, p4) => { service = p0; collaboration = p1; description = p2; schedule = p3; budget = p4; nextPage() }" />
    <ThirdForm v-show="pageIndex == 2" @prev="prevPage" @send="(p0, p1, p2, p3, p4, p5) => {
      companyName = p0;
      position = p1;
      employeeCount = p2;
      businessDuration = p3;
      region = p4;
      regency = p5;
      const params = new ServiceOrderParams(name, phone, email, service, collaboration, description, schedule, budget, companyName, position, employeeCount, 'Swasta', businessDuration, region, regency)
      serviceStore.insertServiceOrder(params)
    }" />
  </div>
</template>
