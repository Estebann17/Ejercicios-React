import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import StateProvider from './context/StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StateProvider>
    <App />
  </StateProvider>
  
);


export default StateProvider;