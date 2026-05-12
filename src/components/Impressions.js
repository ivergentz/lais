import { useEffect, useState } from "react"
import styled from "styled-components"
import pic02 from "../assets/pics/02.jpg"
import pic03 from "../assets/pics/03.jpg"
import pic04 from "../assets/pics/04.jpg"
import pic05 from "../assets/pics/05.jpg"
import pic07 from "../assets/pics/07.jpg"
import pic08 from "../assets/pics/08.jpg"
import aussen from "../assets/pics/aussen.png"

const SLIDES = [
  { id: 1, pic: pic03 },
  { id: 2, pic: aussen },
  { id: 3, pic: pic04 },
  { id: 4, pic: pic02 },
  { id: 5, pic: pic05 },
  { id: 6, pic: pic07 },
  { id: 7, pic: pic08 },
]

const Impressions = () => {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveId(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const toggle = (id) => setActiveId((cur) => (cur === id ? null : id))

  return (
    <Section id='pictures'>
      <Head>
        <Num>// 03</Num>
        <Eyebrow>Eindrücke</Eyebrow>
        <Count>{SLIDES.length} Aufnahmen</Count>
      </Head>

      <Title>Lais in Bildern.</Title>

      <Masonry>
        {SLIDES.map((slide, i) => (
          <Item
            key={slide.id}
            $active={activeId === slide.id}
            $dimmed={activeId !== null && activeId !== slide.id}
            onClick={() => toggle(slide.id)}
            aria-label={`Bild ${i + 1} ${
              activeId === slide.id ? "verkleinern" : "vergrößern"
            }`}
            aria-pressed={activeId === slide.id}
          >
            <Img src={slide.pic} alt='' loading='lazy' />
            <ItemNum>{String(slide.id).padStart(2, "0")}</ItemNum>
          </Item>
        ))}
      </Masonry>

      <MobileStrip>
        {SLIDES.map((slide) => (
          <MobileSlide key={slide.id}>
            <img src={slide.pic} alt='' loading='lazy' />
            <MobileNum>{String(slide.id).padStart(2, "0")}</MobileNum>
          </MobileSlide>
        ))}
      </MobileStrip>

      <Caption>
        <span>S/W · Klick zum Vergrößern</span>
        <span>Hover für Farbe</span>
      </Caption>
    </Section>
  )
}

export default Impressions

const Section = styled.section`
  padding: 3rem 0 0;
  background: var(--bg);
  color: var(--fg);
  border-bottom: 1px solid var(--line);

  @media (min-width: 768px) {
    padding: 4rem 0 0;
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
  margin: 0 1.5rem 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--line);

  @media (min-width: 768px) {
    margin: 0 2rem 1rem;
  }
`

const Num = styled.span`
  color: var(--accent);
  font-weight: 700;
`

const Eyebrow = styled.span`
  color: var(--muted);
  flex: 1;
`

const Count = styled.span`
  color: var(--muted);
`

const Title = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 1.5rem 1.5rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin: 0 2rem 2rem;
  }
`

/* Desktop: 3-column Masonry — respects natural image aspect ratio */
const Masonry = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    column-count: 3;
    column-gap: 6px;
    padding: 6px;
    background: var(--grid-bg);
  }
`

const Item = styled.button`
  display: block;
  width: 100%;
  position: relative;
  margin: 0 0 6px;
  padding: 0;
  border: none;
  background: var(--tile-bg);
  cursor: pointer;
  overflow: hidden;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  transition: opacity 0.3s ease;
  opacity: ${(p) => (p.$dimmed ? 0.35 : 1)};

  ${(p) =>
    p.$active &&
    `
    column-span: all;
    -webkit-column-span: all;
    margin-bottom: 10px;
  `}

  &:hover {
    opacity: 1;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(100%) contrast(1.05) brightness(0.88);
  transition: filter 0.35s ease, transform 0.5s ease, max-height 0.4s ease;

  ${Item}:hover & {
    filter: grayscale(0%) contrast(1) brightness(1);
    transform: scale(1.02);
  }

  ${Item}[aria-pressed="true"] & {
    filter: grayscale(0%) contrast(1) brightness(1);
    max-height: 80vh;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin: 0 auto;
    transform: none;
  }
`

const ItemNum = styled.span`
  position: absolute;
  top: 8px;
  left: 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.55);
  padding: 2px 7px;
  z-index: 2;
  pointer-events: none;
`

/* Mobile horizontal strip */
const MobileStrip = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0 1.5rem 1rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileSlide = styled.div`
  flex-shrink: 0;
  width: 75vw;
  scroll-snap-align: center;
  position: relative;
  background: var(--tile-bg);

  img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    display: block;
    filter: grayscale(100%) contrast(1.05) brightness(0.9);
  }
`

const MobileNum = styled.span`
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
  padding: 3px 7px;
`

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 1.5rem 2rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);

  @media (min-width: 768px) {
    padding: 0.875rem 2rem 2.5rem;
  }
`
