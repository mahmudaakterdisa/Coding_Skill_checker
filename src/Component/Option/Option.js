import React from 'react';
import './Option.css'

const Option = ({ option }) => {

    return (
        <div className='option-container'>
            {/* <div className="input-group">

                <div className="input-group-text">

                    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />

                </div>
                <span>{option}</span>

            </div> */}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> <h5 className='option-style'>{option}</h5></label><br></br>
        </div>
    );
};

export default Option;