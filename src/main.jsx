import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/responsive.css';
import './styles/layout.css';
import './styles/hero.css';
import './styles/header.css';
import './styles/sections.css';
import './styles/contact.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
