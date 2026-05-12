import { ExternalLink, Star } from "lucide-react"
import styled from "styled-components"

// === Werte anpassen, wenn sich was ändert ===
// Diese könnten später aus dem Admin-Dashboard oder über die
// Google Places API + Supabase Edge Function geladen werden.
const REVIEWS = {
  rating: 4.5,
  count: 100, // mindestens — "100+" wird angezeigt
  url: "https://maps.app.goo.gl/4ffgCFbthp6cPgUGA",
}

// 5 Sterne rendern; "half" wird zur Hälfte gefüllt
const renderStars = (rating) => {
  const rounded = Math.round(rating * 2) / 2
  return [1, 2, 3, 4, 5].map((i) => {
    if (i <= rounded) return "full"
    if (i - 0.5 === rounded) return "half"
    return "empty"
  })
}

const Reviews = () => {
  const stars = renderStars(REVIEWS.rating)

  return (
    <Section id='reviews'>
      <Head>
        <Num>// 05</Num>
        <Eyebrow>Bewertungen</Eyebrow>
        <HeadMeta>Google</HeadMeta>
      </Head>

      <Row>
        <Left>
          <RatingNumber>
            {REVIEWS.rating.toFixed(1).replace(".", ",")}
          </RatingNumber>
          <RatingMeta>
            <Stars aria-label={`${REVIEWS.rating} von 5 Sternen`}>
              {stars.map((kind, i) => (
                <StarSlot key={i}>
                  {kind === "full" && (
                    <Star
                      size={16}
                      fill='currentColor'
                      strokeWidth={0}
                      color='var(--accent)'
                    />
                  )}
                  {kind === "empty" && (
                    <Star
                      size={16}
                      fill='transparent'
                      strokeWidth={1.5}
                      color='var(--muted)'
                    />
                  )}
                  {kind === "half" && (
                    <>
                      <Star
                        size={16}
                        fill='transparent'
                        strokeWidth={1.5}
                        color='var(--muted)'
                      />
                      <HalfFill>
                        <Star
                          size={16}
                          fill='currentColor'
                          strokeWidth={0}
                          color='var(--accent)'
                        />
                      </HalfFill>
                    </>
                  )}
                </StarSlot>
              ))}
            </Stars>
            <Count>{REVIEWS.count}+ Bewertungen</Count>
          </RatingMeta>
        </Left>

        <Right>
          <Quote>
            “Herrlich stilvoll eingerichteter Pub mit kühlen Bier und netter
            Bedienung.”
          </Quote>
          <Cta href={REVIEWS.url} target='_blank' rel='noreferrer'>
            Auf Google bewerten
            <ExternalLink size={13} />
          </Cta>
        </Right>
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
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);
`

const Num = styled.span`
  color: var(--accent);
  font-weight: 700;
`

const Eyebrow = styled.span`
  color: var(--muted);
  flex: 1;
`

const HeadMeta = styled.span`
  color: var(--muted);
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 3rem;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (min-width: 768px) {
    border-right: 1px solid var(--line);
    padding-right: 3rem;
  }
`

const RatingNumber = styled.div`
  font-family: "Fraunces", serif;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 5.5rem;
  }
`

const RatingMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`

const Stars = styled.div`
  display: inline-flex;
  gap: 2px;
`

const StarSlot = styled.span`
  position: relative;
  display: inline-flex;
  width: 16px;
  height: 16px;
`

const HalfFill = styled.span`
  position: absolute;
  inset: 0;
  width: 50%;
  overflow: hidden;
  pointer-events: none;
`

const Count = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`

const Quote = styled.p`
  font-family: "Fraunces", serif;
  font-style: italic;
  font-size: 1.125rem;
  line-height: 1.4;
  color: var(--fg);
  max-width: 36rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const Cta = styled.a`
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
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
  }
`
