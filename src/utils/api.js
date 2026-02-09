import axios from "axios"

const API_BASE_URL = "https://lais-backend-kmlm.onrender.com"

// Token aus localStorage holen
const getToken = () => localStorage.getItem("authToken")

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request Interceptor: Token hinzufügen
api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("authToken")
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin/login"
      }
    }
    return Promise.reject(error)
  }
)

const apiService = {
  // Störer (öffentlich)
  getStoerer: async () => {
    try {
      const response = await api.get("/api/stoerer")
      return response.data
    } catch (error) {
      console.error("Fehler beim Laden des Störers:", error)
      return { line1: "", line2: "", isActive: false }
    }
  },

  // Admin Auth
  login: async (username, password) => {
    const response = await api.post("/api/admin/login", { username, password })

    // Token in localStorage speichern
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token)
      console.log("✅ Token gespeichert in localStorage")
    }

    return response.data
  },

  logout: async () => {
    try {
      await api.post("/api/admin/logout")
    } catch (error) {
      console.error("Logout Fehler:", error)
    } finally {
      localStorage.removeItem("authToken")
    }
    return { message: "Abgemeldet" }
  },

  verifyToken: async () => {
    try {
      const token = getToken()

      if (!token) {
        console.log("❌ Kein Token in localStorage")
        return { valid: false }
      }

      const response = await api.get("/api/admin/verify")
      console.log("✅ Token valid:", response.data)
      return response.data
    } catch (error) {
      console.error("❌ Token verification failed:", error)
      localStorage.removeItem("authToken")
      return { valid: false }
    }
  },

  // Störer Management (Admin)
  updateStoerer: async (data) => {
    const response = await api.put("/api/admin/stoerer", data)
    return response.data
  },

  deleteStoerer: async () => {
    const response = await api.delete("/api/admin/stoerer")
    return response.data
  },
}

export default apiService
