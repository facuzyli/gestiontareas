import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const QuestionsManager = () => {
  const { questions, setQuestions } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
    alert('Pregunta eliminada');
  };

  return (
    <div>
      <h2>Gestión de Preguntas</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => alert(`Editar pregunta ${question.id}`)}>
              Editar
            </button>
            <button onClick={() => handleDelete(question.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/create-question')}>
        Crear Nueva Pregunta
      </button>
    </div>
  );
};

export default QuestionsManager;
