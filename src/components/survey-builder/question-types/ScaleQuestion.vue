<script setup lang="ts">
import type { LikertOption, LikertScaleQuestion } from '@/types/Survey'
defineProps<{
  question: LikertScaleQuestion
}>()
</script>

<template>
  <p>Likert Scale Question</p>
  <label>{{ question.label }}</label>
  <div v-for="(option, index) in question.options" :key="index">
    <input type="text" :value="option.label" placeholder="Edit option label" />
  </div>
</template>

<style scoped></style>
