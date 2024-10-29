<script setup lang="ts">
import TextareaQuestion from '@/components/live-preview/question-types/TextareaQuestion.vue'
import ScaleQuestion from '@/components//live-preview/question-types/ScaleQuestion.vue'
import type { Survey } from '@/types/Survey'

defineProps<{
  survey: Survey
}>()
</script>

<template>
  <p>Live preview</p>
  <h3>{{ survey.title }}</h3>
  <p>{{ survey.description }}</p>

  <div v-for="question in survey.questions" :key="question.id">
    <TextareaQuestion
      v-if="question.type === 'textarea'"
      :question="question"
    />
    <ScaleQuestion v-else-if="question.type === 'scale'" :question="question" />
  </div>
</template>

<style scoped></style>
