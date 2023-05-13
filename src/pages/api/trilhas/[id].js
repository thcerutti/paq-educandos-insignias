import buscarTrilhaPorId from "@/repositorios/TrilhasRepositorio";

export default async function handler(req, res) {
  const trilha = await buscarTrilhaPorId(req.query.id);
  res.status(200).json(trilha);
}
