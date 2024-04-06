import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import {AppProvide} from "./components/useContext/MyContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvide>
    <App />
  </AppProvide>
);
 