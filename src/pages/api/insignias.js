import converterGoogleSheetsParaInsignias from "@/servicos/conversores/GSheetsParaInsignias";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync("insignias!A:Z");
  const listaDeEtapas = converterGoogleSheetsParaInsignias(etapas);

  res.status(200).json(listaDeEtapas);
}
