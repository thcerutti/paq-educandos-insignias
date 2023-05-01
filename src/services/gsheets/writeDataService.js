import googleSheetsService from "./googleSheetsService";

const escreverEmPlanilhaGoogleSheets = (range, values) => {
  googleSheetsService.spreadsheets.values
    .append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
      valueInputOption: "RAW",
      resource: {
        values,
      },
    })
    .then((res) => console.log(res));
};

export default escreverEmPlanilhaGoogleSheets;
