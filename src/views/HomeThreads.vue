<script setup>

import { ref } from 'vue';
import Thread from '@/components/Thread.vue';

const threads = ref([
  {
    id: 1,
    title: 'First thread',
    content: 'Hello world',
    userName: 'Alice',
    postTime: '2025/07/20 19:22:11',
    replyCount: 7
  },
  {
    id: 2,
    title: 'Second thread',
    content: 'Vue is great',
    userName: 'Bob',
    postTime: '2025/07/21 08:01:00',
    replyCount: 3
  }
])

</script>

<template>
  <div class="content">
    <Thread
      v-for="t in threads"
      :key="t.id"
      :id="t.id"
      :title="t.title"
      :content="t.content"
      :user-name="t.userName"
      :post-time="t.postTime"
      :reply-count="t.replyCount"
    />
  </div>
</template>

<style scoped>
.content {
  border: 1px solid black;
  margin: 8px;
}
</style>