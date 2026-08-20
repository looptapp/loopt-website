import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { normalizePathname } from './metadata.ts'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

const prerenderedPath = root.dataset.prerenderedPath
const isMatchingPrerender =
  root.hasChildNodes() &&
  prerenderedPath === normalizePathname(window.location.pathname)

if (isMatchingPrerender) {
  hydrateRoot(root, app)
} else {
  root.replaceChildren()
  createRoot(root).render(app)
}
