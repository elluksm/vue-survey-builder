<script setup lang="ts">
import type { OpenTextQuestion } from '@/types/Survey'
defineProps<{
  question: OpenTextQuestion
}>()
</script>

<template>
  <p class="text-cyan-800 font-bold pb-2">TextBox Question</p>
  <v-text-field
    label="Question Title"
    v-model="question.label"
    variant="solo"
  ></v-text-field>
</template>

<style scoped></style>
