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
import ScrollUp from "../components/ScrollUp"

const HomePage = () => {
  return (
    <>
      <Navigation />
      <News />
      <Frontpage />
      <InfoSection>
        <Location />
        <Open />
      </InfoSection>
      <Impressions />
      <Other />
      <Darts />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default HomePage

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1280px;
    margin: 0 auto;
  }
`
