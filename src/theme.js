import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} })

const STORAGE_KEY = "lais-theme"

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      // ignore quota errors
    }
  }, [theme])

  // Listen for system changes only if user hasn't manually chosen
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e) => {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) setTheme(e.matches ? "dark" : "light")
    }
    mql.addEventListener?.("change", handler)
    return () => mql.removeEventListener?.("change", handler)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
