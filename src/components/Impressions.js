import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import pic1 from "../assets/pics/02.jpg"
import pic2 from "../assets/pics/03.jpg"
import pic3 from "../assets/pics/04.jpg"
import pic4 from "../assets/pics/05.jpg"
import pic6 from "../assets/pics/07.jpg"
import pic7 from "../assets/pics/08.jpg"
import aussen from "../assets/pics/aussen.png"

const slides = [
  { id: 1, pic: pic2 },
  { id: 2, pic: aussen },
  { id: 3, pic: pic3 },
  { id: 4, pic: pic4 },
  { id: 5, pic: pic6 },
  { id: 6, pic: pic7 },
  { id: 7, pic: pic1 },
]

const Impressions = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goNext = () =>
    setLightboxIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  const goPrev = () =>
    setLightboxIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightboxOpen, lightboxIndex])

  return (
    <Section id='pictures'>
      <Inner>
        <Title>BILDER</Title>

        {/* Desktop: Masonry */}
        <Masonry>
          {slides.map((slide, i) => (
            <MasonryItem key={slide.id} onClick={() => openLightbox(i)}>
              <img src={slide.pic} alt='' />
            </MasonryItem>
          ))}
        </Masonry>

        {/* Mobile: Carousel */}
        <CarouselTrack>
          {slides.map((slide, i) => (
            <CarouselSlide key={slide.id} onClick={() => openLightbox(i)}>
              <img src={slide.pic} alt='' />
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </Inner>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={closeLightbox}>
              <X size={28} />
            </CloseBtn>

            <LightboxImg
              src={slides[lightboxIndex].pic}
              alt=''
            />

            {slides.length > 1 && (
              <>
                <NavBtn $left onClick={goPrev}>
                  <ChevronLeft size={40} />
                </NavBtn>
                <NavBtn onClick={goNext}>
                  <ChevronRight size={40} />
                </NavBtn>
                <Counter>
                  {lightboxIndex + 1} / {slides.length}
                </Counter>
              </>
            )}
          </LightboxContent>
        </Lightbox>
      )}
    </Section>
  )
}

export default Impressions

const Section = styled.section`
  background: #000;
  color: #fff;
  padding: 5rem 0;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

/* Desktop Masonry */
const Masonry = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    column-count: 3;
    column-gap: 4px;
  }
`

const MasonryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 4px;
  cursor: pointer;
  overflow: hidden;
  border: 4px solid #fff;

  img {
    width: 100%;
    display: block;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

/* Mobile Carousel */
const CarouselTrack = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const CarouselSlide = styled.div`
  flex-shrink: 0;
  width: 85vw;
  scroll-snap-align: center;
  cursor: pointer;
  border: 4px solid #fff;

  img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
`

/* Lightbox */
const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
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

const LightboxImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  background: #fff;
  color: #000;
  border: 4px solid #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10001;

  &:hover {
    background: #000;
    color: #fff;
  }
`

const NavBtn = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.$left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: #fff;
  color: #000;
  border: 4px solid #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`

const Counter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  border: 4px solid #fff;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
`
