<script setup>

import { ref } from 'vue';
import Header from './components/Header.vue';
import HomeThreads from './views/HomeThreads.vue';

</script>

<template>
  <div class="page">
    <Header />
    <div id="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.page {
  font-family: sans-serif;
  margin: 0;
}

#main-content {
  border: 1px solid black;
  margin: 8px;
}
</style>