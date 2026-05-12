import { Target } from "lucide-react"
import styled from "styled-components"

const Darts = () => {
  return (
    <Section id='darts'>
      <Head>
        <Eyebrow>
          <Target size={14} />
          <span>// 06 — Bullseye</span>
        </Eyebrow>
        <Title>
          Darts<Dot>.</Dot>
        </Title>
        <Desc>
          E-Darts. Mindestens ein Automat ist bespielbar — an manchen Abenden
          können alle Automaten belegt sein.
        </Desc>
      </Head>

      <Grid>
        <Cell>
          <CellNum>/ DI</CellNum>
          <CellDay>Dienstag</CellDay>
          <CellInfo>
            Ab ca. <b>18:00</b> Training bzw. Heimspieltag{" "}
            <TeamLink
              href='https://hhedl.de/team_stats.php?team=1069'
              target='_blank'
              rel='noreferrer'
            >
              Elbmotten
            </TeamLink>
            .
          </CellInfo>
        </Cell>

        <Cell>
          <CellNum>/ MI</CellNum>
          <CellDay>Mittwoch</CellDay>
          <CellInfo>
            Ab ca. <b>18:00</b> Training bzw. Heimspieltag{" "}
            <TeamLink
              href='https://hhedl.de/team_stats.php?team=1178'
              target='_blank'
              rel='noreferrer'
            >
              Elbmotten reloaded
            </TeamLink>
            .
          </CellInfo>
        </Cell>

        <Cell>
          <CellNum>/ DO</CellNum>
          <CellDay>Donnerstag</CellDay>
          <CellInfo>
            Ab ca. <b>18:00</b> Training{" "}
            <TeamLink
              href='https://hhedl.de/team_stats.php?team=902'
              target='_blank'
              rel='noreferrer'
            >
              Küchenteufel
            </TeamLink>{" "}
            &{" "}
            <TeamLink
              href='https://hhedl.de/team_stats.php?team=1263'
              target='_blank'
              rel='noreferrer'
            >
              Elbmotten 103er
            </TeamLink>
            .
          </CellInfo>
        </Cell>
      </Grid>
    </Section>
  )
}

export default Darts

const Section = styled.section`
  background: var(--invert-bg);
  color: var(--invert-fg);
  padding: 0;
`

const Head = styled.div`
  padding: 4rem 1.5rem 2rem;
  text-align: center;
  border-bottom: 1px solid var(--invert-fg);

  @media (min-width: 768px) {
    padding: 5rem 2rem 2.5rem;
  }
`

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.875rem;
  position: relative;
  padding: 0 32px;

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 1px;
    background: var(--accent);
    position: absolute;
    top: 50%;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`

const Title = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin: 0;
  color: var(--invert-fg);

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const Dot = styled.span`
  color: var(--accent);
`

const Desc = styled.p`
  font-family: "Fraunces", serif;
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.4;
  color: var(--invert-muted);
  max-width: 28rem;
  margin: 1rem auto 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Cell = styled.div`
  padding: 1.75rem 1.5rem;
  border-bottom: 1px solid var(--invert-fg);
  position: relative;
  cursor: default;
  transition: background 0.25s;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    padding: 2rem 1.75rem;
    border-bottom: none;
    border-right: 1px solid var(--invert-fg);

    &:last-child {
      border-right: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 3px;
    width: 0;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`

const CellNum = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--accent);
  margin-bottom: 0.5rem;
`

const CellDay = styled.h3`
  font-family: "Fraunces", serif;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
  margin: 0 0 0.625rem;
  color: var(--invert-fg);

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

const CellInfo = styled.p`
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--invert-muted);

  b {
    color: var(--invert-fg);
    font-weight: 700;
  }
`

const TeamLink = styled.a`
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
