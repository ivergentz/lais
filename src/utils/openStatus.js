// Lais Öffnungszeiten:
// Dienstag–Donnerstag: 16:00 – 01:00 (Folgetag)
// Freitag & Samstag:    16:00 – 03:00 (Folgetag)
// Sonntag & Montag:     Ruhetag
//
// getOpenStatus() berücksichtigt, dass die "Nacht zum Folgetag" zur Öffnungszeit
// des Vortages gehört (z.B. Mittwoch 00:30 = noch Dienstag-Schicht).

const SCHEDULE = {
  0: null, // Sonntag
  1: null, // Montag
  2: { open: 16, close: 25 }, // Dienstag bis 01:00
  3: { open: 16, close: 25 }, // Mittwoch bis 01:00
  4: { open: 16, close: 25 }, // Donnerstag bis 01:00
  5: { open: 16, close: 27 }, // Freitag bis 03:00
  6: { open: 16, close: 27 }, // Samstag bis 03:00
}

const formatTime = (h) => {
  const hh = ((h % 24) + 24) % 24
  return `${String(hh).padStart(2, "0")}:00`
}

export const getOpenStatus = (date = new Date()) => {
  const day = date.getDay()
  const hour = date.getHours() + date.getMinutes() / 60

  // 1. Läuft noch die Nachtschicht vom Vortag?
  const prevDay = (day + 6) % 7
  const prev = SCHEDULE[prevDay]
  if (prev && prev.close > 24 && hour < prev.close - 24) {
    return {
      isOpen: true,
      closesAt: formatTime(prev.close),
      opensAt: null,
      label: "Jetzt offen",
    }
  }

  // 2. Heutige Schicht
  const today = SCHEDULE[day]
  if (today) {
    if (hour >= today.open && hour < today.close) {
      return {
        isOpen: true,
        closesAt: formatTime(today.close),
        opensAt: null,
        label: "Jetzt offen",
      }
    }
    if (hour < today.open) {
      return {
        isOpen: false,
        closesAt: null,
        opensAt: formatTime(today.open),
        label: "Heute geschlossen",
      }
    }
  }

  // 3. Sonst — finde nächsten Öffnungstag
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7
    if (SCHEDULE[nextDay]) {
      const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
      return {
        isOpen: false,
        closesAt: null,
        opensAt: `${dayNames[nextDay]} ${formatTime(SCHEDULE[nextDay].open)}`,
        label: "Geschlossen",
      }
    }
  }

  return { isOpen: false, closesAt: null, opensAt: null, label: "Geschlossen" }
}
