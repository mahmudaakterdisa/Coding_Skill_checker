import React from 'react';
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import './Availabletopics.css';

const AvaiableTopics = ({ course }) => {
    // console.log(course)
    const { logo, name, id } = course;
    return (
        // <div className='courses-container'>
        //     <img src={logo} alt="" />
        //     <div className='button-container'>
        //         <h3>Course-name:{name}</h3>
        //         {/* <button className=''></button> */}
        //         <button type="button" class="btn btn-primary">Examine your knowledge</button>
        //     </div>


        // </div>

        <div className='card-container'>
            <div className="card  courses-container">
                <img src={logo} className="card-img-top img-thumbnail bg-dark" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>

                    <Link to={`/course/${id}`} className="btn btn-light">Examine your knowledge</Link>
                </div>

            </div>


        </div>



    );
};

export default AvaiableTopics;