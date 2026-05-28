import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactUI from './ReactUI.jsx'
import initGame from './initGame.js'

createRoot(document.getElementById('ui')).render(
  <StrictMode>
    <ReactUI />
  </StrictMode>,
)

initGame();