// Importação das rotas
import Rotas from './routes/Rotas.jsx'

// Importações do React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Rotas/>

  </StrictMode>,
)
