const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");

process.env["GOOGLE_APPLICATION_CREDENTIALS"] =
  "./src/services/gsheets/google_application_credentials.json";

const service = google.sheets({
  version: process.env.API_VERSION,
  auth: new GoogleAuth({
    scopes: process.env.SCOPES,
  }),
});

module.exports = service;
