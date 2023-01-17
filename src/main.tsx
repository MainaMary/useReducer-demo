import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import CartProvider from './context/appContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <App />
    </CartProvider>
    
    </BrowserRouter>
   
   
    
  </React.StrictMode>,
)
