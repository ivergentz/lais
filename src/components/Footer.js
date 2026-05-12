import { Instagram } from "lucide-react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG</p>
          <p>
            An der Reitbahn 1
            <br />
            22763 Hamburg-Altona
          </p>
          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Jennifer Lais
          </p>
          <p>
            <strong>Kontakt:</strong>
            <br />
            Telefon: 040-397766
          </p>
          <p>
            <strong>Haftungsausschluss</strong>
          </p>
          <p>
            <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten
            wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG
            für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die
            auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
            diese Inhalte umgehend entfernen.
          </p>
          <p>
            <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu
            externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine
            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>
          <p>
            <strong>Datenschutz:</strong> Die Nutzung unserer Webseite ist in
            der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
            unseren Seiten personenbezogene Daten (beispielsweise Name,
            Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit
            möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
            ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z.B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>
        </div>
      </Modal>

      <FooterBar>
        <Bottom>
          <Left>
            <Link as='button' onClick={() => setIsModalOpen(true)}>
              Impressum
            </Link>
            <Sep>·</Sep>
            <span>© 1974–{new Date().getFullYear()} Lais Ottensen</span>
          </Left>

          <Right>
            <IgLink
              href='https://www.instagram.com/lais_ottensen/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <Instagram size={16} />
              <span>@lais_ottensen</span>
            </IgLink>
            <AdminLink href='/admin/login'>Admin</AdminLink>
          </Right>
        </Bottom>

        <BigSig>
          Lais<Dot>.</Dot>
        </BigSig>
      </FooterBar>
    </>
  )
}

export default Footer

const FooterBar = styled.footer`
  background: var(--bg);
  color: var(--fg);
  border-top: 1px solid var(--line);
  padding: 1.25rem 1.5rem 0;

  @media (min-width: 768px) {
    padding: 1.5rem 2rem 0;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Left = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`

const Right = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const Sep = styled.span`
  color: var(--muted);
  opacity: 0.5;
`

const Link = styled.a`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  color: var(--fg);
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-bottom-color: var(--accent);
  }
`

const IgLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--fg);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
`

const AdminLink = styled.a`
  color: var(--muted);
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 0.15em;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const BigSig = styled.div`
  font-family: "Fraunces", serif;
  font-size: clamp(5rem, 22vw, 18rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.06em;
  color: var(--fg);
  margin-top: 1.25rem;
  margin-bottom: -0.1em;
  overflow: hidden;
  user-select: none;
`

const Dot = styled.span`
  color: var(--accent);
`
