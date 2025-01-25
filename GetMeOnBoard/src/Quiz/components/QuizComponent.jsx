import React from 'react';
import EditableText from './EditableText';

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
                                border: '4px solid black',
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '16px',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>
                                    <EditableText
                                        defaultText={q.question}
                                        fontSize="18px"
                                        fontWeight="bold"
                                        color="#333"
                                        onTextChange={(newText) => handleUpdateQuestion(q.id, newText)}
                                    />
                                </h3>
                                <button
                                    onClick={() => handleDeleteQuestion(q.id)}
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        padding: '5px 10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete Question
                                </button>
                            </div>
                            {q.media && <img src={q.media} alt="Question Media" />}
                            <div>
                                {q.options.map((option, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                        <EditableText
                                            defaultText={option}
                                            fontSize="16px"
                                            fontWeight="normal"
                                            color="#555"
                                            onTextChange={(newText) => handleUpdateOption(q.id, index, newText)}
                                        />
                                        <button
                                            onClick={() => handleDeleteOption(q.id, index)}
                                            style={{ marginLeft: '10px', color: 'red' }}
                                        >
                                            Delete Option
                                        </button>
                                        <input
                                            type="checkbox"
                                            checked={q.correctAnswers.includes(option)}
                                            onChange={() => handleSetCorrectAnswer(q.id, option)}
                                            style={{ marginLeft: '10px' }}
                                        />
                                        <span style={{ marginLeft: '5px' }}>Correct</span>
                                    </div>
                                ))}
                                {q.options.length < 4 && (
                                    <button onClick={() => handleAddOption(q.id)}>Add Option</button>
                                )}
                            </div>
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
                                border: '4px solid black',
                                borderRadius: '8px',
                                padding: '16px',
                                marginBottom: '16px',
                            }}
                        >
                            <h3>{q.question}</h3>
                            {q.media && <img src={q.media} alt="Question Media" />}
                            <div>
                                {q.options.map((option, index) => (
                                    <div
                                        key={index}
                                        style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
                                    >
                                        <input
                                            type={q.type === 'multipleChoice' ? 'radio' : 'checkbox'}
                                            name={`question-${q.id}`}
                                            value={option}
                                            onChange={() => handleAnswerChange(q.id, option)}
                                            style={{ marginRight: '8px' }}
                                        />
                                        {option}
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
                                    Your Answer: {answers[q.id] ? answers[q.id].join(', ') : 'None'}
                                    {Array.isArray(answers[q.id]) &&
                                    answers[q.id].length === q.correctAnswers.length &&
                                    answers[q.id].every((answer) => q.correctAnswers.includes(answer))
                                        ? ' (Correct)'
                                        : ' (Incorrect)'}
                                </p>
                                <p>
                                    Correct Answer: {q.correctAnswers.join(', ')}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
