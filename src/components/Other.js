import React from "react"
import styled from "styled-components"

const Other = () => {
  return (
    <Wrapper id='other'>
      <img src='' alt='' />
      <div>
        <h3>Außerdem...</h3>
        <Day>Raucherkneipe</Day>
        <Hours>Zutritt erst ab 18 Jahren</Hours>
        <Day>Bier vom Fass</Day>
        <Hours>
          <strong>JEVER</strong> und <strong>Augustiner</strong> gibt es bei uns
          frisch gezapft
        </Hours>
        <Day>Mexikaner</Day>
        <Hours>Wir sind bekannt für unseren selbstgemachten Mexikaner</Hours>
      </div>
    </Wrapper>
  )
}

export default Other

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: #fff;
  padding-right: 5vw;

  @media only screen and (min-width: 768px) {
    max-height: 95vh;
    max-width: 40vw;
    background: white;
  }
  /* 
  img {
    position: absolute;
    top: 210vh;
    height: 100vh;
    width: 100vw;
    object-fit: contain;
    z-index: 1;
    opacity: 0.05;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  } */

  div {
    padding: 0 0 0 5vw;
  }

  h3 {
    font-weight: 200;
    font-size: 64px;
    padding-bottom: 4vh;
  }
`

const Day = styled.p`
  font-weight: 700;
  padding: 2vh 0 0 0;
  font-size: 32px;
`
const Hours = styled.p`
  font-weight: 200;
  font-size: 28px;
`
