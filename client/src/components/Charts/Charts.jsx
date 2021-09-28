import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import withHocs from './ChartsHoc';

const Charts = ({ data = {} }) => {
    const { directors = [] } = data;

    const chartData = {
        labels: directors.map((d) => d.name),
        datasets: [
            {
                label: 'movies',
                data: directors.map((d) => d.movies.length),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                width: 50,
                height: 50,
            },
        ],
    };

    return (
        <div>
            <Doughnut
                data={chartData}
                width={600}
                height={600}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
};

export default withHocs(Charts);
