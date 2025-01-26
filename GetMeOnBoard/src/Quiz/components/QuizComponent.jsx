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
        <div
            style={{
                backgroundColor: '#f0f0f0', // Light gray background for the Quiz section
                borderRadius: '10px', // Add rounded corners for the overall Quiz section
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {isEmployerView ? (
                <div
                    style={{
                        width: '65%',
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px', // Add padding inside the white container
                    }}
                >
                    {questions.map((q) => (
                        <div
                            key={q.id}
                            style={{
                                backgroundColor: 'white', // White background for individual questions
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '24px', // Add space between questions
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for each question
                            }}
                        >
                            {/* Question Section */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '16px',
                                }}
                            >
                                <textarea
                                    value={q.question || ''}
                                    onChange={(e) =>
                                        handleUpdateQuestion(q.id, { question: e.target.value })
                                    }
                                    style={{
                                        width: '100%',
                                        fontSize: '14px',
                                        border: 'solid black',
                                        padding: '8px',
                                        borderRadius: '4px',
                                        resize: 'none',
                                        overflowWrap: 'break-word',
                                        wordWrap: 'break-word',
                                        height: '40px',
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
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#D2042D';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'red';
                                        e.target.style.transform = 'scale(1)';
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
                                            height: '40px',
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
                                <button
                                    onClick={() => handleAddOption(q.id)}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#0096FF',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        transition: 'transform 0.3s ease, background-color 0.35s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#007BFF';
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#0096FF';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Add Option
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={handleAddQuestion}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4b9bc2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'transform 0.3s ease, background-color 0.35s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#007BFF';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#4b9bc2';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        Add Question
                    </button>
                </div>
            ) : score === null ? (
                <div
                    style={{
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '20px', // Add padding inside the white container
                        width: '65%',
                    }}
                >
                    {questions.map((q) => (
                        <div
                            key={q.id}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '24px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center', // Center the submit button
                            marginTop: '20px', // Add some space above the button
                        }}
                    >
                        <button
                            onClick={handleSubmit}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'green',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: 'transform 0.3s ease, background-color 0.35s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#006400';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'green';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor:'white',
                        width:'65%',
                    }}
                >
                    <h3
                        style={{
                            padding:'20px'
                        }}
                        >Results</h3>
                    <p
                        style={{
                            padding:'20px'
                        }}
                    >
                        Score: {score}/{questions.length}
                    </p>
                    <ul>
                        {questions.map((q) => (
                            <li key={q.id}>
                                <p>{q.question}</p>
                                <p
                                    style={{
                                        padding:'20px'
                                    }}
                                >
                                    Your Answer: {(answers[q.id] || []).length ? answers[q.id].join(', ') : 'None'}
                                </p>
                                <p
                                    style={{
                                        paddingLeft:'20px'
                                    }} 
                                >Correct Answer: {q.correctAnswers.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
