import React from 'react';
import './Availabletopics.css';

const AvaiableTopics = ({ course }) => {
    const { logo, name } = course;
    return (
        // <div className='courses-container'>
        //     <img src={logo} alt="" />
        //     <div className='button-container'>
        //         <h3>Course-name:{name}</h3>
        //         {/* <button className=''></button> */}
        //         <button type="button" class="btn btn-primary">Examine your knowledge</button>
        //     </div>


        // </div>


        <div className="card  courses-container">
            <img src={logo} className="card-img-top img-thumbnail" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>

                <a href="#" className="btn btn-primary">Examine your knowledge</a>
            </div>
        </div>
    );
};

export default AvaiableTopics;