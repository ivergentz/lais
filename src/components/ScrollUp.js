import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import styled from "styled-components"

const ScrollUp = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <Btn onClick={scrollToTop} aria-label='Nach oben scrollen'>
      <ArrowUp size={18} />
    </Btn>
  )
}

export default ScrollUp

const Btn = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 44px;
  height: 44px;
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
  cursor: pointer;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: var(--fg);
    border-color: var(--fg);
    color: var(--bg);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    right: 2rem;
    bottom: 2rem;
    width: 48px;
    height: 48px;
  }
`
