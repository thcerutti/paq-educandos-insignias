import { Navbar, Container, Nav, Image } from "react-bootstrap";

const PaqNavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://prototipandoaquebrada.org/resources/img/logo.png"
              alt="logo PAQ"
              className={'logo-paq-navbar'}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Educandos</Nav.Link>
            <Nav.Link href="#features">Eventos</Nav.Link>
            <Nav.Link href="#pricing">Insignias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default PaqNavbar;
