<script setup lang="ts">
import type { OpenTextQuestion } from '@/types/Survey'
defineProps<{
  question: OpenTextQuestion
}>()
</script>

<template>
  <label>{{ question.label }}</label>
  <textarea :placeholder="question.placeholder"></textarea>
</template>

<style scoped></style>
