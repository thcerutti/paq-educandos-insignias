import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const TodosEventos = () => {
  const [todosOsEventos, setTodosOsEventos] = useState([]);

  const carregarEventos = () => {
    fetch("/api/eventos")
      .then((res) => res.json())
      .then((data) => {
        setTodosOsEventos(data);
      });
  };

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <>
      {todosOsEventos.length > 0 && (
        <div>
          <h1>Todos os Eventos</h1>
          <Table striped hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Fotos</th>
              </tr>
            </thead>
            <tbody>
              {todosOsEventos.map((evento) => {
                console.log(evento);
                return (
                  <tr key={evento.id}>
                    <td>{evento.nome}</td>
                    <td>{evento.data}</td>
                    <td>{evento.descricao}</td>
                    <td><a href="#" target="_blank">Fotos</a></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
      {todosOsEventos.length === 0 && <span>Nenhum evento para listar</span>}
    </>
  );
};

export default TodosEventos;
