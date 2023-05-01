import googleSheetsService from "./googleSheetsService";

googleSheetsService.spreadsheets.values
  .append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "api-test!A1:A3",
    valueInputOption: "RAW",
    resource: {
      values: [["D", "E", "F"]],
    },
  })
  .then((res) => console.log(res));
