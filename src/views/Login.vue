<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NSpace, NButton } from 'naive-ui';
</script>

<template>
  <div style="margin: 16px;">
    <n-space vertical>
      <n-input placeholder="Username" :maxlength="10" style="width: 320px;" />
      <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="Password"
        :maxlength="20"
        style="width: 320px;"
      />
    </n-space>
    <n-space horizontal style="margin-top: 16px;">
      <n-button type="primary">Login</n-button>
      <n-button type="primary">Register</n-button>
    </n-space>
  </div>
</template>