function converterGoogleSheetsParaEventos(dadosGoogleSheets) {
  const dadosConvertidos = [];

  dadosGoogleSheets.forEach((linha, index) => {
    if (index === 0) return;

    const [nome, id, data, descricao] = linha;
    if (nome === "") return;
    dadosConvertidos.push({
      id,
      nome,
      data,
      descricao,
    });
  });

  return dadosConvertidos;
}

export default converterGoogleSheetsParaEventos;
