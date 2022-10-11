import React from 'react';

const Option = ({ option }) => {

    return (
        <div>
            {/* <div className="input-group">

                <div className="input-group-text">

                    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />

                </div>
                <span>{option}</span>

            </div> */}
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> <h5>{option}</h5></label><br></br>
        </div>
    );
};

export default Option;