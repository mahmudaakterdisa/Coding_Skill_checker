import React, { useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { Questionloder } from '../../Loder/Questionloder';
import AvaiableTopics from '../Courses/AvaiableTopics';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const getdata = useLoaderData();

    // const { } = getdata;


    return (
        <div className='home-container'>
            <div className='overview-container'>
                <p>Welcome to code-kreig(code war). This page will help you cark your interview board. If you are a newbie, you can also expand your knowledge. I wish you good luck.</p>
            </div>
            <div className='course-container'>

                {
                    getdata.data.map(course => <AvaiableTopics key={course.id} course={course}></AvaiableTopics>

                    )
                }


            </div>

        </div>
    );
};

export default Home;