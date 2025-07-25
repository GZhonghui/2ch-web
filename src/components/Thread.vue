<script setup>
import { ref } from 'vue';

// const title = ref('Empty Title')
// const content = ref('Empty Content')
// const user_name = ref('Empty User Name')
// const post_time = ref('2025/07/20 19:22:11')
// const reply_count = ref(7)

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
  border: 1px solid rgb(26, 206, 16);
  margin: 8px;
}

.thread-preview:hover {
  background-color: rgb(26, 206, 16);
}

.thread-preview p {
  margin: 8px;
}
</style>