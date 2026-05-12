import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import apiService from "../utils/api"

// Falls kein Störer aktiv ist, läuft dies durch:
const DEFAULT_ITEMS = [
  "Raucherkneipe",
  "Bier vom Fass",
  "Selbstgemachter Mexikaner",
  "E-Darts",
  "Seit 1974",
]

const News = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await apiService.getStoerer()
        if (data.isActive && (data.line1 || data.line2)) {
          const parts = [data.line1, data.line2].filter(Boolean)
          // Doppeln, damit ausreichend Inhalt zum Scrollen da ist
          setItems([...parts, ...parts, ...parts, ...parts])
        } else {
          setItems(DEFAULT_ITEMS)
        }
      } catch (err) {
        console.error("Störer-Fetch fehlgeschlagen:", err)
        setItems(DEFAULT_ITEMS)
      }
    }
    load()
    const id = setInterval(load, 30000)
    return () => clearInterval(id)
  }, [])

  // Marquee braucht doppelten Inhalt für nahtlosen Loop
  const loop = [...items, ...items]

  return (
    <Strip>
      <Track>
        {loop.map((text, i) => (
          <Item key={i}>
            <Star>★</Star>
            <span>{text}</span>
          </Item>
        ))}
      </Track>
    </Strip>
  )
}

export default News

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

const Strip = styled.div`
  background: var(--accent);
  color: #fff;
  padding: 0.625rem 0;
  overflow: hidden;
  white-space: nowrap;
  border-bottom: 1px solid var(--line);
`

const Track = styled.div`
  display: inline-flex;
  animation: ${scroll} 32s linear infinite;
  gap: 2.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 13px;
    gap: 3rem;
    animation-duration: 28s;
  }
`

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
`

const Star = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
`
