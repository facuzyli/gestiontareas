import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Apertura 1', local: 'macowens', status: 'pendiente', progress: 50 },
    { id: 2, name: 'Reapertura 2', local: 'devre', status: 'pendiente', progress: 20 },
    { id: 3, name: 'Apertura 3', local: 'macowens', status: 'cerrada', progress: 100 },
    { id: 4, name: 'Reapertura 4', local: 'devre', status: 'cerrada', progress: 100 },
  ]);

  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'gerente' && password === '1234') {
      const user = { username, role: 'manager' };
      setUser(user);
      console.log("Usuario logueado:", user);
      return true;
    }
    console.log("Credenciales incorrectas");
    return false;
  };

  const logout = () => {
    setUser(null);
    console.log("Sesión cerrada");
  };

  useEffect(() => {
    console.log("Tareas en contexto:", tasks);
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
