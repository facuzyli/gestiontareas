import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PendingTasks = () => {
  const { tasks } = useContext(AppContext);
  const navigate = useNavigate();

  const pendingTasks = tasks.filter((task) => task.status === 'pendiente');

  return (
    <div className="dashboard">
      <h2>Aperturas y Reaperturas Pendientes</h2>
      <ul>
        {pendingTasks.map((task) => (
          <li key={task.id}>
            {task.name} - Progreso: {task.progress}%
            <button onClick={() => navigate(`/task-details/${task.id}`)}>
              Ver Detalle
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/create-task')}>Crear Nuevo</button>
      <button onClick={() => navigate('/closed-tasks')}>Ver Cerrados</button>
    </div>
  );
};

export default PendingTasks;
