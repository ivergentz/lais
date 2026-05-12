import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { getOpenStatus } from "../utils/openStatus"

const ROWS = [
  { day: "Di — Do", hours: "16:00 – 01:00", key: "weekday" },
  { day: "Fr & Sa", hours: "16:00 – 03:00", key: "weekend" },
  { day: "So & Mo", hours: "Ruhetag", closed: true, key: "rest" },
]

// Welcher Schedule-Eintrag ist gerade "aktiv"
const getActiveKey = (date) => {
  const d = date.getDay()
  if (d === 0 || d === 1) return "rest"
  if (d === 5 || d === 6) return "weekend"
  return "weekday"
}

const Open = () => {
  const [status, setStatus] = useState(getOpenStatus())
  const [activeKey, setActiveKey] = useState(getActiveKey(new Date()))

  useEffect(() => {
    const id = setInterval(() => {
      setStatus(getOpenStatus())
      setActiveKey(getActiveKey(new Date()))
    }, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <Wrapper id='open'>
      <Head>
        <Num>// 02</Num>
        <Eyebrow>Öffnungszeiten</Eyebrow>
      </Head>

      <Title>Wann offen.</Title>

      <Schedule>
        {ROWS.map((row) => (
          <Row key={row.key} $active={activeKey === row.key && status.isOpen}>
            <Day>{row.day}</Day>
            <Hours $closed={row.closed}>
              {row.closed ? "// Ruhetag" : row.hours}
            </Hours>
          </Row>
        ))}
      </Schedule>

      <StatusLine $open={status.isOpen}>
        <Dot $open={status.isOpen} />
        {status.isOpen
          ? `Jetzt offen — Schließt ${status.closesAt}`
          : status.opensAt
          ? `Geschlossen — Wieder ${status.opensAt}`
          : "Geschlossen"}
      </StatusLine>
    </Wrapper>
  )
}

export default Open

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
  margin: 0 0 1.5rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Schedule = styled.div`
  margin-bottom: 1.25rem;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.875rem 0;
  border-bottom: 1px dashed var(--line);
  position: relative;

  ${(p) =>
    p.$active &&
    `
    &::before {
      content: '';
      position: absolute;
      left: -1rem;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--accent);
    }
  `}

  &:last-child {
    border-bottom: none;
  }
`

const Day = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
`

const Hours = styled.span`
  font-family: "Fraunces", serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${(p) => (p.$closed ? "var(--accent)" : "var(--fg)")};
  font-style: ${(p) => (p.$closed ? "italic" : "normal")};
  font-weight: ${(p) => (p.$closed ? 400 : 700)};

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`

const StatusLine = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg);
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${(p) => (p.$open ? "var(--accent)" : "var(--muted)")};
  display: inline-block;
  animation: ${(p) => (p.$open ? blink : "none")} 1.6s ease-in-out infinite;
`
