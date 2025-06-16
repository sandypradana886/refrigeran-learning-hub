
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

interface QuizPageProps {
  onBack: () => void;
}

const QuizPage = ({ onBack }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "Apa fungsi utama kompresor dalam sistem refrigerasi?",
      options: [
        "Menurunkan tekanan refrigeran",
        "Mengompres refrigeran dari tekanan rendah ke tinggi",
        "Melepaskan panas dari sistem",
        "Menyerap panas dari ruangan"
      ],
      correct: 1
    },
    {
      question: "Komponen mana yang berfungsi untuk menyerap panas dari ruangan?",
      options: [
        "Kompresor",
        "Kondensor", 
        "Evaporator",
        "Katup ekspansi"
      ],
      correct: 2
    },
    {
      question: "Refrigeran R-134a termasuk dalam kategori:",
      options: [
        "CFC (Chlorofluorocarbon)",
        "HCFC (Hydrochlorofluorocarbon)",
        "HFC (Hydrofluorocarbon)",
        "Refrigeran alami"
      ],
      correct: 2
    },
    {
      question: "Dalam siklus refrigerasi, proses apa yang terjadi di kondensor?",
      options: [
        "Evaporasi refrigeran",
        "Kompresi refrigeran",
        "Kondensasi refrigeran",
        "Ekspansi refrigeran"
      ],
      correct: 2
    },
    {
      question: "Seberapa sering filter udara sistem refrigerasi harus diganti?",
      options: [
        "Setiap hari",
        "Setiap minggu",
        "Secara berkala sesuai kondisi",
        "Tidak perlu diganti"
      ],
      correct: 2
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent! Anda menguasai materi dengan baik.';
    if (percentage >= 60) return 'Good! Anda cukup memahami materi.';
    return 'Perlu belajar lebih giat lagi.';
  };

  if (showResult) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Hasil Kuis
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className={`text-6xl font-bold ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold ${getScoreColor()}`}>
                {((score / questions.length) * 100).toFixed(0)}%
              </div>
              <p className="text-lg text-gray-600">{getScoreMessage()}</p>
              
              <div className="space-y-4 text-left">
                <h3 className="font-bold text-lg">Review Jawaban:</h3>
                {questions.map((q, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-2">{index + 1}. {q.question}</p>
                    <div className="flex items-center gap-2">
                      {answers[index] === q.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm text-gray-600">
                        Jawaban benar: {q.options[q.correct]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline">
                  Ulangi Kuis
                </Button>
                <Button onClick={onBack}>
                  Kembali ke Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={onBack}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
          <div className="text-sm text-gray-500">
            Soal {currentQuestion + 1} dari {questions.length}
          </div>
        </div>
        
        <Card className="shadow-xl border-0">
          <CardHeader>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <CardTitle className="text-xl font-bold text-gray-800">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`w-full p-4 h-auto text-left justify-start ${
                  selectedAnswer === index ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
            
            <div className="pt-6">
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {currentQuestion === questions.length - 1 ? 'Selesai' : 'Soal Berikutnya'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;
