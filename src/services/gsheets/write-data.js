const service = require("./utils/google-sheets");
const config = require("./config.json");

service.spreadsheets.values
  .append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "api-test!A1:A3",
    valueInputOption: "RAW",
    resource: {
      values: [["D", "E", "F"]],
    },
  })
  .then((res) => console.log(res));
