import converterGoogleSheetsParaTrilhas from "@/services/conversores/GSheetsParaTrilhas";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("trilhas!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaTrilhas(etapas);

  res.status(200).json(listaDeEtapas);
}
