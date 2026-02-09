import React from "react"
import styled from "styled-components"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </Content>
    </Overlay>
  )
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`
