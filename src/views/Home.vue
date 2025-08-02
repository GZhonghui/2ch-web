<script setup lang="ts">

import { ref } from 'vue';
import { NButton, NFlex, NCard } from 'naive-ui';
import ThreadCard from '@/components/ThreadCard.vue';

const data = ref([
  { id: 1, title: 'Welcome to the Home Page' },
  { id: 2, title: 'Latest News' },
  { id: 3, title: 'Upcoming Events' }
]);

</script>

<template>
  <div style="margin: 16px;">
    <n-flex>
      <ThreadCard
        v-for="thread in data"
        :key="thread.id"
        :threadID="thread.id"
        :title="thread.title"
        username="User123"
        date="2023-10-01"
      />
    </n-flex>
  </div>
</template>