import { ExternalLink, Star } from "lucide-react"
import styled from "styled-components"

// === Hier deine echte Google-Maps-URL eintragen ===
const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/2cXwwerX6ouGu3yV9"
// Optional auch andere Plattformen — leer lassen, dann werden sie ausgeblendet
const TRIPADVISOR_URL = ""

const Reviews = () => {
  return (
    <Section id='reviews'>
      <Head>
        <Num>// 05</Num>
        <Eyebrow>Bewertungen</Eyebrow>
      </Head>

      <Row>
        <Stars aria-label='Fünf Sterne'>
          <Star size={20} fill='currentColor' strokeWidth={0} />
          <Star size={20} fill='currentColor' strokeWidth={0} />
          <Star size={20} fill='currentColor' strokeWidth={0} />
          <Star size={20} fill='currentColor' strokeWidth={0} />
          <Star size={20} fill='currentColor' strokeWidth={0} />
        </Stars>

        <Text>Schon mal da gewesen? Hinterlass uns gerne eine Bewertung.</Text>

        <Buttons>
          <Btn href={GOOGLE_REVIEW_URL} target='_blank' rel='noreferrer'>
            Auf Google bewerten
            <ExternalLink size={13} />
          </Btn>
          {TRIPADVISOR_URL && (
            <Btn href={TRIPADVISOR_URL} target='_blank' rel='noreferrer'>
              Auf TripAdvisor
              <ExternalLink size={13} />
            </Btn>
          )}
        </Buttons>
      </Row>
    </Section>
  )
}

export default Reviews

const Section = styled.section`
  padding: 2.5rem 1.5rem;
  background: var(--bg);
  color: var(--fg);
  border-bottom: 1px solid var(--line);

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

const Head = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
`

const Num = styled.span`
  color: var(--accent);
  font-weight: 700;
`

const Eyebrow = styled.span`
  color: var(--muted);
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
`

const Stars = styled.div`
  display: inline-flex;
  gap: 2px;
  color: var(--accent);
`

const Text = styled.p`
  font-family: "Fraunces", serif;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.4;
  color: var(--fg);
  flex: 1;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--fg);
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
  }
`
