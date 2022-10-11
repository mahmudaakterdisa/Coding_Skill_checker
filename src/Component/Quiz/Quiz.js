import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({ question }) => {


    const showanswer = (correctAnswer) => {
        const correctResult = question.correctAnswer;


        if (correctResult === correctAnswer) {


            toast("Good job!")
        }
        else {

            toast("Incorrect answer!")

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