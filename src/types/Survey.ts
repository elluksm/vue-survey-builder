export interface Survey {
  id: string
  title: string
  description?: string
  questions: Question[]
  creationDate: Date
  lastModified?: Date
}

// Union type for different question types
type Question = LikertScaleQuestion | OpenTextQuestion

interface QuestionBase {
  id: string
  type: QuestionType // Type of question (e.g., scale, textarea)
  label: string
  helpText?: string
  required?: boolean
}

export type QuestionType = 'scale' | 'textarea'

export interface OpenTextQuestion extends QuestionBase {
  type: 'textarea'
  placeholder?: string
}

export interface LikertOption {
  value: number // Value of the option, typically 1-5
  label: string // Descriptive label for the option (e.g., "Strongly Agree")
}

export interface LikertSubquestion {
  id: string
  text: string
}

export interface LikertScaleQuestion extends QuestionBase {
  type: 'scale'
  scaleLabels: LikertOption[] // Array of options for Likert scale
  subquestions: LikertSubquestion[]
}
