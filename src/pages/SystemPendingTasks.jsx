import React from 'react';
import { useNavigate } from 'react-router-dom';

const SystemPendingTasks = () => {
  const navigate = useNavigate();

  const tasks = [
    { id: 1, name: 'Apertura 1', progress: 50 },
    { id: 2, name: 'Reapertura 2', progress: 20 },
  ];

  return (
    <div>
      <h2>Tareas Pendientes - Sistemas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - Progreso: {task.progress}%
            <button onClick={() => navigate(`/task-details/${task.id}`)}>
              Ver Detalle
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/questions')}>Gestionar Preguntas</button>
      <button onClick={() => navigate('/closed-tasks')}>Ver Cerrados</button>
    </div>
  );
};

export default SystemPendingTasks;
