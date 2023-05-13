function converterGoogleSheetsParaUnidades(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [unidade, id] = linha;

    dadosConvertidos.push({
      id,
      unidade,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaUnidades;
