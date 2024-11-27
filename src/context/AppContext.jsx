import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Apertura 1', status: 'pendiente', progress: 50 },
    { id: 2, name: 'Reapertura 2', status: 'pendiente', progress: 20 },
    { id: 3, name: 'Apertura 3', status: 'cerrada', progress: 100 },
  ]);

  const [questions, setQuestions] = useState([
    { id: 1, text: '¿Cuál es el problema principal?' },
    { id: 2, text: '¿Qué acciones correctivas se realizaron?' },
  ]);

  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'gerente' && password === '1234') {
      setUser({ username, role: 'manager' });
      return true;
    } else if (username === 'sistemas' && password === '1234') {
      setUser({ username, role: 'system' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        questions,
        setQuestions,
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
