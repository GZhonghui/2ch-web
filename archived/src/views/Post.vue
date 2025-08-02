<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NInput, NSpace, NButton, createDiscreteApi } from 'naive-ui';

const router = useRouter();
const { message } = createDiscreteApi(['message'])

let title = ref("");
let content = ref("");

function onClickPost() {
  if(title.value == "") {
    message.error('Please input title!')
  } else {
    message.info(`Sending... [${title.value}]`)
    router.push('/')
  }
}

</script>

<template>
  <div style="padding: 16px;">
    <n-space vertical>
      <n-input v-model:value="title" type="text" placeholder="Title" />
      <n-input
        v-model:value="content"
        type="textarea"
        rows="10"
        placeholder="Content"
      />
      <n-button type="primary" @click="onClickPost">Post</n-button>
    </n-space>
  </div>
</template>