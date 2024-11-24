import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los módulos de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraficaBar = ({ labels, datasets }) => {
  const chartRef = useRef();

  const data = {
    labels: labels || ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: datasets || [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfica de Barras',
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default GraficaBar;
