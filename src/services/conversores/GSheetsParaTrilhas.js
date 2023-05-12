function converterGoogleSheetsParaTrilhas(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [trilha, id] = linha;

    dadosConvertidos.push({
      id,
      trilha,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaTrilhas;
