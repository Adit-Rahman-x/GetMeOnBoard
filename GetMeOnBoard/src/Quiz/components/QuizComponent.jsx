import React from 'react';

const QuizComponent = ({
    isEmployerView,
    questions,
    handleAddQuestion,
    handleDeleteQuestion,
    handleAddOption,
    handleDeleteOption,
    handleUpdateQuestion,
    handleUpdateOption,
    handleSetCorrectAnswer,
    handleAnswerChange,
    handleSubmit,
    answers,
    score,
}) => {
    return (
        <div>
            {isEmployerView ? (
                <div>
                    {questions.map((q) => (
                        <div
                            key={q.id}
                            style={{
                                border: '6px solid black',
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '16px',
                            }}
                        >
                            {/* Question Section */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '16px', // Add space below the question section
                                }}
                            >
                                <textarea
                                    value={q.question || ''} // Ensure an empty string if undefined
                                    onChange={(e) =>
                                        handleUpdateQuestion(q.id, { question: e.target.value }) // Pass only the string value
                                    }
                                    style={{
                                        width: '100%', // Ensures it takes the same width as option textboxes
                                        fontSize: '14px', // Match the font size of options
                                        border: '4px solid black',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        resize: 'none', // Prevent manual resizing
                                        overflowWrap: 'break-word', // Handle long words
                                        wordWrap: 'break-word',
                                        height: '40px', // Same height as the option textboxes
                                    }}
                                />
                                <button
                                    onClick={() => handleDeleteQuestion(q.id)}
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '5px 10px',
                                        cursor: 'pointer',
                                        marginLeft: '10px',
                                    }}
                                >
                                    Delete Question
                                </button>
                            </div>

                            {/* Options Section */}
                            {q.options.map((option, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) =>
                                            handleUpdateOption(q.id, index, e.target.value)
                                        }
                                        style={{
                                            flexGrow: 1,
                                            marginRight: '8px',
                                            fontSize: '14px',
                                            padding: '8px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box',
                                            height: '40px', // Fixed height for consistency
                                        }}
                                    />
                                    <button
                                        onClick={() => handleDeleteOption(q.id, index)}
                                        style={{
                                            marginLeft: '10px',
                                            color: 'red',
                                            border: 'none',
                                            background: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        ✖
                                    </button>
                                    <input
                                        type={q.correctAnswers.length === 1 ? 'radio' : 'checkbox'}
                                        checked={q.correctAnswers.includes(option)}
                                        onChange={() => handleSetCorrectAnswer(q.id, option)}
                                        style={{ marginLeft: '10px' }}
                                    />
                                    <span style={{ marginLeft: '5px' }}>Correct</span>
                                </div>
                            ))}
                            {q.options.length < 4 && (
                                <button onClick={() => handleAddOption(q.id)}>
                                    Add Option
                                </button>
                            )}
                        </div>
                    ))}
                    <button onClick={handleAddQuestion}>Add Question</button>
                </div>
            ) : score === null ? (
                <div>
                    {questions.map((q) => (
                        <div
                            key={q.id}
                            style={{
                                border: '6px solid black', // Increased border thickness for the question box
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '16px',
                            }}
                        >
                            <h3>{q.question}</h3>
                            <div>
                                {q.options.map((option, index) => (
                                    <div key={index} style={{ marginBottom: '8px' }}>
                                        <input
                                            type={q.correctAnswers.length === 1 ? 'radio' : 'checkbox'}
                                            name={`question-${q.id}`}
                                            value={option}
                                            onChange={() => handleAnswerChange(q.id, option)}
                                            checked={
                                                (answers[q.id] || []).includes(option) // Preserve state
                                            }
                                        />
                                        <span style={{ marginLeft: '5px' }}>{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <div>
                    <h3>Results</h3>
                    <p>
                        Score: {score}/{questions.length}
                    </p>
                    <ul>
                        {questions.map((q) => (
                            <li key={q.id}>
                                <p>{q.question}</p>
                                <p>
                                    Your Answer: {(answers[q.id] || []).length ? answers[q.id].join(', ') : 'None'}
                                </p>
                                <p>Correct Answer: {q.correctAnswers.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
