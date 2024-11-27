import React from "react";
import { useNavigate } from "react-router-dom";

const SystemNavbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed-header">
      <nav className="dashboard-nav">
        {/* Botones de navegación para sistema */}
        <div className="nav-buttons">
          <button className="nav-button" onClick={() => navigate("/system-tasks")}>
            Tareas Pendientes
          </button>
          <button className="nav-button" onClick={() => navigate("/questions")}>
            Preguntas
          </button>
        </div>

        {/* Botón del menú de sistema */}
        <div className="system-menu">
          <button className="manager-button">Sistema</button>
          <div className="menu-dropdown">
            <button onClick={onLogout}>Cerrar sesión</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SystemNavbar;
