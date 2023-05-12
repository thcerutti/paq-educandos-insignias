import converterGoogleSheetsParaEtapas from "@/services/conversores/GSheetsParaEtapas";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("etapas!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaEtapas(etapas);

  res.status(200).json(listaDeEtapas);
}
