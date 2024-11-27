import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerDashboard() {
    const [activeTab, setActiveTab] = useState("Pendientes");
    const [showMenu, setShowMenu] = useState(false); // Estado para el menú desplegable
    const navigate = useNavigate();

    const tasks = [
        { type: "Apertura", id: "1", local: "macowens", progress: 70 },
        { type: "Reapertura", id: "2", local: "devre", progress: 20 },
        { type: "Apertura", id: "3", local: "macowens", progress: 0 },
        { type: "Reapertura", id: "5", local: "macowens", progress: 60 },
        { type: "Apertura", id: "8", local: "devre", progress: 40 },
        { type: "Reapertura", id: "87", local: "devre", progress: 90 },
    ];

    const filteredTasks =
        activeTab === "Pendientes"
            ? tasks.filter((task) => task.progress < 100)
            : tasks.filter((task) => task.progress === 100);

    return (
        <div className="dashboard-container">
            {/* Botones fijos */}
            <div className="fixed-header">
                <nav className="dashboard-nav">
                    <div className="nav-buttons">
                        <button
                            className={`nav-button ${activeTab === "Pendientes" ? "active" : ""}`}
                            onClick={() => setActiveTab("Pendientes")}
                        >
                            Pendientes
                        </button>
                        <button
                            className={`nav-button ${activeTab === "Cerrados" ? "active" : ""}`}
                            onClick={() => setActiveTab("Cerrados")}
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
                                <button onClick={() => alert("Cerrar sesión")}>Cerrar sesión</button>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            <div className="create-new-container">
                <button
                    className="create-button"
                    onClick={() => navigate("/crear-apertura")}
                >
                    + Crear nuevo
                </button>
            </div>

            {/* Contenido desplazable */}
            <div className="scrollable-content">
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
