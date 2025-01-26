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
                backgroundColor: '#f9f9f9',
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center", // Center the inner div horizontally
                    alignItems: "center", // Center the inner div vertically
                    width: "100%", // Full width of the screen
                    //height: "100vh", // Full viewport height
                    backgroundColor: "rgb(240, 240, 240)", // Light background color for the entire section
                    //padding: "20px", // Ensure spacing for smaller viewports
                }}
                >
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column", // Stack elements vertically
                    justifyContent: "center", // Center vertically
                    alignItems: "center", // Center horizontally
                    width: "65%", // Take up 75% of the screen width
                    textAlign: "center", // Center text alignment where applicable
                    padding: "20px", // Add some padding for spacing
                    backgroundColor: "white", // Light background color for contrast
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", // Add a subtle shadow
                    }}
                >
                    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Quiz Maker</h1>
                    <p
                    style={{
                        fontSize: "18px",
                        marginTop: "0",
                        marginBottom: "30px",
                        width: "80%",
                        lineHeight: "1.6", // Better spacing between lines
                        color: "#555", // Softer text color
                        backgroundColor: "#f9f9f9", // Light background for contrast
                        padding: "20px", // Add padding for spacing
                        borderRadius: "8px", // Rounded corners for a modern look
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                    }}
                    >
                    <strong>This is the Quiz Maker!</strong> It allows you to <strong>create</strong> and <strong>save</strong> quizzes for employees to complete as part of their onboarding process in a user-friendly way.<br /> <br />
                    The page consists of a <strong>quiz title</strong>, <strong>questions</strong>, and <strong>answer options</strong>. You can edit the content of these sections by simply tapping on the text, adding new questions, or modifying existing ones, then saving your progress.<br /> <br />
                    To preview how the quiz will look for employees, click the <strong>"Switch to Employee View"</strong> button below.
                    </p>
                    <button
                    onClick={() => setIsEmployerView(!isEmployerView)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4b9bc2",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        transition: "transform 0.3s ease, background-color 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#007BFF";
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#4b9bc2";
                        e.target.style.transform = "scale(1)";
                    }}
                    >
                    Switch to {isEmployerView ? "Employee" : "Employer"} View
                    </button>
                </div>
                </div>


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
