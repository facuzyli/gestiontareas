import React, { useState } from 'react';

const TaskDetails = ({ id }) => {
  const [comments, setComments] = useState('');
  const [resolved, setResolved] = useState(false);

  const handleResolve = () => {
    setResolved(true);
    alert('Pregunta marcada como resuelta');
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
      <p>ID de Tarea: {id}</p>
      <p>Estado: {resolved ? 'Resuelta' : 'Pendiente'}</p>
      <button onClick={handleResolve}>Marcar como Resuelta</button>
      <div>
        <label>Dejar un comentario:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button onClick={handleComment}>Enviar</button>
      </div>
    </div>
  );
};

export default TaskDetails;
