import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Taskpriorities = () => {
  const [taskData, setTaskData] = useState({ high: 0, medium: 0, low: 0 });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        const tasks = response.data;

        const priorityCount = tasks.reduce(
          (acc, task) => {
            if (task.priority.toLowerCase() === 'high') acc.high += 1;
            else if (task.priority.toLowerCase() === 'medium') acc.medium += 1;
            else if (task.priority.toLowerCase() === 'low') acc.low += 1;
            return acc;
          },
          { high: 0, medium: 0, low: 0 }
        );

        setTaskData(priorityCount);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const data = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [taskData.high, taskData.medium, taskData.low],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="task-priority">
      <h2>Tasks Priorities</h2>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Taskpriorities;
