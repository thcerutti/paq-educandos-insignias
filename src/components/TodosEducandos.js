import { useEffect, useState } from "react";
import CardEducando from "./CardEducando";

const TodosEducandos = () => {
  const [todosOsEducandos, setTodosOsEducandos] = useState([]);

  useEffect(() => {
    fetch("/api/educandos")
      .then((res) => res.json())
      .then((data) => {
        setTodosOsEducandos(data);
      });
  }, []);

  return (
    <>
      <h1>Todos os Educandos</h1>
      {todosOsEducandos.length > 0 ? (
        todosOsEducandos.map((educando) => (
          <CardEducando key={educando.id} educando={educando} />
        ))
      ) : (
        <span>Nenhum educando para listar</span>
      )}
    </>
  );
};

export default TodosEducandos;
