import React from 'react';
import './Option.css'

const Option = ({ option, showanswer }) => {
    // console.log(option);

    return (
        <div className='option-container'>

            <input onClick={() => { showanswer(option) }} type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> <h5 className='option-style'>{option}</h5></label><br></br>
        </div>
    );
};

export default Option;