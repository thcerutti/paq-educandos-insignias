import converterGoogleSheetsParaEducandos from "@/servicos/conversores/GSheetsParaEducandos";
import lerPlanilhaGoogleSheetsAsync from "@/servicos/gsheets/readDataService";

const ordenarPorNomeCompleto = (listaDeEducandos) =>
  listaDeEducandos.sort((a, b) => (a.nomeCompleto < b.nomeCompleto ? -1 : 1));

export default async function handler(req, res) {
  const educandos = await lerPlanilhaGoogleSheetsAsync("Educandos!A:Z");
  const listaDeEducandos = converterGoogleSheetsParaEducandos(educandos);
  const listaOrdenada = ordenarPorNomeCompleto(listaDeEducandos);

  res.status(200).json(listaOrdenada);
}
