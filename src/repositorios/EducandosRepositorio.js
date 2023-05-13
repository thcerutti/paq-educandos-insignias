import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaEducandos from "@/servicos/conversores/GSheetsParaEducandos";

const buscarEducandoPorId = async (id) => {
  const data = await readDataService("Educandos!A:Z");
  const educandos = converterGoogleSheetsParaEducandos(data);
  return educandos.find((educando) => educando.id === id.toString());
};

export default buscarEducandoPorId;
