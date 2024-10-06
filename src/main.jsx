import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TestAi from './TestAi.jsx'
import './index.css'
import DisplayRecipes from './DisplayRecipes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TestAi />
    <DisplayRecipes />
  </StrictMode>,
)
