<script setup lang="ts">
import { ref, computed } from 'vue';
import { NButton, NFlex, NCard, NTag, NSpace } from 'naive-ui';

const props = defineProps({
  threadID: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  date : {
    type: String,
    required: true
  }
})

const displayLength = 18; // 设置标题显示的最大长度
const displayTitle = computed(() => {
  return props.title.length > displayLength
    ? props.title.slice(0, displayLength) + '...'
    : props.title;
});

function handleClick(): void {
  
}
</script>

<template>
  <div>
    <n-card
      :title="displayTitle" hoverable
      style="width: 256px; height: 128px; cursor: pointer;"
      @click="handleClick"
    >
      <n-space>
        <n-tag>@{{ props.username }}</n-tag>
        <n-tag>{{ props.date }}</n-tag>
      </n-space>
    </n-card>
  </div>
</template>