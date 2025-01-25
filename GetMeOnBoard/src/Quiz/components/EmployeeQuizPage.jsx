import React, { useState } from 'react';
import Quiz from './QuizComponent';

const EmployeeQuizPage = ({ questions }) => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: Array.isArray(prevAnswers[questionId])
                ? prevAnswers[questionId].includes(selectedAnswer)
                    ? prevAnswers[questionId].filter((ans) => ans !== selectedAnswer) // Uncheck answer
                    : [...prevAnswers[questionId], selectedAnswer] // Add answer
                : [selectedAnswer],
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;

        questions.forEach((question) => {
            const employeeAnswer = answers[question.id] || [];
            const correctAnswer = question.correctAnswers;

            // Check if all correct answers are selected and no extra answers are selected
            const isCorrect =
                employeeAnswer.length === correctAnswer.length &&
                employeeAnswer.every((answer) => correctAnswer.includes(answer));

            if (isCorrect) {
                correctCount++;
            }
        });

        setScore(correctCount);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>QUIZ</h1>
            <Quiz
                isEmployerView={false}
                questions={questions}
                handleAnswerChange={handleAnswerChange}
                handleSubmit={handleSubmit}
                answers={answers}
                score={score}
            />
        </div>
    );
};

export default EmployeeQuizPage;
