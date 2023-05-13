const { auth } = require("google-auth-library");
const { google } = require("googleapis");

const createClient = () => {
  const envCredentials = JSON.parse(
    Buffer.from(process.env.GAC, "base64").toString("utf8")
  );
  const client = auth.fromJSON(envCredentials);
  client.scopes = process.env.SCOPES;
  return client;
};

const googleSheetsService = google.sheets({
  version: process.env.API_VERSION,
  auth: createClient(),
});

export default googleSheetsService;
