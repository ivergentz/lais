import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { useTheme } from "../theme"
import { getOpenStatus } from "../utils/openStatus"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState(getOpenStatus())
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  const statusText = status.isOpen
    ? `Jetzt offen · Schließt ${status.closesAt}`
    : status.opensAt
    ? `Geschlossen · Wieder ${status.opensAt}`
    : "Geschlossen"

  return (
    <Wrapper>
      <StatusBar>
        <Status>
          <Dot $open={status.isOpen} />
          <span>{statusText}</span>
        </Status>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Dark Mode aktivieren" : "Light Mode aktivieren"}
        >
          {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </ThemeToggle>
      </StatusBar>

      <Nav>
        <NavInner>
          <Logo onClick={() => scrollTo("home")}>
            Lais<LogoDot>.</LogoDot>
          </Logo>

          <DesktopLinks>
            <NavLink onClick={() => scrollTo("pictures")}>Bilder</NavLink>
            <NavLink onClick={() => scrollTo("contact")}>Kontakt</NavLink>
            <NavLink onClick={() => scrollTo("open")}>Öffnungszeiten</NavLink>
            <NavLink onClick={() => scrollTo("other")}>Außerdem</NavLink>
            <NavLink onClick={() => scrollTo("darts")}>Darts</NavLink>
          </DesktopLinks>

          <MobileBtn onClick={() => setMenuOpen((o) => !o)} aria-label='Menü'>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </MobileBtn>
        </NavInner>

        {menuOpen && (
          <MobileDrawer>
            <MobileLink onClick={() => scrollTo("pictures")}>Bilder</MobileLink>
            <MobileLink onClick={() => scrollTo("contact")}>Kontakt</MobileLink>
            <MobileLink onClick={() => scrollTo("open")}>Öffnungszeiten</MobileLink>
            <MobileLink onClick={() => scrollTo("other")}>Außerdem</MobileLink>
            <MobileLink onClick={() => scrollTo("darts")}>Darts</MobileLink>
          </MobileDrawer>
        )}
      </Nav>
    </Wrapper>
  )
}

export default Navigation

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 9999;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
`

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid var(--line);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--fg);
  font-weight: 500;
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(p) => (p.$open ? "var(--accent)" : "var(--muted)")};
  display: inline-block;
  animation: ${(p) => (p.$open ? blink : "none")} 1.6s ease-in-out infinite;
`

const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--fg);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--fg);
    color: var(--bg);
  }
`

const Nav = styled.div`
  background: var(--bg);
`

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

const Logo = styled.button`
  font-family: "Fraunces", serif;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const LogoDot = styled.span`
  color: var(--accent);
`

const DesktopLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }
`

const NavLink = styled.button`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg);
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 4px 0;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-bottom-color: var(--accent);
    color: var(--accent);
  }
`

const MobileBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--line);
  cursor: pointer;
  padding: 0.5rem;
  color: var(--fg);

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileDrawer = styled.div`
  border-top: 1px solid var(--line);
  background: var(--bg);
  padding: 0.5rem 1.25rem 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileLink = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg);
  background: none;
  border: none;
  border-bottom: 1px solid var(--line);
  padding: 0.875rem 0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: var(--accent);
  }
`
