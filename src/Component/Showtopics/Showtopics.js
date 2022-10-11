import React from 'react';
import { Link } from 'react-router-dom';
import './Showtopics.css'

const Showtopics = ({ courses }) => {
    console.log(courses)
    const { logo, name, id } = courses;
    return (
        <div className='showtopics-container'>
            <div className="card  alltopics-container">
                <img src={logo} className="card-img-top img-thumbnail bg-dark" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>

                    <Link to={`/courses/${id}`} className="btn btn-light">Examine your knowledge</Link>
                </div>

            </div>


        </div>
    );
};

export default Showtopics;