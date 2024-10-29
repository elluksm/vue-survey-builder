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
    <div class="wrapper">
      <h1 class="text-3xl font-bold">Survey Wizard</h1>
      <h2>Let's build your amazing survey!</h2>
    </div>
  </header>
  <main>
    <SurveyBuilder :survey="survey"></SurveyBuilder>
    <LivePreview :survey="survey"></LivePreview>
  </main>
</template>

<style scoped></style>
