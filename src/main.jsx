import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

const prerenderedPath = container.dataset.prerenderedPath
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

if (prerenderedPath && prerenderedPath === currentPath) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
