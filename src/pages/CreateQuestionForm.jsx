import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('text');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question) {
      alert(`Pregunta "${question}" creada con éxito`);
      navigate('/questions');
    } else {
      alert('Por favor, escribe una pregunta');
    }
  };

  return (
    <div>
      <h2>Crear Pregunta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pregunta:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label>Tipo de Respuesta:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="text">Texto</option>
            <option value="multiple">Opción Múltiple</option>
          </select>
        </div>
        <button type="submit">Guardar</button>
        <button onClick={() => navigate('/questions')}>Cancelar</button>
      </form>
    </div>
  );
};

export default CreateQuestionForm;
