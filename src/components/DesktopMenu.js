import { Link } from "react-scroll"
import styled from "styled-components"

const DesktopMenu = () => {
  return (
    <MenuWrapper>
      <Lais>
        <Link to='Home' smooth={true} duration={500}>
          Lais
        </Link>
      </Lais>
    </MenuWrapper>
  )
}

export default DesktopMenu

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;

  @media (max-width: 600px) {
    display: none;
  }
`

const Lais = styled.div`
  font-size: 4rem;
  margin: 0;
  padding: 0.5vh 0;
  font-weight: 200;
  letter-spacing: -4px;
  cursor: pointer;
`
