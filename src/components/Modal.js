import { X } from "lucide-react"
import styled from "styled-components"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label='Schließen'>
          <X size={20} />
        </CloseButton>
        <Inner>{children}</Inner>
      </Content>
    </Overlay>
  )
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`

const Content = styled.div`
  background: var(--bg);
  color: var(--fg);
  border: 1px solid var(--line);
  width: 100%;
  max-width: 720px;
  max-height: 85vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Inner = styled.div`
  padding: 2.5rem 1.75rem 2rem;
  overflow-y: auto;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  line-height: 1.7;
  color: var(--fg);

  h1 {
    font-family: "Fraunces", serif;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.875rem;
  }

  strong {
    color: var(--accent);
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  @media (min-width: 768px) {
    padding: 3rem 2.5rem 2.5rem;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--bg);
  border: 1px solid var(--line);
  color: var(--fg);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--fg);
    color: var(--bg);
  }
`
