const express = require("express");
const { google } = require("googleapis");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const { name, year, type } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1OAa2H03e0lY3MXnx23yDSN8rHqftkHw51VvvvjC8-Vc";

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Leht1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, year, type]],
    },
  });
});

app.listen(1337, (req, res) => console.log("running on 1337"));