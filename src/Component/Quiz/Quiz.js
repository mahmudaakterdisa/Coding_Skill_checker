import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ question }) => {
    // console.log(question);

    return (
        <div>
            <h3> {question.question}</h3>

            <div>
                {

                    question.options.map(option => <Option key={option.id} option={option}></Option>)

                }
            </div>

        </div>
    );
};

export default Quiz;