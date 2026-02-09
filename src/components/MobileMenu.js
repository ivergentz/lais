import { useEffect } from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

// Styled Components

const MobileMenu = ({ open, closeMenu }) => {
  // Toggle the body's class to prevent scrolling when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <MobileMenuContainer open={open} onClick={closeMenu}>
      <ul>
        <li>
          <Link to='/home' className='first' onClick={closeMenu}>
            X
          </Link>
        </li>
        <li>
          <Link to='Home' smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='Contact' smooth={true} duration={500} onClick={closeMenu}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link to='Open' smooth={true} duration={500} onClick={closeMenu}>
            Öffnungszeiten
          </Link>
        </li>
        <li>
          <Link to='Other' smooth={true} duration={500} onClick={closeMenu}>
            Sonst noch...
          </Link>
        </li>
        <li>
          <Link to='Pictures' smooth={true} duration={500} onClick={closeMenu}>
            Bilder
          </Link>
        </li>
        <li>
          <Link to='Darts' smooth={true} duration={500} onClick={closeMenu}>
            Darts
          </Link>
        </li>
      </ul>
    </MobileMenuContainer>
  )
}

export default MobileMenu

const MobileMenuContainer = styled.nav`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 70vw;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-1000%)")};
  transition: transform 1.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 200;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  ul {
    flex-direction: column !important;
    font-weight: bold;
    font-size: 1.5rem;
    z-index: 100;
    list-style-type: none;
    display: flex;

    li {
      margin: 1vh;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      justify-content: center;
      align-items: center;
    }

    .first {
      font-weight: 200;
    }
  }
`
