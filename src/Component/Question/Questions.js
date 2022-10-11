import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const question = useLoaderData();
    const { questions } = question.data;
    return (
        <div>
            {
                questions.map(question => console.log(question))
            }

        </div>
    );
};

export default Questions;