# Amazing Survey Builder

## Scope of the Task

In this task, I'm focusing on the Survey creation flow for a single survey, where the primary objective is to design an interface that guides users in creating a new survey from scratch.

In addition, I'm envisioning a Dashboard view where users can manage existing surveys — preview, duplicate, delete, and enter edit mode for each survey. This dashboard would also feature options for creating a new survey, either from scratch or by using pre-made templates.

## User Experience

Key features to enhance the user experience in this interface include:

- Autosave feature that saves user progress at regular intervals, preventing the frustration and disappointment of losing unsaved work.
- Live Preview on the right-hand side, allowing users to instantly see the final layout as they build it without needing extra steps like opening a pop-up or new tab.
- Real-Time Editing that lets users modify text directly without additional dialog boxes.
- Button icons with text for improved recognizability and accessibility.
- Duplicate Questions option — a convenient way to duplicate any question, especially useful for creating similar questions with slight variations.

## Missing Parts

- Form validation logic
- Full implementation of Likert scale question display in Live Preview (e.g., custom radio inputs styled like cards)
- Ability to reorder questions, with buttons and drag-and-drop functionality
- Logic to toggle questions as required or optional
- Editable field for Submit button text
- Responsive design for smaller screens

## Additional Features

Additional features that could further enhance the user experience and make survey creation more enjoyable include:

- Rich formatting options for styling questions (e.g., bold, italics) to improve readability
- Shareable URL link to easily share surveys for feedback and comments from colleagues
- Keyboard shortcuts for advanced users to speed up survey creation
- Undo/Redo functionality so users can correct mistakes quickly and retain control over their work
- Preview mode that displays the survey on various screen sizes (e.g., mobile view)
- Subsection splitting to break longer surveys into manageable sections, beneficial for both creators and respondents.

## Technical side of things

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Useful commands

#### Running the project

```sh
npm install
```

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
