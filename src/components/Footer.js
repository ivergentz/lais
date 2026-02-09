import { useEffect, useState } from "react"
import styled from "styled-components"
import insta from "../assets/pics/insta.png"
import Modal from "./Modal"

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Toggle the body's class to prevent scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 DDG</p>
          <p>
            <br />
            <br /> An der Reitbahn 1
            <br />
            22763 Altona <br />
          </p>
          <p>
            <strong>Vertreten durch: </strong>
            <br />
            Jennifer Lais
            <br />
          </p>
          <p>
            <strong>Kontakt:</strong> <br />
            Telefon: 040-397766
            <br />
          </p>
          <p>
            <strong>Haftungsausschluss: </strong>
            <br />
            <br />
            <strong>Haftung für Inhalte</strong>
            <br />
            <br />
          </p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
          <br />
          <br />
          <strong>Haftung für Links</strong>
          <br />
          <br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <br />
          <br />
          <strong>Datenschutz</strong>
          <br />
          <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten beispielsweise Name, Anschrift oder
          eMail-Adressen erhoben werden, erfolgt dies, soweit möglich, stets auf
          freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet z.B. bei
          der Kommunikation per E-Mail Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
          ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.
          <br />
          <br />
          <br />
          <br />
          <br />
          Website Impressum von impressum-generator.de
        </div>
      </Modal>
      <NavWrapper>
        <ul>
          <li>
            <p onClick={openModal}>Impressum</p>
          </li>
          <li>
            <a
              href='https://www.instagram.com/lais_ottensen/'
              target='_blank'
              rel='noreferrer'
            >
              <Instagram src={insta} alt='Logo Instagram' />{" "}
            </a>
          </li>
        </ul>
      </NavWrapper>
      <Icon>
        <p>
          Icons by <IconLink href='https://wwww.icons8.de'>icons8.de</IconLink>
        </p>
        <Login href='http://www.lais-ottensen.de/admin/login' rel='noreferrer'>
          Login
        </Login>
      </Icon>
    </>
  )
}

export default Footer

const NavWrapper = styled.div`
  color: white;
  height: 10vh;
  width: 100vw;
  margin-top: 5vh;
  background: black;
  display: flex;

  p {
    color: white;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  li {
    list-style-type: none;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

const Instagram = styled.img`
  width: 50px;
  height: 50px;
  z-index: 11;
  background: white;
  border-radius: 15px;
`

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
  font-weight: 200;
  font-size: 12px;
  padding: 0 3vw;

  @media (min-width: 768px) {
    width: 100vw;
    background: black;
    align-items: center;
    justify-content: center;
  }
`

const IconLink = styled.a`
  color: white;
  text-decoration: none;
`

const Login = styled.a`
  color: #5f6061;
  text-decoration: none;
  padding-left: 4rem;
`
