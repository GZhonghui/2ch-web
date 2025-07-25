<script setup>

import { ref } from 'vue';
import { NButton } from 'naive-ui';
import Thread from './components/Thread.vue';

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
  // ... 更多
])

</script>

<template>
  <div class="page">
    <header class="header-bar">
      <h1 class="title">2ch</h1>
      <div class="actions">
        <n-button type="primary">Register</n-button>
        <n-button type="primary">Login</n-button>
        <n-button type="primary">Post</n-button>
        <n-button type="primary">Profile</n-button>
      </div>
    </header>

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
  </div>
</template>

<style scoped>
.page {
  font-family: sans-serif;
  margin: 0;
}

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

.content {
  border: 1px solid black;
  margin: 8px;
}
</style>