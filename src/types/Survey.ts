export interface Survey {
  id: string
  title: string
  description?: string
  questions: Question[]
  creationDate: Date
  lastModified?: Date
}

// Union type for different question types
type Question = ScaleQuestion | TextareaQuestion

interface QuestionBase {
  id: string
  type: QuestionType // Type of question (e.g., scale, textarea)
  label: string
  helpText?: string
  required?: boolean
  answer?: number // User answer (optional, for preview or saved responses)
}

export type QuestionType = 'scale' | 'textarea'

export interface TextareaQuestion extends QuestionBase {
  type: 'textarea'
  placeholder?: string
}

export interface LikertOption {
  value: number // Value of the option, typically 1-5
  label: string // Descriptive label for the option (e.g., "Strongly Agree")
}

export interface ScaleQuestion extends QuestionBase {
  type: 'scale'
  options: LikertOption[] // Array of options for Likert scale
}
