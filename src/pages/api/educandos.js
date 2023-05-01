import converterGoogleSheetsParaEducandos from "@/services/conversores/GoogleSheetsParaEducando";
import { lerPlanilhaGoogleSheetsAsync } from "../../services/gsheets/read-data";

export default async function handler(req, res) {
  const educandos = await lerPlanilhaGoogleSheetsAsync("Educandos!A:D");
  const listaDeEducandos = converterGoogleSheetsParaEducandos(educandos);

  res.status(200).json(listaDeEducandos);
}
