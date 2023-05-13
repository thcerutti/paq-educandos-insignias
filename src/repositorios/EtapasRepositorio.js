import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaEtapas from "@/servicos/conversores/GSheetsParaEtapas";

const buscarEtapaPorId = async (id) => {
  const data = await readDataService("etapas!A:Z");
  const etapas = converterGoogleSheetsParaEtapas(data);
  return etapas.find((etapa) => etapa.id === id.toString());
};

export default buscarEtapaPorId;
