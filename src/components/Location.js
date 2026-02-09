import React from "react"
import styled from "styled-components"
import pin from "../assets/pics/icons8-gps-64.png"
import phone from "../assets/pics/icons8-telefon-50.png"
import map from "../assets/pics/map-9202470_640.png"

const Location = () => {
  return (
    <Wrapper id='contact'>
      <BackgroundImage src={map} alt='' />
      <TextWrapper>
        <h3>Anfahrt und Kontakt</h3>
        <Adress>
          <p>Bei der Reitbahn 1</p>
          <p>22763 Altona</p>
          <p>040 397766</p>
        </Adress>
        <Link>
          <a
            href='https://maps.app.goo.gl/2cXwwerX6ouGu3yV9'
            target='_blank'
            rel='noreferrer'
          >
            <img src={pin} alt='' />
          </a>
          <a href='tel:+4940397766' target='_blank' rel='noreferrer'>
            <img src={phone} alt='' />
          </a>
        </Link>
      </TextWrapper>
    </Wrapper>
  )
}

export default Location

const Wrapper = styled.section`
  padding: 24px;
  width: 100vw;
  height: 100vh;
  background: ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    padding-top: 20vh;
    justify-content: start;
    background-color: rgba(240, 165, 0, 0.03);
    max-width: 80vw;
  }
`

const BackgroundImage = styled.img`
  opacity: 0.1;
  position: absolute;
  width: 100vw;
  z-index: 0;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 20vw;
  }
`

const TextWrapper = styled.div`
  height: auto;
  z-index: 10;

  h3 {
    font-size: 64px;
    font-weight: 200;
    @media only screen and (min-width: 768px) {
      font-size: 64px;
    }
  }
  p {
    font-weight: 700;
    font-size: 24px;
  }

  a {
    display: flex;
    cursor: pointer;
    width: 70px;
    height: 70px;
  }

  img {
    border-radius: 25px;
    margin-right: 24px;
    padding: 3vw;
    background: black;

    @media only screen and (min-width: 768px) {
      padding: 1.2vw;
    }
  }
`

const Link = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5vw;
`

const Adress = styled.div`
  padding: 5vh 0;
`
