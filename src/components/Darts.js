import React from "react"
import styled from "styled-components"

const Darts = () => {
  return (
    <DartsContainer id='darts'>
      <h3>Darts</h3>
      <TableBackground>
        <Wrapper>
          <Subtitle>
            Bei uns wird E-Darts gespielt. Mindestens ist ein Automat
            bespielbar. Allerdings kann es an bestimmten Tagen sein, dass die
            Automaten abends belegt sind.
          </Subtitle>
          <div>
            <h4>Montag</h4>
            <p>Ab 20.00 Uhr nur noch ein Automat im vorderen Teil. </p>
          </div>
          <div>
            <h4>Dienstag</h4>
            <p>
              Ab ca. 18.00 Uhr Training bzw. Heimspieltag&nbsp;
              <a
                href='https://hhedl.de/team_stats.php?team=1069'
                target='_blank'
                rel='noreferrer'
              >
                Elbmotten
              </a>
              .
            </p>
          </div>
          <div>
            <h4>Mittwoch</h4>
            <p>
              Ab ca. 18.00 Uhr Training bzw. Heimspieltag&nbsp;
              <a
                href='https://hhedl.de/team_stats.php?team=1178'
                target='_blank'
                rel='noreferrer'
              >
                Elbmotten reloaded.
              </a>
            </p>
          </div>
          <div>
            <h4>Donnerstag</h4>
            <p>
              Ab ca. 18.00 Uhr Training bzw. Heimspieltag&nbsp;
              <a
                href='https://hhedl.de/team_stats.php?team=902'
                target='_blank'
                rel='noreferrer'
              >
                Küchenteufel
              </a>
              &nbsp; & &nbsp;
              <a
                href='https://hhedl.de/team_stats.php?team=1263'
                target='_blank'
                rel='noreferrer'
              >
                Elbomtten 103er
              </a>
              .
            </p>
          </div>
        </Wrapper>
      </TableBackground>
    </DartsContainer>
  )
}

export default Darts

const DartsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  align-items: start;
  justify-content: center;
  color: black;

  @media only screen and (min-width: 768px) {
    max-width: 60vw;
  }

  h3 {
    font-weight: 200;
    font-size: 48px;
    padding: 10vh 0 0 5vw;
  }

  p {
    font-weight: 200;
    font-size: 18px;
  }
`

const Subtitle = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`

const TableBackground = styled.div`
  margin-left: 5vw;
  width: 90vw;
  /* border: 1px solid grey; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
  height: auto;
  padding: 2vh 0;
  margin-top: 5vh;

  @media only screen and (min-width: 768px) {
    width: 50vw;
    padding: 2vh 0;
  }
`

const Wrapper = styled.div`
  padding: 0 4vh;

  div {
    padding: 2vh 0;
  }

  a {
    text-decoration: none;
    color: black;
    text-decoration: underline;
  }

  a:hover {
    font-size: 16px;
    text-transform: uppercase;
  }

  a:active {
    font-size: 16px;
    text-transform: uppercase;
  }

  h4 {
    font-weight: 700;
    text-transform: uppercase;
  }
`
