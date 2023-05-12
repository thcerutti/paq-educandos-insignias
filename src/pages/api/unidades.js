import converterGoogleSheetsParaUnidades from "@/services/conversores/GSheetsParaUnidades";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("unidades!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaUnidades(etapas);

  res.status(200).json(listaDeEtapas);
}
