import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { throttle, cloneDeep } from 'lodash'
import type {
  Survey,
  LikertOption,
  OpenTextQuestion,
  LikertScaleQuestion,
} from '@/types/Survey'

export const useSurveyWizardStore = defineStore('survey-wizard', () => {
  /* New survey object would already been created when coming from the Dashboard view
   In the Dashboard view you can create a new survey from scratch, from existing templates 
   or you can duplicate already existing survey.

   Here the store is initialized with a new survey from scratch as an example.
   Survey editing/building features would work similarly in all cases.
  */

  const survey = ref<Survey>({
    id: '123', // Placeholder - it would be generated, when saving to a real database
    title: 'New Survey',
    description: 'Please answer the following questions.',
    questions: [], // Start with an empty questions array
    creationDate: new Date(),
  })

  // Utility function to generate unique IDs
  const generateId = () =>
    `q_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

  // Add new questions
  const addOpenTextQuestion = () => {
    const newQuestion: OpenTextQuestion = {
      id: generateId(),
      type: 'textarea',
      label: 'Please provide additional feedback',
      placeholder: 'Type your response here...',
    }
    survey.value.questions.push(newQuestion)
  }

  const addLikertScaleQuestion = () => {
    const newQuestion: LikertScaleQuestion = {
      id: generateId(),
      type: 'scale',
      label: 'How satisfied are you?',
      scaleLabels: defaultLikertOptions(),
      subquestions: [{ id: generateId(), text: 'Work environment' }],
    }
    survey.value.questions.push(newQuestion)
  }

  // Default Likert options
  const defaultLikertOptions = (): LikertOption[] => [
    { value: 1, label: 'Very often' },
    { value: 2, label: 'Quite often' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Rarely' },
    { value: 5, label: 'Never' },
  ]

  const deleteQuestion = (id: string) => {
    survey.value.questions = survey.value.questions.filter(q => q.id !== id)
  }

  const duplicateQuestion = (id: string) => {
    const questionIndex = survey.value.questions.findIndex(q => q.id === id)
    if (questionIndex !== -1) {
      const questionToCopy = survey.value.questions[questionIndex]
      const copiedQuestion = cloneDeep(questionToCopy)
      copiedQuestion.id = generateId()
      survey.value.questions.splice(questionIndex + 1, 0, copiedQuestion) // Insert copied question
    }
  }

  const addSubquestion = (questionId: string) => {
    const question = survey.value.questions.find(
      q => q.id === questionId && q.type === 'scale',
    ) as LikertScaleQuestion
    if (question) {
      question.subquestions.push({
        id: generateId(),
        text: 'Weather',
      })
    }
  }

  // Autosave to localStorage
  const SURVEY_STORAGE_KEY = `savedSurvey_${survey.value.id}`
  const saveToLocalStorage = () => {
    localStorage.setItem(SURVEY_STORAGE_KEY, JSON.stringify(survey.value))
  }

  // Load from localStorage on initialization
  const loadFromLocalStorage = () => {
    const savedSurvey = localStorage.getItem(SURVEY_STORAGE_KEY)
    if (savedSurvey) {
      survey.value = JSON.parse(savedSurvey) as Survey
    }
  }

  loadFromLocalStorage()

  // Watch survey changes for autosave
  const throttledSave = throttle(() => saveToLocalStorage(), 500)
  watch(survey, throttledSave, { deep: true })

  return {
    survey,
    addOpenTextQuestion,
    addLikertScaleQuestion,
    deleteQuestion,
    duplicateQuestion,
    addSubquestion,
  }
})
