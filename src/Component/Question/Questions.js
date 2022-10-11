import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Questions = () => {
    const question = useLoaderData();
    console.log(question)
    const { questions, name, options } = question.data;
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            {
                questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
            }


        </div>
    );
};

export default Questions;