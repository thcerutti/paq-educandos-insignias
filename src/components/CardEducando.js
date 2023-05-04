import Card from "react-bootstrap/Card";

const CardEducando = ({ educando }) => {
  return (
    <>
      <Card
        style={{ width: "18rem", margin: "10px" }}
        className="card-educando"
        bg="light"
      >
        <Card.Header>
          <Card.Title>{educando.nomeCompleto}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Unidade:</strong> {educando.unidade}
          </Card.Text>
          <Card.Text>
            <strong>Etapa:</strong> {educando.etapa} ({educando.trilha})
          </Card.Text>
          <Card.Link href="#">Ver perfil completo</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardEducando;
