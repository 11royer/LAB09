import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const productInfoElement = document.getElementById('product-info');
productInfoElement.textContent = `Producto: ${data.title}, Precio: ${data.price}`;

