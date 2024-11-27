import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClosedTasks = () => {
  const navigate = useNavigate();

  const tasks = [
    { id: 3, name: 'Apertura 3', status: 'Cerrada' },
    { id: 4, name: 'Reapertura 4', status: 'Cerrada' },
  ];

  return (
    <div>
      <h2>Aperturas y Reaperturas Cerradas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.status}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/pending-tasks')}>Ver Pendientes</button>
    </div>
  );
};

export default ClosedTasks;
