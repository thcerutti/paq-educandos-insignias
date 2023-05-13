import buscarUnidadePorId from "@/repositorios/UnidadesRepositorio";

export default async function handler(req, res) {
  const trilha = await buscarUnidadePorId(req.query.id);
  res.status(200).json(trilha);
}
