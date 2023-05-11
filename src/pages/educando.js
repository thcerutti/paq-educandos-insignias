import PaqNavbar from "@/components/PaqNavbar";
import PerfilEducando from "@/components/PerfilEducando";
import TodosEducandos from "@/components/TodosEducandos";

const Educando = ({}) => {
  return (
    <>
      <PaqNavbar>
        <PerfilEducando nome={'Matheus'} etapa={'3'} trilha={'Programação'} unidade={"SC-401"}>
        
        </PerfilEducando>
      </PaqNavbar>
    </>
  );
};

export default Educando;
