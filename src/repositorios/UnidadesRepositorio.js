import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaUnidades from "@/servicos/conversores/GSheetsParaUnidades";

const buscarUnidadePorId = async (id) => {
  const data = await readDataService("unidades!A:Z");
  const educandos = converterGoogleSheetsParaUnidades(data);
  return educandos.find((educando) => educando.id === id.toString());
};

export default buscarUnidadePorId;
