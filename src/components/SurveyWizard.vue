<script setup lang="ts">
import LivePreview from '@/components/live-preview/LivePreview.vue'
import SurveyBuilder from '@/components/survey-builder/SurveyBuilder.vue'
import { useSurveyWizardStore } from '@/stores/survey-wizard'
import { storeToRefs } from 'pinia'

const surveyStore = useSurveyWizardStore()
const { survey } = storeToRefs(surveyStore)
</script>

<template>
  <header>
    <div class="bg-cyan-600 text-slate-50 px-8 py-4">
      <h1 class="text-4xl font-bold">Survey Wizard</h1>
      <h2>Let's build your amazing survey!</h2>
    </div>
  </header>
  <main>
    <div class="flex flex-row">
      <SurveyBuilder class="w-3/5 px-12 py-8" :survey="survey"></SurveyBuilder>
      <LivePreview class="w-2/5 p-6" :survey="survey"></LivePreview>
    </div>
  </main>
</template>

<style scoped></style>
