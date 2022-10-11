import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const chart = useLoaderData();
    console.log(chart.data)

    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={1000} height={400} data={chart.data}>
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}

            <BarChart width={1000} height={500} data={chart.data}>
                <Bar dataKey="total" fill="#006400" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>


        </div>





    );
};

export default Statistics;