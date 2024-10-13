import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataProps {
  data: {
    [key: string]: number;
  };
}

const Charts: React.FC<ChartDataProps> = ({ data }) => {
  const categories = Object.keys(data);
  const values = Object.values(data);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={chartData} />
    </div>
  );
};

export default Charts;
