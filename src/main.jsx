import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* surround whole app and redirects to other linked componet sites */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
