const { GoogleAuth, auth } = require("google-auth-library");
const { google } = require("googleapis");

const envCredentials = JSON.parse(
  Buffer.from(process.env.GAC, "base64").toString("utf8")
);

const client = auth.fromJSON(envCredentials);
client.scopes = process.env.SCOPES;

const service = google.sheets({
  version: process.env.API_VERSION,
  auth: client,
});

module.exports = service;
