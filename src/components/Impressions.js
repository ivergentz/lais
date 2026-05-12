import { useEffect, useState } from "react"
import styled from "styled-components"
import pic02 from "../assets/pics/02.jpg"
import pic03 from "../assets/pics/03.jpg"
import pic04 from "../assets/pics/04.jpg"
import pic05 from "../assets/pics/05.jpg"
import pic07 from "../assets/pics/07.jpg"
import pic08 from "../assets/pics/08.jpg"
import aussen from "../assets/pics/aussen.png"

// Reihenfolge im Bento — "hero" tiles bekommen mehr Platz
const SLIDES = [
  { id: 1, pic: pic03, layout: "hero", label: "Promiwand" },
  { id: 2, pic: aussen, layout: "wide", label: "Außen" },
  { id: 3, pic: pic02, layout: "tall", label: "50 Jahre" },
  { id: 4, pic: pic04, layout: "default", label: "Tresen" },
  { id: 5, pic: pic05, layout: "default", label: "Eingang" },
  { id: 6, pic: pic07, layout: "wide", label: "Gäste" },
  { id: 7, pic: pic08, layout: "default", label: "Terrasse" },
]

const Impressions = () => {
  const [activeId, setActiveId] = useState(null)

  // ESC schließt Zoom
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

      {/* Desktop: Bento */}
      <Bento $hasActive={activeId !== null}>
        {SLIDES.map((slide) => (
          <Tile
            key={slide.id}
            $layout={slide.layout}
            $active={activeId === slide.id}
            $dimmed={activeId !== null && activeId !== slide.id}
            onClick={() => toggle(slide.id)}
            aria-label={slide.label}
          >
            <TileImg
              src={slide.pic}
              alt={slide.label}
              loading='lazy'
              $active={activeId === slide.id}
            />
            <TileNum>{String(slide.id).padStart(2, "0")}</TileNum>
            <TileLabel>{slide.label}</TileLabel>
          </Tile>
        ))}
      </Bento>

      {/* Mobile: scrollable strip */}
      <MobileStrip>
        {SLIDES.map((slide) => (
          <MobileSlide key={slide.id}>
            <img src={slide.pic} alt={slide.label} loading='lazy' />
            <MobileLabel>
              {String(slide.id).padStart(2, "0")} · {slide.label}
            </MobileLabel>
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

/* Bento — Desktop */
const Bento = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px;
    gap: 4px;
    padding: 4px;
    background: var(--grid-bg);
    transition: all 0.3s ease;
  }

  @media (min-width: 1024px) {
    grid-auto-rows: 220px;
  }
`

const Tile = styled.button`
  position: relative;
  overflow: hidden;
  background: var(--tile-bg);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    z-index 0s;
  z-index: ${(p) => (p.$active ? 5 : 1)};
  opacity: ${(p) => (p.$dimmed ? 0.35 : 1)};

  /* Layouts */
  ${(p) =>
    p.$layout === "hero" &&
    `
    grid-column: span 2;
    grid-row: span 2;
  `}
  ${(p) =>
    p.$layout === "wide" &&
    `
    grid-column: span 2;
  `}
  ${(p) =>
    p.$layout === "tall" &&
    `
    grid-row: span 2;
  `}

  /* Aktiv: nimmt 2x2 ein */
  ${(p) =>
    p.$active &&
    `
    grid-column: span 2 !important;
    grid-row: span 2 !important;
  `}

  &:hover {
    opacity: 1;
  }
`

const TileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: ${(p) =>
    p.$active
      ? "grayscale(0%) contrast(1) brightness(1)"
      : "grayscale(100%) contrast(1.05) brightness(0.85)"};
  transition: filter 0.35s ease, transform 0.5s ease;

  ${Tile}:hover & {
    filter: grayscale(0%) contrast(1) brightness(1);
    transform: scale(1.04);
  }
`

const TileNum = styled.span`
  position: absolute;
  top: 8px;
  left: 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(0, 0, 0, 0.45);
  padding: 2px 6px;
  z-index: 2;
`

const TileLabel = styled.span`
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s, transform 0.25s;
  z-index: 2;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  ${Tile}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

/* Mobile Strip */
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
  width: 80vw;
  scroll-snap-align: center;
  position: relative;
  background: var(--tile-bg);

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    display: block;
    filter: grayscale(100%) contrast(1.05) brightness(0.9);
  }
`

const MobileLabel = styled.span`
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
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
