import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from "react-router-dom";
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import App from './App';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}>
    <BrowserRouter>
    <App/>
    <AppRouter/>
    </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
