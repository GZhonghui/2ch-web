<script setup lang="ts">
import router from '@/router/index.ts';
import { NButton, NFlex, NDivider } from 'naive-ui';

function onHomeClick() {
  router.push('/');
}

function onPostClick() {
  router.push('/post');
}

function onLoginClick() {
  router.push('/login');
}

function onProfileClick() {
  router.push('/user/1');
}
</script>

<template>
  <div style="margin: 16px;">
    <n-flex>
      <n-button @click="onHomeClick">Home</n-button>
      <n-button @click="onPostClick">Post</n-button>
      <n-button @click="onLoginClick">Login</n-button>
      <n-button @click="onProfileClick">Profile</n-button>
    </n-flex>
    <n-divider></n-divider>
  </div>
</template>