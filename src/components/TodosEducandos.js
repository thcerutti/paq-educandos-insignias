import { useEffect, useState } from "react";
import CardEducando from "./CardEducando";

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
      {todosOsEducandos.length > 0 ? (
        todosOsEducandos.map((educando) => (
          <CardEducando key={educando.id} educando={educando} />
        ))
      ) : (
        <span>{status}</span>
      )}
    </>
  );
};

export default TodosEducandos;
