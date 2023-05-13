import converterGoogleSheetsParaInsigniasConquistadas from "@/servicos/conversores/GSheetsParaInsigniasConquistadas";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync(
    "insignias-conquistadas!A:Z"
  );
  const listaDeEtapas = converterGoogleSheetsParaInsigniasConquistadas(etapas);

  res.status(200).json(listaDeEtapas);
}
