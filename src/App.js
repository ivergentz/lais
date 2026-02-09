import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import AdminLogin from "./pages/AdminLogin"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        {/* Öffentliche Routes */}
        <Route path='/' element={<HomePage />} />
        {/* Neue Störer-Admin-System Routes */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
