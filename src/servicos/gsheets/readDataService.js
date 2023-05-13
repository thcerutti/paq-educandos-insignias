import googleSheetsService from "./googleSheetsService";

const lerPlanilhaGoogleSheetsAsync = async (range) => {
  const response = await googleSheetsService.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });
  return response.data.values;
};

export default lerPlanilhaGoogleSheetsAsync;
