import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const chart = useLoaderData();


    return (

        <div className='chart-container'>
            <div className='barChart-container'>
                <ResponsiveContainer>
                    <BarChart data={chart.data}>
                        <Bar dataKey="total" fill="#006400" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </BarChart>
                </ResponsiveContainer>
            </div>





        </div>





    );
};

export default Statistics;