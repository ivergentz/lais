import { supabase } from "./supabase"

const apiService = {
  // Störer (öffentlich)
  getStoerer: async () => {
    try {
      const { data, error } = await supabase
        .from("stoerer")
        .select("*")
        .single()

      if (error) throw error

      return {
        line1: data.line1 || "",
        line2: data.line2 || "",
        isActive: data.is_active || false,
      }
    } catch (error) {
      console.error("Fehler beim Laden des Störers:", error)
      return { line1: "", line2: "", isActive: false }
    }
  },

  // Admin Auth
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return data
  },

  logout: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error("Logout Fehler:", error)
    return { message: "Abgemeldet" }
  },

  verifyToken: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      return { valid: !!session }
    } catch (error) {
      console.error("Session check failed:", error)
      return { valid: false }
    }
  },

  // Störer Management (Admin)
  updateStoerer: async ({ line1, line2, isActive }) => {
    // Hole die ID des existierenden Störers
    const { data: existing } = await supabase
      .from("stoerer")
      .select("id")
      .single()

    if (existing) {
      const { data, error } = await supabase
        .from("stoerer")
        .update({
          line1,
          line2,
          is_active: isActive,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id)
        .select()
        .single()

      if (error) throw error
      return data
    }

    // Falls kein Störer existiert, neuen anlegen
    const { data, error } = await supabase
      .from("stoerer")
      .insert({
        line1,
        line2,
        is_active: isActive,
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  deleteStoerer: async () => {
    // Störer zurücksetzen statt löschen (Zeile bleibt erhalten)
    const { data: existing } = await supabase
      .from("stoerer")
      .select("id")
      .single()

    if (!existing) return { message: "Kein Störer vorhanden" }

    const { error } = await supabase
      .from("stoerer")
      .update({
        line1: "",
        line2: "",
        is_active: false,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existing.id)

    if (error) throw error
    return { message: "Störer gelöscht" }
  },
}

export default apiService
