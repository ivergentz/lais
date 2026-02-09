import styled from "styled-components"
import pic1 from "../assets/pics/02.jpg"
import pic2 from "../assets/pics/03.jpg"
import pic3 from "../assets/pics/04.jpg"
import pic4 from "../assets/pics/05.jpg"
import pic6 from "../assets/pics/07.jpg"
import pic7 from "../assets/pics/08.jpg"
import aussen from "../assets/pics/aussen.png"
import Carousel from "./Carousel"

const slides = [
  {
    id: 1,
    pic: pic2,
  },
  {
    id: 3,
    pic: aussen,
  },

  {
    id: 4,
    pic: pic3,
  },
  {
    id: 5,
    pic: pic4,
  },
  {
    id: 7,
    pic: pic6,
  },
  {
    id: 8,
    pic: pic7,
  },
  {
    id: 2,
    pic: pic1,
  },
]

const Impressions = () => {
  return (
    <Wrapper id='pictures'>
      <h3>Bilder</h3>

      <Carousel slides={slides} />
    </Wrapper>
  )
}

export default Impressions

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(240, 165, 0, 0.03);

  @media only screen and (min-width: 768px) {
    max-width: 80vw;
  }

  h3 {
    font-weight: 200;
    font-size: 48px;
    color: black;
    padding-left: 5vw;
    padding-bottom: 5vh;
    text-transform: uppercase;
  }
`
