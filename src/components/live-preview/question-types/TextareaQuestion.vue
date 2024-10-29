<script setup lang="ts">
import type { OpenTextQuestion } from '@/types/Survey'
defineProps<{
  question: OpenTextQuestion
}>()
</script>

<template>
  <v-textarea
    :label="question.label"
    :placeholder="question.placeholder"
    variant="solo"
    rows="3"
    auto-grow
  ></v-textarea>
</template>

<style scoped></style>
