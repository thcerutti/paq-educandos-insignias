function converterGoogleSheetsParaEducandos(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [nomeCompleto, id, etapa, unidadeId, unidade] = linha;

    dadosConvertidos.push({
      id,
      nomeCompleto,
      etapa,
      unidadeId,
      unidade,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaEducandos;
