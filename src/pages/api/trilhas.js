import converterGoogleSheetsParaTrilhas from "@/servicos/conversores/GSheetsParaTrilhas";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("trilhas!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaTrilhas(etapas);

  res.status(200).json(listaDeEtapas);
}
