function converterGoogleSheetsParaEducandos(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [nomeCompleto, id, etapa, unidadeId, unidade, trilhaId, trilha] =
      linha;
    if (nomeCompleto === "") return;
    dadosConvertidos.push({
      id,
      nomeCompleto,
      etapa,
      unidadeId,
      unidade,
      trilhaId,
      trilha,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaEducandos;
