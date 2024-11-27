import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useContext(AppContext);
  const navigate = useNavigate();

  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    console.log("Tarea no encontrada");
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <button onClick={() => navigate('/closed-tasks')}>Volver</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalle de Tarea</h2>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Nombre:</strong> {task.name}</p>
      <p><strong>Local:</strong> {task.local}</p>
      <p><strong>Estado:</strong> {task.status}</p>
      <button onClick={() => navigate('/closed-tasks')}>Volver</button>
    </div>
  );
};

export default TaskDetails;
