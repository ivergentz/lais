import React, { useEffect, useState } from "react"
import { animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import up from "../assets/pics/icons8-oben-100.png"

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll back to top function
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 })
  }

  return (
    <div>
      {showScrollButton && (
        <Button onClick={scrollToTop}>
          <img src={up} alt='' />
        </Button>
      )}
    </div>
  )
}

export default App

const Button = styled.button`
  position: fixed;
  right: 5vw;
  bottom: 5vh;
  border: none;
  background: transparent;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  z-index: 202;

  img {
    height: 30px;
    width: 30px;
    opacity: 1;
    background: black;
    border-radius: 25px;
  }
`
