<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NInput, NSpace, NButton } from 'naive-ui';

const router = useRouter();

let username = ref("");
let password = ref("");

function onClickLogin() {
  router.push('/')
}

</script>

<template>
  <div style="padding: 16px;">
    <n-space vertical>
      <n-input v-model:value="username" type="text" placeholder="Username" />
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="mousedown"
        placeholder="Password"
        :maxlength="16"
      />
      <n-button type="primary" @click="onClickLogin">Login</n-button>
    </n-space>
  </div>
</template>