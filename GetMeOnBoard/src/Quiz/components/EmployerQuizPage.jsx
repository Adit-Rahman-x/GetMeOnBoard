import React from 'react';
import Quiz from './QuizComponent';

const EmployerQuizPage = ({
    questions,
    onAddQuestion,
    onDeleteQuestion,
    onAddOption,
    onDeleteOption,
    onUpdateQuestion,
    onUpdateOption,
    onSetCorrectAnswer,
}) => {
    return (
        <div>
            <Quiz
                isEmployerView={true}
                questions={questions}
                handleAddQuestion={onAddQuestion}
                handleDeleteQuestion={onDeleteQuestion}
                handleAddOption={onAddOption}
                handleDeleteOption={onDeleteOption}
                handleUpdateQuestion={onUpdateQuestion}
                handleUpdateOption={onUpdateOption}
                handleSetCorrectAnswer={onSetCorrectAnswer}
            />
        </div>
    );
};

export default EmployerQuizPage;
