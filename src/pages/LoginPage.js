import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === "1" && password === "1") {
      localStorage.setItem("isLoggedIn", "true")
      navigate("/admin")
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <Form>
          <Input
            type='text'
            placeholder='Benutzername'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
          />
          <Input
            type='password'
            placeholder='Passwort'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </Form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormWrapper>
    </Container>
  )
}

export default LoginPage

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
`

const FormWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 40px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #333;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #1e3c72;
  }
`

const LoginButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #1e3c72;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2a5298;
  }
`

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: red;
  font-size: 14px;
`
