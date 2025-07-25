<script setup>

import { ref } from 'vue';
import Header from './components/Header.vue';
import HomeThreads from './views/HomeThreads.vue';

</script>

<template>
  <div class="page">
    <Header />
    <HomeThreads />
  </div>
</template>

<style scoped>
.page {
  font-family: sans-serif;
  margin: 0;
}
</style>