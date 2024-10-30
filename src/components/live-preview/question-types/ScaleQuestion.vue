<script setup lang="ts">
import type { LikertScaleQuestion } from '@/types/Survey'
defineProps<{
  question: LikertScaleQuestion
}>()

const getBackgroundColor = (type: number) => {
  switch (type) {
    case 1:
      return 'bg-green-500'
    case 2:
      return 'bg-lime-400'
    case 3:
      return 'bg-yellow-300'
    case 4:
      return 'bg-amber-500'
    case 5:
      return 'bg-red-500'
    default:
      return null
  }
}
</script>

<template>
  <label :for="question.id">{{ question.label }}</label>
  <v-radio-group inline :id="question.id">
    <v-radio
      v-for="option in question.scaleLabels"
      :label="option.label"
      :key="option.value"
      :value="option.value"
      :class="getBackgroundColor(option.value)"
      class="m-0.5 pr-2"
    ></v-radio>
  </v-radio-group>
</template>

<style scoped></style>
