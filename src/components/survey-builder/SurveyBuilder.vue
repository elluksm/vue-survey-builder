<script setup lang="ts">
import TextareaQuestion from '@/components/survey-builder/question-types/TextareaQuestion.vue'
import ScaleQuestion from '@/components//survey-builder/question-types/ScaleQuestion.vue'
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
  <div class="flex flex-col">
    <v-form>
      <div class="pb-10">
        <v-text-field
          label="Survey Title"
          v-model="survey.title"
          variant="solo-filled"
        ></v-text-field>

        <v-textarea
          label="Survey Description"
          v-model="survey.description"
          hint="Briefly describe your survey. Keep it engaging and concise!"
          persistent-hint
          variant="solo-filled"
          rows="2"
          auto-grow
        ></v-textarea>
      </div>

      <div class="flex justify-center">
        <div class="bg-cyan-100 py-4 px-6 mb-6 drop-shadow-md rounded">
          <p>
            <v-icon icon="mdi-plus" size="small" class="mr-1" />Add Questions
          </p>
          <v-btn
            class="m-2"
            prepend-icon="mdi-format-text"
            stacked
            @click="addOpenTextQuestion"
          >
            TextBox
          </v-btn>
          <v-btn
            class="m-2"
            prepend-icon="mdi-scale"
            stacked
            @click="addLikertScaleQuestion"
          >
            Scale
          </v-btn>
        </div>
      </div>

      <div
        v-for="question in survey.questions"
        :key="question.id"
        class="bg-cyan-50 mb-6 p-4 drop-shadow-lg rounded"
      >
        <TextareaQuestion
          v-if="question.type === 'textarea'"
          :question="question"
        />
        <ScaleQuestion
          v-else-if="question.type === 'scale'"
          :question="question"
        />
        <div class="flex justify-end">
          <v-btn
            prepend-icon="$vuetify"
            size="small"
            color="cyan-darken-1"
            class="mr-2"
            @click="duplicateQuestion(question.id)"
          >
            Duplicate
          </v-btn>
          <v-btn
            prepend-icon="$vuetify"
            size="small"
            color="red-darken-4"
            @click="deleteQuestion(question.id)"
          >
            Delete
          </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<style scoped></style>
