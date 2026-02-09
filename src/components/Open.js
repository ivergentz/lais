import styled from "styled-components"

const Open = () => {
  return (
    <Wrapper id='open'>
      <Title>ÖFFNUNGSZEITEN</Title>
      <Schedule>
        <Row>
          <Day>Dienstag — Donnerstag</Day>
          <Hours>16:00 — 01:00</Hours>
        </Row>
        <Row>
          <Day>Freitag & Samstag</Day>
          <Hours>16:00 — 03:00</Hours>
        </Row>
        <Row $last>
          <Day>Sonntag & Montag</Day>
          <Hours>Ruhetag</Hours>
        </Row>
      </Schedule>
    </Wrapper>
  )
}

export default Open

const Wrapper = styled.div`
  flex: 1;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const Schedule = styled.div`
  width: 100%;
  max-width: 400px;
  border-top: 4px solid #000;
`

const Row = styled.div`
  padding: 1.25rem 0;
  border-bottom: ${(props) => (props.$last ? "4px" : "4px")} solid #000;
`

const Day = styled.p`
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
`

const Hours = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 0.25rem;
`
