import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaTrilhas from "@/servicos/conversores/GSheetsParaTrilhas";

const buscarTrilhaPorId = async (id) => {
  const data = await readDataService("trilhas!A:Z");
  const trilhas = converterGoogleSheetsParaTrilhas(data);
  return trilhas.find((educando) => educando.id === id.toString());
};

export default buscarTrilhaPorId;
