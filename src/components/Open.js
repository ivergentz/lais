import styled from "styled-components"
import beer from "../assets/pics/beer_tablet.png"

const Open = () => {
  return (
    <Wrapper id='open'>
      <img src={beer} alt='' />
      <div>
        <h3>Öffnungszeiten</h3>
        <Day>Dienstag - Donnerstag</Day>
        <Hours>16.00 - 1.00</Hours>
        <Day>Freitag & Samstag</Day>
        <Hours>16.00 - 3.00</Hours>
        <Day>Sonntag & Montag</Day>
        <Hours>Ruhetag</Hours>
      </div>
    </Wrapper>
  )
}

export default Open

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background: #f5f3f2;

  @media only screen and (min-width: 768px) {
    max-height: 95vh;
    max-width: 40vw;
    background: white;
  }

  img {
    position: absolute;
    top: 210vh;
    height: 100vh;
    width: 100vw;
    object-fit: contain;
    z-index: 1;
    opacity: 0.05;

    @media only screen and (min-width: 768px) {
      width: 30vw;
    }
  }

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
