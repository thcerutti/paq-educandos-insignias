const service = require("./google-sheets");

const lerPlanilhaGoogleSheetsAsync = async (range) => {
  const response = await service.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });
  return response.data.values;
};

module.exports = { lerPlanilhaGoogleSheetsAsync };
