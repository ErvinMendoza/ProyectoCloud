import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los módulos de Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const GraficaLine1 = ({ labels, datasetData, initialPointStyle = 'circle' }) => {
  const chartRef = useRef();

  // Configuración inicial de la gráfica
  const data = {
    labels: labels || ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Vueltas por dia',
        data: datasetData || [10, 20, -15, 35, 50, -10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointStyle: initialPointStyle, // Estilo inicial del punto
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Point Style: ${initialPointStyle}`,
      },
    },
  };

  // Función para cambiar el estilo de los puntos
  const changePointStyle = (style) => {
    const chart = chartRef.current;
    if (chart) {
      chart.data.datasets.forEach((dataset) => {
        dataset.pointStyle = style;
      });
      chart.update();
    }
  };

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
      {/* Botones para cambiar el estilo de los puntos */}
      <div style={{ marginTop: '20px' }}>
        {[
          'circle',
          'cross',
          'crossRot',
          'dash',
          'line',
          'rect',
          'rectRounded',
          'rectRot',
          'star',
          'triangle',
          false,
        ].map((style) => (
          <button
            key={style}
            onClick={() => changePointStyle(style)}
            style={{
              margin: '5px',
              padding: '8px 12px',
              cursor: 'pointer',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {`Point Style: ${style || 'false'}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GraficaLine1;
