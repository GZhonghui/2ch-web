<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NSpace, NButton } from 'naive-ui';
</script>

<template>
  <div style="margin: 16px;">
    <n-space vertical>
      <n-input placeholder="Title" style="width: 640px;" />
      <n-input
        type="textarea"
        placeholder="Content"
        :autosize="{
          minRows: 3,
        }"
        style="width: 640px;"
      />
      <n-button type="primary">Send</n-button>
    </n-space>
  </div>
</template>