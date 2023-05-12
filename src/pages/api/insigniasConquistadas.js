import converterGoogleSheetsParaInsigniasConquistadas from "@/services/conversores/GSheetsParaInsigniasConquistadas";
import lerPlanilhaGoogleSheetsAsync from "@/services/gsheets/readDataService";

export default async function handler(req, res) {
  const etapas = await lerPlanilhaGoogleSheetsAsync(
    "insignias-conquistadas!A:Z"
  );
  const listaDeEtapas = converterGoogleSheetsParaInsigniasConquistadas(etapas);

  res.status(200).json(listaDeEtapas);
}
