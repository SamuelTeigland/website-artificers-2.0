import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar, Footer } from './components/components';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
