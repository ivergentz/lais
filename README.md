# Lais Ottensen — Redesign Drop-in

Raw Editorial / Neo-Brutalist Redesign. Drop-in für dein bestehendes
React-Repo `lais-main`. Alle Files unten ersetzen die jeweils gleich
benannten in deinem `src/`-Tree.

## Inhalt des ZIPs

```
src/
├── App.js                       # ← ersetzen (wraps in ThemeProvider)
├── GlobalStyle.js               # ← ersetzen (CSS-Variablen, Dark Mode)
├── theme.js                     # ← NEU
├── components/
│   ├── Navigation.js            # ← ersetzen (Top-Bar, Live-Status, Theme-Toggle)
│   ├── Frontpage.js             # ← ersetzen (Hero "Lais.")
│   ├── News.js                  # ← ersetzen (Marquee, liest Störer aus Supabase)
│   ├── Impressions.js           # ← ersetzen (Bento + Click-Zoom-in-Grid)
│   ├── Location.js              # ← ersetzen (Telefon nur hinter Button)
│   ├── Open.js                  # ← ersetzen (Live-Status, aktive Zeile markiert)
│   ├── Other.js                 # ← ersetzen
│   ├── Reviews.js               # ← NEU (Google-Bewertungen Link)
│   ├── Darts.js                 # ← ersetzen (Montag entfernt)
│   ├── Footer.js                # ← ersetzen
│   ├── Modal.js                 # ← ersetzen (themed)
│   └── ScrollUp.js              # ← ersetzen
├── pages/
│   └── HomePage.js              # ← ersetzen (neue Reihenfolge: Bilder oben)
└── utils/
    └── openStatus.js            # ← NEU (Live-Status-Logik)

public/
└── index.html                   # ← ersetzen (Fonts: Fraunces + JetBrains Mono)
```

## Was du nichts machen musst

- `Supabase` / Admin-Dashboard funktioniert weiter wie bisher — der
  Störer-Inhalt aus dem Dashboard wird jetzt in die rote Laufschrift
  übersetzt (line1 + line2). Wenn Störer inaktiv ist, läuft der
  Default-Text durch ("Raucherkneipe · Bier vom Fass · …").
- Routen (`/admin/login`, `/admin/dashboard`) bleiben unverändert.
- Alle Asset-Pfade auf `../assets/pics/*` wie bisher.

## Was du anpassen kannst

### Google-Bewertungen anpassen
In `src/components/Reviews.js` ganz oben — Werte ändern, wenn Rating sich nennenswert verschiebt:
```js
const REVIEWS = {
  rating: 4.5,
  count: 100,  // "100+" wird angezeigt
  url: "https://maps.app.goo.gl/4ffgCFbthp6cPgUGA",
}
```

> **Hinweis zur Automatisierung**: Eine echte API-Anbindung an Google Places
> ist möglich (kostenfrei bis 200$/Monat Quota), braucht aber eine
> Supabase Edge Function als Cache, weil der API-Key nicht client-side
> liegen darf. Aufwand ca. 2h. Alternativ ließe sich das Rating wie der
> Störer ins Admin-Dashboard packen — Aufwand ca. 45 Min. Sag Bescheid,
> wenn du das nachrüsten willst.

### Öffnungszeiten ändern
In `src/utils/openStatus.js`:
```js
const SCHEDULE = {
  0: null,                      // Sonntag — Ruhetag
  1: null,                      // Montag — Ruhetag
  2: { open: 16, close: 25 },   // Dienstag bis 01:00 (Folgetag)
  3: { open: 16, close: 25 },   // Mittwoch
  4: { open: 16, close: 25 },   // Donnerstag
  5: { open: 16, close: 27 },   // Freitag bis 03:00
  6: { open: 16, close: 27 },   // Samstag bis 03:00
}
```
`close > 24` heißt: die Schicht reicht in den Folgetag rein. Zusätzlich
musst du die angezeigten Zeiten in `src/components/Open.js` (Konstante
`ROWS`) updaten, falls du z.B. die Wochenende-Zeiten änderst.

### Farbe vom Akzent (Rot)
In `src/GlobalStyle.js` — `--accent`. Default:
- Light: `#e63946`
- Dark:  `#ff3b3b`

## Dependencies — schon installiert ✓

`lucide-react` und `styled-components` sind bereits in deinem
`package.json`. Keine neuen Installationen nötig.

## Was geblieben ist

- Carousel.js, DesktopMenu.js, MobileMenu.js: nicht mehr verwendet,
  aber bewusst nicht gelöscht — kannst du selber wegräumen wenn du
  willst.
- assets/pics/ Bilder: alle erhalten, gleiche Pfade.

## Funktional getestet — was du noch prüfen solltest

1. Marquee zeigt Störer wenn aktiv (Dashboard testen)
2. Live-Status: heute Abend > 16:00 sollte "Jetzt offen" zeigen
3. Dark-Mode-Toggle persistiert über Reload (localStorage)
4. Galerie: Klick auf Bild zoomt es im Raster auf 2x2
5. Logo "Lais." oben links scrollt nach oben

Falls was klemmt — sag Bescheid, ich passe an.
