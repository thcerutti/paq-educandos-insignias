import { useEffect, useState } from "react";
import CardEducando from "./CardEducando";
import Table from "react-bootstrap/Table";

const TodosEducandos = () => {
  const statusOriginal = 'Nenhum educando para listar'

  const [todosOsEducandos, setTodosOsEducandos] = useState([]);
  const [status, setStatus] = useState(statusOriginal)
  const statusCarregando = 'Carregando...'

  useEffect(() => {
    carregarEducandos()
  }, []);

  const carregarEducandos = () => {
    setStatus(statusCarregando)
    fetch("/api/educandos")
      .then((res) => res.json())
      .then((data) => {
        setTodosOsEducandos(data);
      })
      .then(() => setStatus(statusOriginal));
    };

  return (
    <>
      <h1>Todos os Educandos</h1>
      {todosOsEducandos.length > 0 && (
        <>
          <Table striped hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Unidade</th>
                <th>Etapa</th>
                <th>Trilha</th>
              </tr>
            </thead>
            <tbody>
              {todosOsEducandos.map((educando) => (
                <tr key={educando.id}>
                  <td>
                    <a href={`/educando?id=${educando.id}`} target="_blank">
                      {educando.nomeCompleto}
                    </a>
                  </td>
                  <td>
                    <a href="#">{educando.unidade}</a>
                  </td>
                  <td>
                    <a href="#">{educando.etapa}</a>
                  </td>
                  <td>
                    <a href="#">{educando.trilha}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      {todosOsEducandos.length === 0 && <span>{status}</span>}
    </>
  );
};

export default TodosEducandos;
