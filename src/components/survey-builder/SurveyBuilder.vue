<script setup lang="ts">
import type { Survey } from '@/types/Survey'
import { useSurveyWizardStore } from '@/stores/survey-wizard'

defineProps<{
  survey: Survey
}>()

const surveyStore = useSurveyWizardStore()
const {
  duplicateQuestion,
  deleteQuestion,
  addOpenTextQuestion,
  addLikertScaleQuestion,
} = surveyStore
</script>

<template>
  <h3>{{ survey.title }}</h3>
  <p>{{ survey.description }}</p>

  <div class="question-builder">
    <div v-for="question in survey.questions" :key="question.id">
      <TextareaQuestion
        v-if="question.type === 'textarea'"
        :question="question"
      />
      <ScaleQuestion
        v-else-if="question.type === 'scale'"
        :question="question"
      />

      <button @click="duplicateQuestion(question.id)">Duplicate</button>
      <button @click="deleteQuestion(question.id)">Delete</button>
    </div>

    <button @click="addLikertScaleQuestion">Add Likert Scale Question</button>
    <button @click="addOpenTextQuestion">Add Textarea Question</button>
  </div>
</template>

<style scoped></style>
