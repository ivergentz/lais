import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import apiService from "../utils/api"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 2rem;
`

const LoginBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c2c2c;
  text-transform: uppercase;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #666;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
`

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #2c2c2c;
  }
`

const Button = styled.button`
  background: #2c2c2c;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: #666;
  }
  &:disabled {
    background: #8b8b8b;
    cursor: not-allowed;
  }
`

const Message = styled.div`
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background: #f8d7da;
  color: #721c24;
`

const BackLink = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await apiService.login(email, password)
      navigate("/admin/dashboard")
    } catch (err) {
      setError(err.message || "Login fehlgeschlagen")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>Admin Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>E-Mail</Label>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='admin@example.com'
              autoComplete='email'
            />
          </InputGroup>

          <InputGroup>
            <Label>Passwort</Label>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='••••••••'
              autoComplete='current-password'
            />
          </InputGroup>

          {error && <Message>{error}</Message>}

          <Button type='submit' disabled={loading}>
            {loading ? "Anmeldung läuft..." : "Anmelden"}
          </Button>

          <BackLink type='button' onClick={() => navigate("/")}>
            ← Zurück zur Startseite
          </BackLink>
        </Form>
      </LoginBox>
    </Container>
  )
}

export default AdminLogin
