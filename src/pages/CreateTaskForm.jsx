import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const CreateTaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { tasks, setTasks } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const newTask = {
        id: tasks.length + 1,
        name,
        status: 'pendiente',
        progress: 0,
      };
      setTasks([...tasks, newTask]);
      alert('Apertura/Reapertura creada exitosamente');
      navigate('/pending-tasks');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div>
      <h2>Crear Nueva Apertura/Reapertura</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Guardar</button>
        <button onClick={() => navigate('/pending-tasks')}>Cerrar sin guardar</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
