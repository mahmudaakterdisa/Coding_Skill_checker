import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Showtopics from '../Showtopics/Showtopics';
import './Topics.css'


const Topics = () => {
    const data = useLoaderData();
    console.log(data);



    return (
        <div className='topic-container'>

            <div className='courses-container'>

                {
                    data.data.map(courses => <Showtopics key={courses.id} courses={courses}></Showtopics>)

                }


            </div>

        </div>
    );
};

export default Topics;