import React from "react"
import styled from "styled-components"
import lais from "../assets/pics/03.jpg"
import hero from "../assets/pics/beer.jpg"

const Frontpage = () => {
  return (
    <HeaderSection id='home'>
      <HeaderContent>
        <Title>Lais</Title>
        <Subtitle>Kneipe - Darts </Subtitle>

        <Title className='secondtitle'>
          50 Jahre Gastfreundschaft in Ottensen
        </Title>
      </HeaderContent>
    </HeaderSection>
  )
}

export default Frontpage

const HeaderSection = styled.header`
  min-height: 100vh;
  max-width: 100vw;
  background-image: url(${hero});
  background-size: cover;
  color: #fff;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${lais});
    background-size: cover;
  }
`

const HeaderContent = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 10vw;
  background-color: rgba(0, 0, 0, 0.05);
  width: 80vw;
  z-index: 2;
  padding: 2vh;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 0 10vw;
  }
`

const Title = styled.h1`
  font-size: 13rem;
  margin: 0;
  font-weight: 200;
  letter-spacing: -20px;

  &.secondtitle {
    padding-top: 2vh;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 0;
  }
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 200;
  padding-bottom: 1vh;
`
