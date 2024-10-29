<script setup lang="ts">
import type { LikertOption, LikertScaleQuestion } from '@/types/Survey'
defineProps<{
  question: LikertScaleQuestion
}>()
</script>

<template>
  <label>{{ question.label }}</label>
  <div v-for="option in question.scaleLabels" :key="option.value">
    <input type="radio" :name="question.id" :value="option.value" />
    <span>{{ option.label }}</span>
  </div>
</template>

<style scoped></style>
