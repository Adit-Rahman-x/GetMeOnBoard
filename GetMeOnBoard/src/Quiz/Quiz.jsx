import React, { useState } from 'react';
import EmployerQuizPage from './components/EmployerQuizPage';
import EmployeeQuizPage from './components/EmployeeQuizPage';

const Quiz = () => {
    const [isEmployerView, setIsEmployerView] = useState(true);
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "What is React?",
            type: "multipleChoice",
            media: null,
            options: ["A library", "A framework", "A language"],
            correctAnswers: ["A library"],
        },
    ]);
    
    const handleUpdateQuestion = (id, updatedData) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id
                    ? { ...q, ...updatedData }
                    : q
            )
        );
    };

    

    const handleAddQuestion = () => {
        const newQuestion = {
            id: questions.length + 1,
            question: "New Question",
            type: "multipleChoice",
            media: null,
            options: ["Default Option"], 
            correctAnswers: ["Default Option"], 
        };
        setQuestions([...questions, newQuestion]);
    };

    const deleteQuestion = (id) => {
        setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
    };

    const addOptionToQuestion = (id) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id && q.options.length < 4
                    ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
                    : q
            )
        );
    };

    const deleteOptionFromQuestion = (id, index) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id
                    ? {
                          ...q,
                          options: q.options.filter((_, optIndex) => optIndex !== index),
                          correctAnswers: q.correctAnswers.filter(
                              (answer) => answer !== q.options[index]
                          ),
                      }
                    : q
            )
        );
    };

    const updateQuestion = (id, newQuestionText) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) => (q.id === id ? { ...q, question: newQuestionText } : q))
        );
    };

    const updateOption = (id, index, newOptionText) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id
                    ? {
                          ...q,
                          options: q.options.map((opt, optIndex) =>
                              optIndex === index ? newOptionText : opt
                          ),
                      }
                    : q
            )
        );
    };

    const setCorrectAnswer = (id, option) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id
                    ? {
                          ...q,
                          correctAnswers: q.correctAnswers.includes(option)
                              ? q.correctAnswers.filter((answer) => answer !== option)
                              : [...q.correctAnswers, option],
                      }
                    : q
            )
        );
    };

    return (
        <div
            style={{
                backgroundColor: 'f9f9f9',
            }}>

            <button
                onClick={() => setIsEmployerView(!isEmployerView)}
                style={{ position: 'relative', top: '10px', right: '10px' }}
            >
                Switch to {isEmployerView ? 'Employee' : 'Employer'} View
            </button>
            {isEmployerView ? (
                <EmployerQuizPage
                    questions={questions}
                    onAddQuestion={handleAddQuestion}
                    onDeleteQuestion={deleteQuestion}
                    onAddOption={addOptionToQuestion}
                    onDeleteOption={deleteOptionFromQuestion}
                    onUpdateQuestion={handleUpdateQuestion}
                    onUpdateOption={updateOption}
                    onSetCorrectAnswer={setCorrectAnswer}
                />
            ) : (
                <EmployeeQuizPage questions={questions} />
            )}
        </div>
    );
};

export default Quiz;
