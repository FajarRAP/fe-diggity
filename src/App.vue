<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/navbar/NavBar.vue';
import RoutesName from './router/routes';
</script>

<template>
  <NavBar v-if="$route.fullPath != RoutesName.signInRoute" />
  <RouterView />
</template>
