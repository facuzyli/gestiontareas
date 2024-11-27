import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ManagerDashboard from './components/ManagerDashboard';
import SystemDashboard from './components/SystemDashboard';
import PendingTasks from './pages/PendingTasks';
import ClosedTasks from './pages/ClosedTasks';
import CreateTaskForm from './pages/CreateTaskForm';
import SystemPendingTasks from './pages/SystemPendingTasks';
import QuestionsManager from './pages/QuestionsManager';
import CreateQuestionForm from './pages/CreateQuestionForm';
import TaskDetails from './pages/TaskDetails';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de inicio (login) */}
        <Route path="/" element={<Login />} />
        
        {/* Dashboard de Gerente */}
        <Route
          path="/manager"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <ManagerDashboard />
            </PrivateRoute>
          }
        />

        {/* Dashboard de Sistemas */}
        <Route
          path="/system"
          element={
            <PrivateRoute allowedRoles={['system']}>
              <SystemDashboard />
            </PrivateRoute>
          }
        />

        {/* Tareas Pendientes */}
        <Route
          path="/pending-tasks"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <PendingTasks />
            </PrivateRoute>
          }
        />

        {/* Tareas Cerradas */}
        <Route
          path="/closed-tasks"
          element={
            <PrivateRoute allowedRoles={['manager', 'system']}>
              <ClosedTasks />
            </PrivateRoute>
          }
        />

        {/* Crear nueva tarea */}
        <Route
          path="/create-task"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <CreateTaskForm />
            </PrivateRoute>
          }
        />

        {/* Tareas del sistema */}
        <Route
          path="/system-tasks"
          element={
            <PrivateRoute allowedRoles={['system']}>
              <SystemPendingTasks />
            </PrivateRoute>
          }
        />

        {/* Gestión de preguntas */}
        <Route
          path="/questions"
          element={
            <PrivateRoute allowedRoles={['system']}>
              <QuestionsManager />
            </PrivateRoute>
          }
        />

        {/* Crear nueva pregunta */}
        <Route
          path="/create-question"
          element={
            <PrivateRoute allowedRoles={['system']}>
              <CreateQuestionForm />
            </PrivateRoute>
          }
        />

        {/* Detalle de Tarea */}
        <Route
          path="/task-details/:id"
          element={
            <PrivateRoute allowedRoles={['manager', 'system']}>
              <TaskDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
