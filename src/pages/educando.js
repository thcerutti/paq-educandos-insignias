import PaqNavbar from "@/components/PaqNavbar";
import PerfilEducando from "@/components/PerfilEducando";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Educando = () => {
  const router = useRouter();
  const [educando, setEducando] = useState({});

  useEffect(() => {
    if (router.query.id) {
      fetch(`/api/educandos/${router.query.id}`)
        .then((res) => res.json())
        .then((data) => {
          setEducando(data);
        });
    }
  }, [router.query.id]);

  return (
    <>
      <PaqNavbar>
        <PerfilEducando
          nome={educando.nomeCompleto}
          etapa={educando.etapa}
          trilha={educando.trilha}
          unidade={educando.unidade}
        ></PerfilEducando>
      </PaqNavbar>
    </>
  );
};

export default Educando;
