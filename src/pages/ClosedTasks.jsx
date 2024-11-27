import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ClosedTasks = () => {
  const navigate = useNavigate();
  const { tasks } = useContext(AppContext); // Obtén las tareas desde el contexto

  // Filtra las tareas cerradas
  const closedTasks = tasks.filter((task) => task.progress === 100);

  const handleRowClick = (id) => {
    navigate(`/task-details/${id}`);
  };

  return (
    <div className="closed-tasks-container">
      <h2>Aperturas y Reaperturas Cerradas</h2>
      <table className="closed-tasks-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Local</th>
            <th>Número</th>
            <th>Fecha de inicio</th>
            <th>Fecha de apertura</th>
            <th>Fecha de cierre</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {closedTasks.map((task) => (
            <tr
              key={task.id}
              onClick={() => handleRowClick(task.id)}
              className="clickable-row"
            >
              <td>{task.type}</td>
              <td>{task.local}</td>
              <td>{task.numero}</td>
              <td>{task.fechaInicio || "No especificada"}</td>
              <td>{task.fechaApertura || "No especificada"}</td>
              <td>{task.fechaCierre || "No especificada"}</td>
              <td>{task.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClosedTasks;
