import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaEventos from "@/servicos/conversores/GSheetsParaEventos";

const buscarEventoPorId = async (id) => {
  const data = await readDataService("eventos!A:Z");
  const eventos = converterGoogleSheetsParaEventos(data);
  return eventos.find((evento) => evento.id === id.toString());
};

export default buscarEventoPorId;
