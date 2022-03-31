import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./state/store";
import {addAction} from "./state/actions";

store.subscribe(() => {
  console.log('YAY');
  console.log(store.getState());
});

store.dispatch(addAction('Bonaparte, baja de la mesa'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
