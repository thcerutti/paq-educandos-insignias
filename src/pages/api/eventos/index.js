import converterGoogleSheetsParaEventos from "@/servicos/conversores/GSheetsParaEventos";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

export default async function handler(req, res) {
  const eventos = await lerPlanilhaGoogleSheetsAsync("eventos!A:Z");
  const listaDeEventos = converterGoogleSheetsParaEventos(eventos);

  res.status(200).json(listaDeEventos);
}
