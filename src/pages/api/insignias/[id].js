import buscarInsigniaPorId from "@/repositorios/InsigniasRepositorio";

export default async function handler(req, res) {
  const insignia = await buscarInsigniaPorId(req.query.id);
  res.status(200).json(insignia);
}
