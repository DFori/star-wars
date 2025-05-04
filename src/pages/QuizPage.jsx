import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, RadioGroup, FormControlLabel, Button, LinearProgress, Typography } from '@mui/material';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import ReactConfetti from 'react-confetti';

const questions = [
  {
    question: "What planet is Anakin Skywalker from?",
    options: ["Tatooine", "Naboo", "Coruscant", "Kamino"],
    correct: "Tatooine"
  },
  {
    question: "Who trained Obi-Wan Kenobi?",
    options: ["Yoda", "Mace Windu", "Qui-Gon Jinn", "Count Dooku"],
    correct: "Qui-Gon Jinn"
  },
  {
    question: "What is the name of Han Solo’s ship?",
    options: ["Star Destroyer", "X-Wing", "Millennium Falcon", "TIE Fighter"],
    correct: "Millennium Falcon"
  },
  {
    question: "What species is Chewbacca?",
    options: ["Rodian", "Wookiee", "Ewok", "Twi'lek"],
    correct: "Wookiee"
  },
  {
    question: "Who killed Mace Windu?",
    options: ["Darth Maul", "Anakin Skywalker", "Count Dooku", "General Grievous"],
    correct: "Anakin Skywalker"
  },
  {
    question: "What color is Mace Windu’s lightsaber?",
    options: ["Blue", "Green", "Red", "Purple"],
    correct: "Purple"
  },
  {
    question: "What is the name of Boba Fett’s father?",
    options: ["Jango Fett", "Django Fett", "Cassian Andor", "Din Djarin"],
    correct: "Jango Fett"
  },
  {
    question: "What order caused the Jedi purge?",
    options: ["Order 51", "Order 66", "Order 99", "Order 88"],
    correct: "Order 66"
  },
  {
    question: "Who is the Supreme Leader of the First Order in The Force Awakens?",
    options: ["Kylo Ren", "General Hux", "Snoke", "Palpatine"],
    correct: "Snoke"
  },
  {
    question: "Which character says, 'I am your father'?",
    options: ["Darth Vader", "Luke Skywalker", "Obi-Wan Kenobi", "Yoda"],
    correct: "Darth Vader"
  }
];


const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 10);
    }

    if (currentQuestion === questions.length - 1) {
      setShowConfetti(true);
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
    setSelectedAnswer('');
  };

  const getAlignment = (percentage) => {
    if (percentage >= 80) return 'Jedi Master';
    if (percentage >= 60) return 'Light Side Adept';
    if (percentage >= 40) return 'Gray Jedi';
    if (percentage >= 20) return 'Sith Apprentice';
    return 'Droid';
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 star-field"></div>
      {showConfetti && <ReactConfetti recycle={false} numberOfPieces={500} />}
      
      <div className="container mx-auto px-4 py-24">
        <AnimatePresence mode='wait'>
          {!quizCompleted ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="max-w-3xl mx-auto"
            >
              <div className="mb-8">
                <Typography variant="h4" className="font-star-wars text-yellow-500">
                  Question {currentQuestion + 1}
                </Typography>
                <LinearProgress 
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#eab308',
                      borderRadius: 4
                    }
                  }}
                />
              </div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="p-8 rounded-2xl bg-gray-900/80 backdrop-blur-lg shadow-xl border border-yellow-500/30"
              >
                <Typography variant="h5" className="mb-6 text-yellow-400">
                  {questions[currentQuestion].question}
                </Typography>

                <RadioGroup value={selectedAnswer} onChange={(e) => setSelectedAnswer(e.target.value)}>
                  {questions[currentQuestion].options.map((option) => (
                    <motion.div
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mb-4"
                    >
                      <FormControlLabel
                        value={option}
                        control={
                          <Radio 
                            sx={{
                              color: '#eab308',
                              '&.Mui-checked': { color: '#ca8a04' }
                            }}
                          />  
                        }
                        label={
                          <Typography className="text-yellow-400">
                            {option}
                          </Typography>
                        }
                        className="w-full p-4 rounded-xl transition-all bg-yellow-900/20 hover:bg-yellow-900/30"
                      />
                    </motion.div>
                  ))}
                </RadioGroup>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex justify-end"
                >
                  <Button
                    variant="contained"
                    onClick={handleAnswer}
                    disabled={!selectedAnswer}
                    sx={{
                      backgroundColor: '#eab308',
                      '&:hover': { backgroundColor: '#ca8a04' },
                      fontSize: '1.1rem',
                      padding: '12px 24px',
                      borderRadius: '12px'
                    }}
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="p-12 rounded-3xl bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-yellow-500/30">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-block mb-8"
                >
                  <svg className="w-48 h-48 mx-auto">
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="80"
                      strokeWidth="8"
                      stroke="#eab308"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '0 502' }}
                      animate={{ strokeDasharray: `${(score / 100) * 502} 502` }}
                      transition={{ duration: 2 }}
                    />
                  </svg>
                  <motion.div
                    className="text-4xl font-star-wars absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {score}%
                  </motion.div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl font-star-wars mb-4 text-yellow-500"
                >
                  {getAlignment(score)}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8"
                >
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setCurrentQuestion(0);
                      setScore(0);
                      setQuizCompleted(false);
                      setShowConfetti(false);
                    }}
                    sx={{
                      borderColor: '#eab308',
                      color: '#eab308',
                      '&:hover': { 
                        borderColor: '#ca8a04',
                        backgroundColor: 'rgba(234,179,8,0.1)'
                      },
                      fontSize: '1.1rem',
                      padding: '12px 32px',
                      borderRadius: '12px'
                    }}
                  >
                    Play Again
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default QuizPage;