import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { applyDocumentTheme, resolveTheme, ThemeProvider } from './hooks/useTheme.js'
import './index.css'
import './styles/animations.css'

applyDocumentTheme(resolveTheme())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
