<script setup lang="ts">
import type { LikertOption, LikertScaleQuestion } from '@/types/Survey'
defineProps<{
  question: LikertScaleQuestion
}>()
</script>

<template>
  <p class="text-cyan-800 font-bold pb-2">Likert Scale Question</p>
  <v-text-field
    label="Question Title"
    v-model="question.label"
    variant="solo"
  ></v-text-field>

  <div class="flex flex-row justify-between flex-wrap">
    <div
      v-for="(option, index) in question.scaleLabels"
      :key="index"
      class="min-w-32 w-1/4 xl:w-1/5"
    >
      <v-text-field
        label="Scale Label"
        v-model="option.label"
        placeholder="Edit scale label"
        variant="solo"
        class="mr-2"
      ></v-text-field>
    </div>
  </div>
</template>

<style scoped></style>
