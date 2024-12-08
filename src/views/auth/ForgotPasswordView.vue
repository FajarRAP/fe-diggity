<script setup lang="ts">
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import ParagraphSmall from '@/components/fonts/ParagraphSmall.vue';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import { formInputborder } from '@/common/helpers';
import { object, string } from 'yup';
import { ref, type Ref } from 'vue';
import { toTypedSchema } from '@vee-validate/yup';
import { useAuthStore } from '@/stores/auth_store';
import { useForm } from 'vee-validate';

const authStore = useAuthStore()

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(object({
    email: string().email().required()
  }))
})

const [email, emailAttrs] = defineField('email')
const isLoading: Ref<boolean> = ref(false)

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true
  await authStore.forgotPassword(values.email)
  isLoading.value = false
})
</script>

<template>
  <div class="flex items-center justify-center h-dvh">
    <Card class="w-lg xl:p-12 lg:p-8">
      <div class="flex items-center justify-center xl:gap-6 lg:gap-4">
        <img src="@/assets/images/logo.png" alt="logo" class="xl:size-24 lg:size-16">
        <div>
          <HeadingOne text="Diggity" />
        </div>
      </div>
      <form class="flex flex-col xl:mt-12 lg:mt-8 xl:gap-6 lg:gap-4" @submit="onSubmit">
        <div>
          <label for="email">
            <Paragraph text="Email" class="mb-1.5 font-semibold" />
          </label>
          <input type="email" class="w-full px-3 py-2 border rounded" id="email" placeholder="Email" v-model="email"
            v-bind="emailAttrs" :class="formInputborder(errors.email)">
          <ParagraphSmall class="text-red-600" :text="errors.email" v-if="errors.email" />
        </div>
        <div class="flex items-center justify-end gap-2 xl:mt-6 lg:mt-4">
          <PrimaryButton text="Email Password Reset Link" v-if="!isLoading" />
          <PrimaryButton text="Email Password Reset Link" disabled v-if="isLoading" />
        </div>
      </form>
    </Card>
  </div>
</template>
