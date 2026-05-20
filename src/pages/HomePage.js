import styled from "styled-components"
import Darts from "../components/Darts"
import Footer from "../components/Footer"
import Frontpage from "../components/Frontpage"
import Impressions from "../components/Impressions"
import Location from "../components/Location"
import Navigation from "../components/Navigation"
import News from "../components/News"
import Open from "../components/Open"
import Other from "../components/Other"
import Reviews from "../components/Reviews"
import ScrollUp from "../components/ScrollUp"

const HomePage = () => {
  return (
    <Page>
      <Navigation />
      {/* Full-bleed: Hero + Marquee */}
      <Frontpage />
      <News />
      {/* Content container — alles dazwischen */}
      <Content>
        <InfoSection>
          <Location />
          <Open />
        </InfoSection>
    <Impressions />
        <Other />
        <Reviews />
        <Darts />
      </Content>
      {/* Full-bleed: Footer */}
      <Footer />
      <ScrollUp />
    </Page>
  )
}

export default HomePage

const Page = styled.div`
  background: var(--bg);
  color: var(--fg);
  min-height: 100vh;
`

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  border-left: 1px solid var(--line);
  border-right: 1px solid var(--line);

  @media (max-width: 1440px) {
    border-left: none;
    border-right: none;
  }
`

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--line);
  gap: 1px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  > * {
    background: var(--bg);
  }
`
