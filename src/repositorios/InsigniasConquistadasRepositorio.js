import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaInsigniasConquistadas from "@/servicos/conversores/GSheetsParaInsigniasConquistadas";

const buscarEtapaPorId = async (id) => {
  const data = await readDataService("insignias-conquistadas!A:Z");
  const insigniasConquistadas =
    converterGoogleSheetsParaInsigniasConquistadas(data);
  return insigniasConquistadas.find(
    (insigniaConquistada) => insigniaConquistada.id === id.toString()
  );
};

export default buscarEtapaPorId;
