<script setup lang="ts">
import TextareaQuestion from '@/components/live-preview/question-types/TextareaQuestion.vue'
import ScaleQuestion from '@/components//live-preview/question-types/ScaleQuestion.vue'
import type { Survey } from '@/types/Survey'

defineProps<{
  survey: Survey
}>()
</script>

<template>
  <div class="flex flex-col">
    <p class="bg-green-400 text-slate-50 px-8 py-2 text-lg font-bold">
      <v-icon icon="mdi-magnify" size="small" />
      Live Preview
    </p>
    <div
      class="py-6 pl-10 px-8 border-2 border-t-0 border-indigo-100 bg-indigo-50"
    >
      <h3 class="text-center pb-1 text-xl text-indigo-900">
        {{ survey.title }}
      </h3>
      <p class="text-center pb-8 text-slate-900">{{ survey.description }}</p>

      <v-form>
        <div v-for="question in survey.questions" :key="question.id">
          <TextareaQuestion
            v-if="question.type === 'textarea'"
            :question="question"
          />
          <ScaleQuestion
            v-else-if="question.type === 'scale'"
            :question="question"
          />
        </div>
      </v-form>
    </div>
  </div>
</template>

<style scoped></style>
