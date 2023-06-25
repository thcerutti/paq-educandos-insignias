const PerfilEducando = ({ nome, trilha, etapa, unidade }) => {
  return (
    <>
      <h1>{nome} </h1>
      <p>Etapa: {etapa} </p>
      <p>Unidade: {unidade} </p>
      <p>Trilha: {trilha} </p>
      <hr></hr>
      <h2>Insígnias: </h2>
      <hr></hr>
      <h2>Sobre: </h2>
    </>
  );
};

export default PerfilEducando;
