function converterGoogleSheetsParaEtapas(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [etapa, id] = linha;

    dadosConvertidos.push({
      id,
      etapa,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaEtapas;
