import { useEffect, useState } from "react"
import styled from "styled-components"
import apiService from "../utils/api"

const News = () => {
  const [displayedNews, setDisplayedNews] = useState(null)
  const [opacity, setOpacity] = useState(1)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    // Störer vom Backend holen
    const loadStoerer = async () => {
      try {
        const data = await apiService.getStoerer()
        if (data.isActive && (data.line1 || data.line2)) {
          setDisplayedNews(data)
        }
      } catch (error) {
        console.error("Error fetching störer:", error)
      }
    }

    loadStoerer()

    // Alle 30 Sekunden neu laden
    const interval = setInterval(loadStoerer, 30000)

    // Throttle für bessere Performance
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = 1000
          const scrollPosition = window.scrollY
          const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0)
          setOpacity(newOpacity)
          setOffsetY(scrollPosition * -0.2)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [])

  if (!displayedNews) {
    return <div style={{ height: "1px" }}></div>
  }

  return (
    <div>
      <Wrapper
        style={{
          opacity,
          transform: `translateY(${offsetY}px) rotate(15deg)`,
        }}
      >
        {displayedNews.line1 && <h1>{displayedNews.line1}</h1>}
        {displayedNews.line2 && <p>{displayedNews.line2}</p>}
      </Wrapper>
    </div>
  )
}

export default News

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 15vh;
  right: 10vw;
  background: red;
  color: white;
  font-weight: 200;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 150px;
  opacity: 0.9;
  transition: opacity 0.5s ease;
  will-change: transform, opacity;

  h1 {
    margin: 0;
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    margin: 0.5rem 0 0 0;
    font-size: 1.3rem;
    text-align: center;
  }
`
