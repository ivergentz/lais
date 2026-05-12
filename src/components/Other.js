import styled from "styled-components"

const ITEMS = [
  {
    num: "01",
    title: "Raucher\u00ADkneipe",
    desc: "Zutritt erst ab 18 Jahren. Echte Kneipenluft, kein Kompromiss.",
  },
  {
    num: "02",
    title: "Bier vom Fass",
    desc: "JEVER und Augustiner — frisch gezapft, wie es sich gehört.",
  },
  {
    num: "03",
    title: "Mexikaner",
    desc: "Hausgemacht und bekannt im Viertel. Auf eigene Gefahr.",
  },
]

const Other = () => {
  return (
    <Section id='other'>
      <Head>
        <Num>// 04</Num>
        <Eyebrow>Außerdem</Eyebrow>
        <Count>{ITEMS.length} Facts</Count>
      </Head>

      <Title>Was du wissen solltest.</Title>

      <Grid>
        {ITEMS.map((item) => (
          <Card key={item.num}>
            <CardNum>/ {item.num}</CardNum>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.desc}</CardText>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default Other

const Section = styled.section`
  padding: 3rem 1.5rem;
  background: var(--bg);
  color: var(--fg);
  border-bottom: 1px solid var(--line);

  @media (min-width: 768px) {
    padding: 4rem 2rem;
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
  margin: 0 0 2rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid var(--line);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--line);
  background: var(--bg);
  color: var(--fg);
  transition: background 0.2s, color 0.2s;
  cursor: default;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    padding: 2rem 1.75rem;
    border-bottom: none;
    border-right: 1px solid var(--line);

    &:last-child {
      border-right: none;
    }
  }

  &:hover {
    background: var(--accent);
  }

  &:hover h3,
  &:hover p,
  &:hover div {
    color: #fff;
  }
`

const CardNum = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--muted);
  margin-bottom: 1rem;
`

const CardTitle = styled.h3`
  font-family: "Fraunces", serif;
  font-size: 1.875rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.75rem;
  color: var(--fg);

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

const CardText = styled.p`
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--muted);
  letter-spacing: 0.02em;
`
