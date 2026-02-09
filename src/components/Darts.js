import styled from "styled-components"

const Darts = () => {
  return (
    <Section id='darts'>
      <Inner>
        <Title>DARTS</Title>
        <IntroText>
          Bei uns wird E-Darts gespielt. Mindestens ein Automat ist bespielbar.
          An bestimmten Tagen kann es sein, dass die Automaten abends belegt sind.
        </IntroText>
        <Grid>
          <Card>
            <CardTitle>Montag</CardTitle>
            <CardText>Ab 20:00 Uhr nur noch ein Automat im vorderen Teil.</CardText>
          </Card>
          <Card>
            <CardTitle>Dienstag</CardTitle>
            <CardText>
              Ab ca. 18:00 Uhr Training bzw. Heimspieltag{" "}
              <TeamLink
                href='https://hhedl.de/team_stats.php?team=1069'
                target='_blank'
                rel='noreferrer'
              >
                Elbmotten
              </TeamLink>
              .
            </CardText>
          </Card>
          <Card>
            <CardTitle>Mittwoch</CardTitle>
            <CardText>
              Ab ca. 18:00 Uhr Training bzw. Heimspieltag{" "}
              <TeamLink
                href='https://hhedl.de/team_stats.php?team=1178'
                target='_blank'
                rel='noreferrer'
              >
                Elbmotten reloaded
              </TeamLink>
              .
            </CardText>
          </Card>
          <Card>
            <CardTitle>Donnerstag</CardTitle>
            <CardText>
              Ab ca. 18:00 Uhr Training{" "}
              <TeamLink
                href='https://hhedl.de/team_stats.php?team=902'
                target='_blank'
                rel='noreferrer'
              >
                Küchenteufel
              </TeamLink>
              {" & "}
              <TeamLink
                href='https://hhedl.de/team_stats.php?team=1263'
                target='_blank'
                rel='noreferrer'
              >
                Elbmotten 103er
              </TeamLink>
              .
            </CardText>
          </Card>
        </Grid>
      </Inner>
    </Section>
  )
}

export default Darts

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
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const IntroText = styled.p`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  max-width: 640px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: -2px;
  }
`

const Card = styled.div`
  border: 4px solid #000;
  padding: 2rem;
  margin: -2px;

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

const TeamLink = styled.a`
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
  transition: all 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }
`
