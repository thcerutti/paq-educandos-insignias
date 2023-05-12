function converterGoogleSheetsParaInsigniasConquistadas(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [
      id,
      educandoId,
      nomeCompleto,
      insignia,
      dataConquistada,
      xpConquistado,
    ] = linha;

    dadosConvertidos.push({
      id,
      educandoId,
      nomeCompleto,
      insignia,
      dataConquistada,
      xpConquistado,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaInsigniasConquistadas;
