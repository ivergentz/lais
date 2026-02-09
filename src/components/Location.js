import { MapPin, Phone } from "lucide-react"
import styled from "styled-components"

const Location = () => {
  return (
    <Wrapper id='contact'>
      <Title>KONTAKT</Title>
      <Address>
        <p>Bei der Reitbahn 1</p>
        <p>22763 Altona</p>
        <p>040 397766</p>
      </Address>
      <ButtonRow>
        <IconButton
          as='a'
          href='https://maps.app.goo.gl/2cXwwerX6ouGu3yV9'
          target='_blank'
          rel='noreferrer'
        >
          <MapPin size={20} />
          Karte
        </IconButton>
        <IconButton as='a' href='tel:+4940397766'>
          <Phone size={20} />
          Anrufen
        </IconButton>
      </ButtonRow>
    </Wrapper>
  )
}

export default Location

const Wrapper = styled.div`
  flex: 1;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    border-right: 4px solid #000;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Address = styled.div`
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8;
  }
`

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
`

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #000;
  color: #fff;
  border: 4px solid #000;
  padding: 0.75rem 1.5rem;
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }
`
