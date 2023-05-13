import converterGoogleSheetsParaUnidades from "@/servicos/conversores/GSheetsParaUnidades";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("unidades!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaUnidades(etapas);

  res.status(200).json(listaDeEtapas);
}
