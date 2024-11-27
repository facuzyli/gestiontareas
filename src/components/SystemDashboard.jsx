import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SystemDashboard = () => {
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard de Sistemas</h1>
      <div>
        <button onClick={() => navigate('/system-tasks')}>Ver Pendientes</button>
        <button onClick={() => navigate('/questions')}>Gestionar Preguntas</button>
        <button onClick={() => navigate('/closed-tasks')}>Ver Cerrados</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default SystemDashboard;
