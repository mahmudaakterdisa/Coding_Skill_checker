import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ question }) => {
    // console.log(question);

    const showanswer = (correctAnswer) => {
        const correctResult = question.correctAnswer;


        if (correctResult === correctAnswer) {

            alert("Good job!")
        }
        else {
            alert("Incorrect answer!")
        }

    }

    return (
        <div className='eachquestion-container'>
            <div className='quiz-container'>
                <h3> {question.question}</h3>

                {/* to show correct anwer after clicking icon */}
                <div>
                    <FontAwesomeIcon onClick={() => alert(question.correctAnswer)} icon={faEye} />
                </div>



            </div>



            <div>
                {

                    question.options.map(option => <Option key={option.id} option={option} showanswer={showanswer}></Option>)

                }
            </div>

        </div>
    );
};

export default Quiz;