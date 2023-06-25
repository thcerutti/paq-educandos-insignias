import { Navbar, Container, Nav, Image } from "react-bootstrap";

const PaqNavbar = ({ children }) => {
  return (
    <>
      <Container>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src="https://prototipandoaquebrada.org/resources/img/logo.png"
                alt="logo PAQ"
                className={"logo-paq-navbar"}
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/educandos">Educandos</Nav.Link>
              <Nav.Link href="/eventos">Eventos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {children}
      </Container>
    </>
  );
};

export default PaqNavbar;
