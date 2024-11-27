import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagerNavbar = ({ activeTab, setActiveTab }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/"); // Redirige al login
  };

  return (
    <div className="fixed-header">
      <nav className="dashboard-nav">
        <div className="nav-buttons">
          <button
            className={`nav-button ${activeTab === "Pendientes" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Pendientes");
              navigate("/manager");
            }}
          >
            Pendientes
          </button>
          <button
            className={`nav-button ${activeTab === "Cerrados" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Cerrados");
              navigate("/closed-tasks");
            }}
          >
            Cerrados
          </button>
        </div>
        <div className="manager-menu">
          <button
            className="manager-button"
            onClick={() => setShowMenu(!showMenu)}
          >
            Gerente
          </button>
          {showMenu && (
            <div className="menu-dropdown">
              <button onClick={handleLogout} className="logout-button">
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default ManagerNavbar;
