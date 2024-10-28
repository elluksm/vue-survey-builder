<script setup lang="ts">
import LivePreview from '@/components/live-preview/LivePreview.vue'
import SurveyBuilder from '@/components/survey-builder/SurveyBuilder.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <SurveyBuilder></SurveyBuilder>
  <LivePreview></LivePreview>
</template>

<style scoped></style>
