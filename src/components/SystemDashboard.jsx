import React from "react";
import { useNavigate } from "react-router-dom";
import SystemNavbar from "./SystemNavbar";

const SystemDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Navbar para sistema */}
      <SystemNavbar onLogout={handleLogout} />

      {/* Contenido del dashboard */}
      <div className="scrollable-content">
        <h2>Bienvenido al Dashboard del Sistema</h2>
        {/* Agregar contenido relevante */}
      </div>
    </div>
  );
};

export default SystemDashboard;
