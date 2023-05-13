import readDataService from "@/servicos/gsheets/readDataService";
import converterGoogleSheetsParaEducandos from "@/servicos/conversores/GSheetsParaEducandos";

const buscarEducandoPorId = async (id) => {
  const data = await readDataService("Educandos!A:Z");
  const educandos = converterGoogleSheetsParaEducandos(data);
  const x = educandos.find((educando) => educando.id === id.toString());
  return x;
};

export default buscarEducandoPorId;
