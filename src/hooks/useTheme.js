import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { site } from '../data/content'

const STORAGE_KEY = 'template-premium-theme'
const ThemeContext = createContext(null)

export function resolveTheme() {
  const { mode, default: fallback = 'light' } = site.theme

  if (mode === 'light' || mode === 'dark') return mode

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage pode falhar em navegação privada. O tema padrão segue valendo.
  }

  return fallback === 'dark' ? 'dark' : 'light'
}

export function applyDocumentTheme(themeName) {
  const root = document.documentElement
  const palette = site.theme.colors?.[themeName]

  root.dataset.theme = themeName
  root.dataset.animations = site.settings.animations === false ? 'off' : 'on'
  root.style.colorScheme = themeName

  if (site.meta.lang) root.lang = site.meta.lang
  if (!palette) return

  Object.entries(palette).forEach(([token, value]) => {
    root.style.setProperty(`--${token}`, value)
  })
}

export function ThemeProvider({ children }) {
  const canToggle = site.theme.mode === 'both'
  const [theme, setTheme] = useState(resolveTheme)

  useEffect(() => {
    applyDocumentTheme(theme)

    if (!canToggle) return

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Sem storage, a escolha vale só nesta visita.
    }
  }, [theme, canToggle])

  const toggleTheme = useCallback(() => {
    if (!canToggle) return
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }, [canToggle])

  const value = useMemo(
    () => ({ theme, canToggle, toggleTheme }),
    [theme, canToggle, toggleTheme],
  )

  // Sem JSX aqui: este arquivo é .js, como a estrutura do projeto pede.
  return createElement(ThemeContext.Provider, { value }, children)
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme precisa estar dentro de ThemeProvider.')
  }

  return context
}
