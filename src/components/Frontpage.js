import styled from "styled-components"
import hero from "../assets/pics/03.jpg"
import heroMobile from "../assets/pics/beer.jpg"

const Frontpage = () => {
  return (
    <Hero id='home'>
      <BgImage />
      <Grain />
      <Overlay />

      <Content>
        <MetaTop>
          <span>
            Est. <b>1974</b> · Reitbahn 1, Hamburg-Altona
          </span>
          <span className='right'>HH · DE</span>
        </MetaTop>

        <TitleRow>
          <Title>
            Lais<Dot>.</Dot>
          </Title>
          <SideTag>Kneipe / Darts</SideTag>
        </TitleRow>

        <MetaBottom>
          <Sub>
            Fünfzig Jahre Gastfreundschaft in Ottensen — Raucherkneipe,
            Fassbier, Mexikaner.
          </Sub>
          <ScrollHint>▼ Scroll</ScrollHint>
        </MetaBottom>
      </Content>
    </Hero>
  )
}

export default Frontpage

const Hero = styled.section`
  position: relative;
  min-height: calc(100vh - 96px);
  overflow: hidden;
  border-bottom: 1px solid var(--line);
  background: #0a0a0a;
  color: #fff;
`

const BgImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${heroMobile});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) contrast(1.1) brightness(0.55);
  animation: lais-kenburns 20s ease-in-out infinite alternate;

  @keyframes lais-kenburns {
    from { transform: scale(1) translate(0, 0); }
    to   { transform: scale(1.08) translate(-1%, -1%); }
  }

  @media (min-width: 768px) {
    background-image: url(${hero});
  }
`

const Grain = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.025) 0 1px,
    transparent 1px 3px
  );
  pointer-events: none;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.55) 60%,
    rgba(0, 0, 0, 0.9) 100%
  );
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const MetaTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);

  b {
    color: var(--accent);
    font-weight: 700;
  }

  .right {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin: 2rem 0;
`

const Title = styled.h1`
  font-family: "Fraunces", serif;
  font-weight: 900;
  font-size: clamp(7rem, 28vw, 22rem);
  line-height: 0.8;
  letter-spacing: -0.06em;
  margin: 0;
  color: #fff;
`

const Dot = styled.span`
  color: var(--accent);
`

const SideTag = styled.div`
  display: none;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: rgba(255, 255, 255, 0.55);
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`

const MetaBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  letter-spacing: 0.05em;
`

const Sub = styled.p`
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 1.4;
  max-width: 32rem;
  color: rgba(255, 255, 255, 0.95);
  text-transform: none;
  letter-spacing: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const ScrollHint = styled.div`
  display: none;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 11px;
  white-space: nowrap;
  animation: lais-bounce 2s ease-in-out infinite;

  @keyframes lais-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  @media (min-width: 768px) {
    display: block;
  }
`
