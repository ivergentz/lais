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
      <Open />
      <Darts />
      <Other />
      <Impressions />
      <Location />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default HomePage
