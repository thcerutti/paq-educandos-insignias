import converterGoogleSheetsParaEtapas from "@/services/conversores/GSheetsParaEtapa";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("etapas!A:F");
  const listaDeEtapas = converterGoogleSheetsParaEtapas(etapas);

  res.status(200).json(listaDeEtapas);
}
