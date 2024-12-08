<script setup lang="ts">
import { formInputborder } from '@/common/helpers';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import Card from '@/components/Card.vue';
import HeadingOne from '@/components/fonts/HeadingOne.vue';
import Paragraph from '@/components/fonts/Paragraph.vue';
import ParagraphSmall from '@/components/fonts/ParagraphSmall.vue';
import RoutesName from '@/router/routes';
import { useAuthStore } from '@/stores/auth_store';
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { boolean, object, string } from 'yup';

const authStore = useAuthStore()
const { errors, defineField, handleSubmit } = useForm({
  initialValues: {
    rememberMe: false,
  },
  validationSchema: toTypedSchema(
    object({
      email: string().email().required(),
      password: string().min(6).required(),
      rememberMe: boolean().required()
    })
  )
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [rememberMe, rememberMeAttrs] = defineField('rememberMe')

const onSubmit = handleSubmit(async (values) => await authStore.signIn(values.email, values.password, values.rememberMe))

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <Card class="w-lg xl:p-12 lg:p-8">
      <div class="flex items-center justify-center xl:gap-6 lg:gap-4">
        <img src="@/assets/images/logo.png" alt="logo" class="xl:size-24 lg:size-16">
        <HeadingOne text="Diggity" />
      </div>
      <form class="flex flex-col xl:mt-12 lg:mt-8 xl:gap-6 lg:gap-4" @submit="onSubmit">
        <div>
          <label for="email">
            <Paragraph text="Email" class="mb-1.5 font-semibold" />
          </label>
          <input type="email" class="w-full px-3 py-2 border rounded " id="email" placeholder="Email" v-model="email"
            v-bind="emailAttrs" :class="formInputborder(errors.email)">
          <ParagraphSmall class="text-red-600" :text="errors.email" v-if="errors.email" />
        </div>
        <div>
          <label for="password">
            <Paragraph text="Password" class="font-semibold mb-1.5" />
          </label>
          <input type="password" class="w-full px-3 py-2 border border-gray-400 rounded" placeholder="Password"
            v-model="password" v-bind="passwordAttrs" :class="formInputborder(errors.password)">
          <ParagraphSmall class="text-red-600" :text="errors.password" v-if="errors.password" />
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" class="border-gray-400 rounded" v-model="rememberMe" v-bind="rememberMeAttrs">
          <label for="remember_me">
            <Paragraph text="Remember me" />
          </label>
        </div>
        <div class="flex items-center justify-end gap-2 xl:mt-6 lg:mt-4">
          <RouterLink :to="RoutesName.forgotPasswordRoute" class="block">
            <Paragraph text="Forgot your password?" />
          </RouterLink>
          <PrimaryButton text="Sign In" />
        </div>
      </form>
    </Card>
  </div>
</template>
