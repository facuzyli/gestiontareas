import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AppContext);

  console.log("Usuario actual:", user);

  if (!user) {
    console.log("No hay usuario, redirigiendo al login");
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log("Rol no permitido, redirigiendo al login");
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
