import converterGoogleSheetsParaEducandos from "@/services/conversores/GSheetsParaEducando";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const educandos = await lerPlanilhaGoogleSheetsAsync("Educandos!A:Z");
  const listaDeEducandos = converterGoogleSheetsParaEducandos(educandos);

  res.status(200).json(listaDeEducandos);
}
