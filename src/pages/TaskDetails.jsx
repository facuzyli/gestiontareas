import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TaskDetails = () => {
  const { id } = useParams(); // Captura el ID desde la URL
  const { tasks } = useContext(AppContext); // Obtén las tareas del contexto
  const [comments, setComments] = useState('');
  const [resolved, setResolved] = useState(false);
  const navigate = useNavigate();

  // Encuentra la tarea correspondiente
  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <button onClick={() => navigate('/pending-tasks')}>Volver</button>
      </div>
    );
  }

  const handleResolve = () => {
    setResolved(true);
    alert('Tarea marcada como resuelta');
  };

  const handleComment = () => {
    if (comments) {
      alert(`Comentario enviado: ${comments}`);
      setComments('');
    } else {
      alert('Escribe un comentario antes de enviarlo');
    }
  };

  return (
    <div>
      <h2>Detalle de Tarea</h2>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Nombre:</strong> {task.name}</p>
      <p><strong>Descripción:</strong> {task.description || 'No especificada'}</p>
      <p><strong>Estado:</strong> {resolved ? 'Resuelta' : 'Pendiente'}</p>
      <p><strong>Progreso:</strong> {task.progress}%</p>

      <button onClick={handleResolve} disabled={resolved}>
        {resolved ? 'Resuelta' : 'Marcar como Resuelta'}
      </button>

      <div>
        <label>Dejar un comentario:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button onClick={handleComment}>Enviar</button>
      </div>

      <button onClick={() => navigate('/pending-tasks')}>Volver</button>
    </div>
  );
};

export default TaskDetails;
