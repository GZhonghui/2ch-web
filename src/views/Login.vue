<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NInput, NSpace, NButton, createDiscreteApi } from 'naive-ui';

const router = useRouter();
const { message } = createDiscreteApi(['message'])

let username = ref("");
let password = ref("");

async function onClickLogin() {
  if(username.value == "") {
    message.error("Please input username!")
  } else if(password.value == "") {
    message.error("Please input password!")
  } else {
    message.info("Try to login...")
    // router.push('/')

    try {
      const res = await fetch('http://127.0.0.1:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      });

      const data = await res.json();

      if (!res.ok) {
        return message.error(data.message || `Login failed (${res.status})`);
      }

      if (data.success) {
        message.success("Login success!");
      } else {
        message.error(data.message || "Login failed!");
      }
    } catch (err) {
      console.error(err);
      message.error("Network error, please try again later.");
    }
  }
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