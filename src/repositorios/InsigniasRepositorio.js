import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaInsignias from "@/servicos/conversores/GSheetsParaInsignias";

const buscarInsigniaPorId = async (id) => {
  const data = await readDataService("insignias!A:Z");
  const insignias = converterGoogleSheetsParaInsignias(data);
  return insignias.find((insignia) => insignia.id === id.toString());
};

export default buscarInsigniaPorId;
