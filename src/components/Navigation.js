import { useState } from "react"
import styled from "styled-components"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => scrollTo("home")}>Lais</Logo>

        <DesktopLinks>
          <NavLink onClick={() => scrollTo("open")}>Öffnungszeiten</NavLink>
          <NavLink onClick={() => scrollTo("darts")}>Darts</NavLink>
          <NavLink onClick={() => scrollTo("other")}>Außerdem</NavLink>
          <NavLink onClick={() => scrollTo("pictures")}>Bilder</NavLink>
          <NavLink onClick={() => scrollTo("contact")}>Kontakt</NavLink>
        </DesktopLinks>

        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <MenuLine $open={menuOpen} $first />
          <MenuLine $open={menuOpen} $middle />
          <MenuLine $open={menuOpen} $last />
        </HamburgerButton>
      </NavContainer>

      {menuOpen && (
        <MobileDropdown>
          <MobileLink onClick={() => scrollTo("home")}>Home</MobileLink>
          <MobileLink onClick={() => scrollTo("open")}>Öffnungszeiten</MobileLink>
          <MobileLink onClick={() => scrollTo("darts")}>Darts</MobileLink>
          <MobileLink onClick={() => scrollTo("other")}>Außerdem</MobileLink>
          <MobileLink onClick={() => scrollTo("pictures")}>Bilder</MobileLink>
          <MobileLink onClick={() => scrollTo("contact")}>Kontakt</MobileLink>
        </MobileDropdown>
      )}
    </Nav>
  )
}

export default Navigation

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  z-index: 9999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 2.5rem;
  font-weight: 200;
  letter-spacing: -2px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

const DesktopLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

const NavLink = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.7;
  }
`

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`

const MenuLine = styled.span`
  height: 2px;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s;

  ${(props) =>
    props.$open &&
    props.$first &&
    `transform: rotate(45deg) translateY(8px);`}

  ${(props) =>
    props.$open &&
    props.$middle &&
    `opacity: 0;`}

  ${(props) =>
    props.$open &&
    props.$last &&
    `transform: rotate(-45deg) translateY(-8px);`}
`

const MobileDropdown = styled.div`
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 1.5rem 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileLink = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  font-family: "Oswald", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 0;
  transition: opacity 0.3s;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.7;
  }
`
