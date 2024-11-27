import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState("Pendientes");
  const [showMenu, setShowMenu] = useState(false); // Estado para el menú desplegable
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/"); // Redirige al login
  };

  const tasks = [
    { type: "Apertura", id: "1", local: "macowens", progress: 70, status: "pendiente" },
    { type: "Reapertura", id: "2", local: "devre", progress: 20, status: "pendiente" },
    { type: "Apertura", id: "3", local: "macowens", progress: 100, status: "cerrada" },
    { type: "Reapertura", id: "4", local: "devre", progress: 100, status: "cerrada" },
  ];

  const filteredTasks =
    activeTab === "Pendientes"
      ? tasks.filter((task) => task.status === "pendiente")
      : tasks.filter((task) => task.status === "cerrada");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "Cerrados") {
      navigate("/closed-tasks"); // Redirige a la página de cerrados
    } else if (tab === "Pendientes") {
      navigate("/manager"); // Redirige a la página de pendientes
    }
  };

  return (
    <div className="dashboard-container">
      {/* Botones fijos */}
      <div className="fixed-header">
        <nav className="dashboard-nav">
          <div className="nav-buttons">
            <button
              className={`nav-button ${activeTab === "Pendientes" ? "active" : ""}`}
              onClick={() => handleTabChange("Pendientes")}
            >
              Pendientes
            </button>
            <button
              className={`nav-button ${activeTab === "Cerrados" ? "active" : ""}`}
              onClick={() => handleTabChange("Cerrados")}
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

      {/* Mostrar botón Crear Nuevo solo en "Pendientes" */}
      {activeTab === "Pendientes" && (
        <div className="create-new-container">
          <button
            className="create-button"
            onClick={() => navigate("/create-task")}
          >
            + Crear nuevo
          </button>
        </div>
      )}

      {/* Contenido de las tareas */}
      <div className="scrollable-content">
        <h2>{activeTab === "Pendientes" ? "Tareas Pendientes" : "Aperturas y Reaperturas Cerradas"}</h2>
        <div className="task-container">
          {filteredTasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.type}</h3>
              <p>ID: {task.id}</p>
              <p>Local: {task.local}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <p>{task.progress}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
