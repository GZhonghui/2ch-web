<script setup>

import { ref } from 'vue';
import {
  NButton,
  NMessageProvider,
  NConfigProvider,
  createDiscreteApi
} from 'naive-ui';

const { message } = createDiscreteApi(['message'])

function onClickRegister() {

}

function onClickLogin() {

}

function onClickPost() {

}

function onClickProfile() {
  message.error('Please login!')
}
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <header class="header-bar">
        <h1 class="title">2ch</h1>
        <div class="actions">
          <n-button type="primary" @click="onClickRegister">Register</n-button>
          <n-button type="primary" @click="onClickLogin">Login</n-button>
          <n-button type="primary" @click="onClickPost">Post</n-button>
          <n-button type="primary" @click="onClickProfile">Profile</n-button>
        </div>
      </header>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.header-bar {
  width: 100%;
  height: 64px;
  margin-bottom: 16px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-sizing: border-box;
  color: #fff;
}

.title {
  margin: 0;
  font-size: 24px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>