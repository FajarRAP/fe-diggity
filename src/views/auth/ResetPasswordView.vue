<script setup lang="ts">
import { formInputborder } from '@/common/helpers';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import ParagraphSmall from '@/components/fonts/ParagraphSmall.vue';
import { useAuthStore } from '@/stores/auth_store';
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import * as yup from 'yup';

const authStore = useAuthStore()
const route = useRoute()
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords do not match').required(),
  }))
});
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

const onSubmit = handleSubmit(async (values) => await authStore.resetPassword(values.email, values.password, values.confirmPassword, `${route.query.token}`));

</script>

<template>
  <div class="flex items-center justify-center h-dvh">
    <Card class="w-lg xl:p-12 lg:p-8">
      <div class="flex items-center justify-center xl:gap-6 lg:gap-4">
        <img src="@/assets/images/logo.png" alt="logo" class="xl:size-24 lg:size-16">
        <HeadingOne text="Diggity" />
      </div>
      <form class="flex flex-col xl:gap-6 lg:gap-4 xl:mt-6 lg:mt-4" @submit="onSubmit">
        <div>
          <label for="email">
            <Paragraph text="Email" class="mb-1.5 font-semibold" />
          </label>
          <input type="email" class="w-full px-3 py-2 border rounded" id="email" placeholder="Email" v-model="email"
            v-bind="emailAttrs" :class="formInputborder(errors.email)">
          <ParagraphSmall class="text-red-600" :text="errors.email" v-if="errors.email" />
        </div>
        <div class="">
          <label for="password">
            <Paragraph text="Password" class="mb-1.5 font-semibold" />
          </label>
          <input type="password" class="w-full px-3 py-2 border rounded" id="password" placeholder="Password"
            v-model="password" v-bind="passwordAttrs" :class="formInputborder(errors.password)">
          <ParagraphSmall class="text-red-600" :text="errors.password" v-if="errors.password" />
        </div>
        <div>
          <label for="confirm_password">
            <Paragraph text="Confirm Password" class="mb-1.5 font-semibold" />
          </label>
          <input type="password" class="w-full px-3 py-2 border rounded" id="confirm_password"
            placeholder="Confirm Password" v-model="confirmPassword" v-bind="confirmPasswordAttrs"
            :class="formInputborder(errors.confirmPassword)">
          <ParagraphSmall class="text-red-600" :text="errors.confirmPassword" v-if="errors.confirmPassword" />
        </div>
        <div class="flex items-center justify-end gap-2 xl:mt-6 lg:mt-4">
          <PrimaryButton text="Reset Password" />
        </div>
      </form>
    </Card>
  </div>
</template>
