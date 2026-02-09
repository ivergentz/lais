import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import apiService from "../utils/api"

const Container = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
`
const Header = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #2c2c2c;
  text-transform: uppercase;
`

const LogoutButton = styled.button`
  background: #666;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    background: #8b8b8b;
  }
`

const Card = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const CardTitle = styled.h2`
  font-size: 1.5rem;
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

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;

  ${(props) =>
    props.$variant === "danger"
      ? `
    background: #f44336;
    color: white;
    &:hover { background: #c62828; }
  `
      : props.$variant === "success"
      ? `
    background: #4caf50;
    color: white;
    &:hover { background: #388e3c; }
  `
      : `
    background: #666;
    color: white;
    &:hover { background: #8b8b8b; }
  `}

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`

const Message = styled.div`
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background: ${(props) => (props.$type === "success" ? "#d4edda" : "#f8d7da")};
  color: ${(props) => (props.$type === "success" ? "#155724" : "#721c24")};
`

const PreviewSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #ddd;
`

const PreviewLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #666;
  text-transform: uppercase;
`

const PreviewStoerer = styled.div`
  background: #2c2c2c;
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  max-width: 300px;
`

const StoererLine = styled.div`
  font-size: ${(props) => (props.$large ? "1.125rem" : "0.875rem")};
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
  &:first-child {
    margin-bottom: 0.5rem;
  }
`

const AdminDashboard = () => {
  const [line1, setLine1] = useState("")
  const [line2, setLine2] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
    loadStoerer()
  }, [])

  const checkAuth = async () => {
    const result = await apiService.verifyToken()
    if (!result.valid) {
      navigate("/admin/login")
    }
  }

  const loadStoerer = async () => {
    try {
      const data = await apiService.getStoerer()
      setLine1(data.line1 || "")
      setLine2(data.line2 || "")
      setIsActive(data.isActive || false)
    } catch (error) {
      console.error("Fehler beim Laden:", error)
    }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      await apiService.updateStoerer({ line1, line2, isActive })
      setMessage({ type: "success", text: "Störer erfolgreich gespeichert!" })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({ type: "error", text: "Fehler beim Speichern" })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm("Störer wirklich löschen?")) return

    setLoading(true)
    setMessage(null)

    try {
      await apiService.deleteStoerer()
      setLine1("")
      setLine2("")
      setIsActive(false)
      setMessage({ type: "success", text: "Störer gelöscht!" })
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      setMessage({ type: "error", text: "Fehler beim Löschen" })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await apiService.logout()
    } catch (error) {
      console.error("Logout Fehler:", error)
    } finally {
      navigate("/admin/login")
    }
  }

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <LogoutButton onClick={handleLogout}>Abmelden</LogoutButton>
      </Header>

      <Card>
        <CardTitle>Störer bearbeiten</CardTitle>

        {message && <Message $type={message.type}>{message.text}</Message>}

        <Form onSubmit={handleSave}>
          <InputGroup>
            <Label>Zeile 1 (Haupttext)</Label>
            <Input
              type='text'
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              placeholder='z.B. Heute geschlossen'
              maxLength={60}
            />
          </InputGroup>

          <InputGroup>
            <Label>Zeile 2 (Untertitel)</Label>
            <Input
              type='text'
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              placeholder='z.B. Wegen Betriebsfeier'
              maxLength={60}
            />
          </InputGroup>

          <Checkbox>
            <input
              type='checkbox'
              id='isActive'
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
            />
            <Label htmlFor='isActive'>Störer aktiv anzeigen</Label>
          </Checkbox>

          <ButtonGroup>
            <Button
              type='button'
              $variant='danger'
              onClick={handleDelete}
              disabled={loading}
            >
              Löschen
            </Button>
            <Button type='submit' $variant='success' disabled={loading}>
              {loading ? "Speichert..." : "Speichern"}
            </Button>
          </ButtonGroup>
        </Form>

        {isActive && (line1 || line2) && (
          <PreviewSection>
            <PreviewLabel>Vorschau:</PreviewLabel>
            <PreviewStoerer>
              {line1 && <StoererLine $large>{line1}</StoererLine>}
              {line2 && <StoererLine>{line2}</StoererLine>}
            </PreviewStoerer>
          </PreviewSection>
        )}
      </Card>
    </Container>
  )
}

export default AdminDashboard
