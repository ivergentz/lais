import styled from "styled-components"

const Other = () => {
  return (
    <Section id='other'>
      <Inner>
        <Title>AUSSERDEM</Title>
        <Grid>
          <Card>
            <CardTitle>Raucherkneipe</CardTitle>
            <CardText>Zutritt erst ab 18 Jahren</CardText>
          </Card>
          <Card>
            <CardTitle>Bier vom Fass</CardTitle>
            <CardText>
              <strong>JEVER</strong> und <strong>Augustiner</strong> gibt es bei
              uns frisch gezapft
            </CardText>
          </Card>
          <Card>
            <CardTitle>Mexikaner</CardTitle>
            <CardText>
              Wir sind bekannt für unseren selbstgemachten Mexikaner
            </CardText>
          </Card>
        </Grid>
      </Inner>
    </Section>
  )
}

export default Other

const Section = styled.section`
  background: #fff;
  padding: 5rem 2rem;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: -2px;
  }
`

const Card = styled.div`
  border: 4px solid #000;
  padding: 2rem;
  margin: -2px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`

const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`
