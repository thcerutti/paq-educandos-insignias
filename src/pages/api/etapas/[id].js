import buscarEtapaPorId from "@/repositorios/EtapasRepositorio";

export default async function handler(req, res) {
  const etapa = await buscarEtapaPorId(req.query.id);
  res.status(200).json(etapa);
}
