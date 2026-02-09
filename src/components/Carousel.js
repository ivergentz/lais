import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Carousel = ({ slides }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyPress = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "ArrowLeft") goToPrevious()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isLightboxOpen, lightboxIndex])

  return (
    <Container>
      {/* Mobile: Horizontal Scroll mit Peek */}
      <MobileView>
        {slides.map((slide, index) => (
          <MobileCard key={index} onClick={() => openLightbox(index)}>
            <MobileImage src={slide.pic} alt={slide.title || ""} />
            <ZoomIcon>
              <Maximize2 size={20} />
            </ZoomIcon>
          </MobileCard>
        ))}
      </MobileView>

      {/* Desktop: Grid */}
      <DesktopView>
        {slides.map((slide, index) => (
          <DesktopCard key={index} onClick={() => openLightbox(index)}>
            <CardImage src={slide.pic} alt={slide.title || ""} />
            <CardOverlay>
              <ZoomButton>
                <Maximize2 size={24} />
                <span>Vergrößern</span>
              </ZoomButton>
              {slide.title && <CardTitle>{slide.title}</CardTitle>}
            </CardOverlay>
          </DesktopCard>
        ))}
      </DesktopView>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeLightbox}>
              <X size={32} />
            </CloseButton>

            <LightboxImage
              src={slides[lightboxIndex].pic}
              alt={slides[lightboxIndex].title || ""}
            />

            {slides.length > 1 && (
              <>
                <NavButton onClick={goToPrevious} $left>
                  <ChevronLeft size={48} />
                </NavButton>

                <NavButton onClick={goToNext}>
                  <ChevronRight size={48} />
                </NavButton>

                <Counter>
                  {lightboxIndex + 1} / {slides.length}
                </Counter>
              </>
            )}
          </LightboxContent>
        </Lightbox>
      )}
    </Container>
  )
}

export default Carousel

// ==================== STYLED COMPONENTS ====================

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`

// ==================== MOBILE ====================

const MobileView = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  padding-right: 0; /* Kein Right-Padding für Peek-Effekt */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileCard = styled.div`
  position: relative;
  min-width: 80vw; /* Reduziert für Peek-Effekt */
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  scroll-snap-align: start;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  &:last-child {
    margin-right: 1rem; /* Abstand am Ende */
  }

  &:active {
    transform: scale(0.98);
  }
`

const MobileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${MobileCard}:hover & {
    transform: scale(1.05);
  }
`

const ZoomIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

// ==================== DESKTOP ====================

const DesktopView = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
    max-width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 900px) {
    gap: 1.25rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1600px;
  }
`

const DesktopCard = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover > div {
    opacity: 1;
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
`

const ZoomButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  span {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`

const CardTitle = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

// ==================== LIGHTBOX ====================

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const LightboxContent = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10000;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}

    svg {
      width: 32px;
      height: 32px;
    }
  }
`

const Counter = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    bottom: 20px;
    padding: 8px 16px;
    font-size: 0.75rem;
  }
`
