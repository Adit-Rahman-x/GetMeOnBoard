import React, { useState } from 'react';
import Quiz from './QuizComponent';

const EmployeeQuizPage = ({ questions }) => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleAnswerChange = (questionId, selectedAnswer) => {
        const question = questions.find((q) => q.id === questionId);

        setAnswers((prevAnswers) => {
            if (question.correctAnswers.length === 1) {
                // For single-answer questions
                return { ...prevAnswers, [questionId]: [selectedAnswer] };
            } else {
                // For multiple-answer questions
                const currentAnswers = prevAnswers[questionId] || [];
                const updatedAnswers = currentAnswers.includes(selectedAnswer)
                    ? currentAnswers.filter((ans) => ans !== selectedAnswer) // Deselect
                    : [...currentAnswers, selectedAnswer]; // Select

                // Limit to 4 answers
                if (updatedAnswers.length > 4) return prevAnswers;

                return { ...prevAnswers, [questionId]: updatedAnswers };
            }
        });
    };

    const handleSubmit = () => {
        let correctCount = 0;

        questions.forEach((question) => {
            const employeeAnswer = answers[question.id] || [];
            const correctAnswer = question.correctAnswers;

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
            <h1 style={{ textAlign: 'center' }}>Employee View</h1>
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
