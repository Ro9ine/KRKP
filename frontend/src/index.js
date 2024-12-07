import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Корневой компонент приложения
import './index.css'; // Глобальные стили

// Рендеринг приложения
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
