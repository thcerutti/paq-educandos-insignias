function converterGoogleSheetsParaEducandos(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [id, nomeCompleto, etapa, unidade] = linha;

    dadosConvertidos.push({
      id,
      nomeCompleto,
      etapa,
      unidade,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaEducandos;
