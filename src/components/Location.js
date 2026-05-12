import { MapPin, Phone } from "lucide-react"
import styled from "styled-components"

const Location = () => {
  return (
    <Wrapper id='contact'>
      <Head>
        <Num>// 01</Num>
        <Eyebrow>Kontakt</Eyebrow>
      </Head>

      <Title>Finde uns.</Title>

      <Address>
        Bei der Reitbahn 1
        <br />
        22763 Hamburg-Altona
      </Address>

      <Buttons>
        <PrimaryBtn
          href='https://maps.app.goo.gl/2cXwwerX6ouGu3yV9'
          target='_blank'
          rel='noreferrer'
        >
          <MapPin size={16} />
          Karte öffnen
        </PrimaryBtn>
        <GhostBtn href='tel:+4940397766'>
          <Phone size={16} />
          Anrufen
        </GhostBtn>
      </Buttons>
    </Wrapper>
  )
}

export default Location

const Wrapper = styled.div`
  padding: 3rem 1.5rem;
  background: var(--bg);
  color: var(--fg);

  @media (min-width: 768px) {
    padding: 4rem 2.5rem;
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
  margin-bottom: 0.75rem;
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

const Title = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 0 1.25rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Address = styled.p`
  font-family: "Fraunces", serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 1.75rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const btnBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.125rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--line);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
`

const PrimaryBtn = styled.a`
  ${btnBase}
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;

  &:hover {
    background: transparent;
    color: var(--accent);
  }
`

const GhostBtn = styled.a`
  ${btnBase}
  background: transparent;
  color: var(--fg);

  &:hover {
    background: var(--fg);
    color: var(--bg);
  }
`
