import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ question }) => {
    // console.log(question);

    return (
        <div className='eachquestion-container'>
            <div className='quiz-container'>
                <h3> {question.question}</h3>
                <div>
                    <FontAwesomeIcon icon={faEye} />
                </div>



            </div>



            <div>
                {

                    question.options.map(option => <Option key={option.id} option={option}></Option>)

                }
            </div>

        </div>
    );
};

export default Quiz;