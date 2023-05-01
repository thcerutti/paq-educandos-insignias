const CardEducando = ({ educando }) => {
  return (
    <div>
      <h2>{educando.nomeCompleto}</h2>
      <p>Unidade: {educando.unidade}</p>
      <p>Etapa: {educando.etapa}</p>
    </div>
  );
};

export default CardEducando;
