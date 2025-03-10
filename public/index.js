import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Importing styles if you have a CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This targets the root element in index.html
);


