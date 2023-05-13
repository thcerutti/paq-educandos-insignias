import buscarEducandoPorId from "@/repositorios/EducandosRepositorio";

export default async function handler(req, res) {

  buscarEducandoPorId(req.query.id).then((educando) => {
    res.status(200).json(educando);
  });
}
