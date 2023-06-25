const Evento = ({ nome, data, descricao }) => {
  return (
    <>
      <h1>Eventos</h1>
      <p>Nome: {nome}</p>
      <p>Data: {data}</p>
      <p>Descrição: {descricao}</p>
    </>
  );
};

export default Evento;
