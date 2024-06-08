import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { FaBell } from 'react-icons/fa';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayTasks = tasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage);

  return (
    <div className="task">
      <h2>Tasks</h2>
      <ul className="task-list">
        {displayTasks.map(task => (
          <li key={task.id} className={`task-item ${task.priority.toLowerCase()}`}>
            <div className="priority">
              <FaBell style={{ color: getPriorityColor(task.priority) }} />
            </div>
            <div className="task-name">{task.todo}</div>
            <div className="task-meta">
              {!task.completed && <button className="mark-done">Done</button>}
            </div>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(tasks.length / tasksPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'low':
      return 'blue';
    case 'medium':
      return 'yellow';
    case 'high':
      return 'red';
    default:
      return 'grey';
  }
};

export default Task;
