<script setup lang="ts">
const props = defineProps({
  id: Number
})
</script>

<template>
  <div style="margin: 16px;">
    <p>Profile Information: {{ props.id }}</p>
  </div>
</template>