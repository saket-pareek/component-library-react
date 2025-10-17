import App from './App';
import { QuizProvider } from './contexts/QuizContext';

export default function ReactQuiz() {
  return (
    <QuizProvider>
      <App />
    </QuizProvider>
  )
}
