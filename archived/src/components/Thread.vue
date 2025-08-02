<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  userName: { type: String, required: true },
  postTime: { type: String, required: true },
  replyCount: { type: Number, required: true }
})
</script>

<template>
  <div class="thread-preview">
    <p>{{ props.title }} [+{{ props.replyCount }}]</p>
    <p>{{ props.content }}</p>
    <p>{{ props.userName }} ({{ props.postTime }})</p>
  </div>
</template>

<style scoped>
.thread-preview {
  border: 1px solid rgb(176, 185, 176);
  margin: 8px;
}

.thread-preview:hover {
  background-color: rgb(176, 185, 176);
}

.thread-preview p {
  margin: 8px;
}
</style>