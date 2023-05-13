import buscarInsigniaConquistadaPorId from "@/repositorios/InsigniasConquistadasRepositorio";

export default async function handler(req, res) {
  const insigniaConquistada = await buscarInsigniaConquistadaPorId(req.query.id);
  res.status(200).json(insigniaConquistada);
}
