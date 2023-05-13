function converterGoogleSheetsParaInsignias(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [insignia, id, dataDoEvento, descricao, xp] = linha;

    dadosConvertidos.push({
      id,
      insignia,
      dataDoEvento,
      descricao,
      xp,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaInsignias;
