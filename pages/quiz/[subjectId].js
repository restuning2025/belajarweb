import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { subjects } from '../../data/subjects';
import { questions as bahasaIndonesiaQuestions } from '../../data/questions/bahasa-indonesia';
import { questions as matematikaQuestions } from '../../data/questions/matematika';
import { questions as ppknQuestions } from '../../data/questions/ppkn';
import { questions as pjokQuestions } from '../../data/questions/pjok';
import { questions as sbdpQuestions } from '../../data/questions/sbdp';
import { questions as agamaQuestions } from '../../data/questions/agama';
import { questions as bahasaInggrisQuestions } from '../../data/questions/bahasa-inggris';
import { questions as sainsQuestions } from '../../data/questions/sains';

export default function Quiz() {
  const router = useRouter();
  const { subjectId } = router.query;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Wait for router query to be available
  if (!subjectId) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Loading...</div>;
  }

  const subject = subjects.find((s) => s.id === subjectId);

  // Get questions based on subject
  const getQuestions = (subjectId) => {
    switch (subjectId) {
      case 'bahasa-indonesia':
        return bahasaIndonesiaQuestions;
      case 'matematika':
        return matematikaQuestions;
      case 'ppkn':
        return ppknQuestions;
      case 'pjok':
        return pjokQuestions;
      case 'sbdp':
        return sbdpQuestions;
      case 'agama':
        return agamaQuestions;
      case 'bahasa-inggris':
        return bahasaInggrisQuestions;
      case 'sains':
        return sainsQuestions;
      default:
        return [];
    }
  };

  const questions = getQuestions(subjectId);

  if (!subject) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Mata pelajaran tidak ditemukan</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="min-h-screen bg-[var(--background)] py-8 flex items-center justify-center">Pertanyaan tidak tersedia</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach((questionIndex) => {
      if (answers[questionIndex] === questions[questionIndex].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-[var(--background)] py-8">
        <Head>
          <title>Hasil Quiz - {subject.name}</title>
        </Head>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto dark-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Hasil Quiz {subject.name}</h1>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[var(--primary)] mb-2">{score}%</div>
              <p className="text-[var(--foreground)] opacity-80">
                Kamu menjawab {Object.keys(answers).length} dari {questions.length} pertanyaan
              </p>
            </div>
            
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    answers[index] === question.correctAnswer
                      ? 'bg-green-900/30 border border-green-500/30'
                      : 'bg-red-900/30 border border-red-500/30'
                  }`}
                >
                  <p className="font-medium mb-2">{question.question}</p>
                  <p className="text-sm">
                    Jawaban kamu: {question.options[answers[index]]}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Jawaban benar: {question.options[question.correctAnswer]}
                  </p>
                  <p className="text-sm text-[var(--foreground)] opacity-70 mt-1">
                    {question.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-8">
      <Head>
        <title>Quiz {subject.name} - Pertanyaan {currentQuestionIndex + 1}</title>
      </Head>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto dark-card rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">{subject.name}</h1>
            <div className="text-[var(--foreground)] opacity-80">
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    answers[currentQuestionIndex] === index
                      ? 'bg-[var(--primary)] text-white'
                      : 'dark-card hover:bg-[var(--card-hover)]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === undefined}
              className={`px-6 py-2 rounded-lg transition-opacity ${
                answers[currentQuestionIndex] === undefined
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-[var(--primary)] text-white hover:opacity-90'
              }`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
