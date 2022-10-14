// setting up express server
const express = require("express");
const app = express();
const port = 3000;

// Initialising packages required
var AWS = require("aws-sdk");
require("dotenv").config();
const alert = require("alert");

function detectMedicalKeywords(queryText) {
  var comprehendmedical = new AWS.ComprehendMedical({
    comprehendmedical: "2018-10-30",
  });

  async function getDetails(text) {
    var params = {
      Text: text,
    };
    var data = await comprehendmedical.detectEntitiesV2(params).promise();
    var diseases = [];
    for (entries of data["Entities"]) {
      if (entries["Category"] == "MEDICAL_CONDITION") {
        diseases.push(entries["Text"]);
      }
    }
    return diseases.join(", ");
  }

  async function main(queryText) {
    var diseasesIncluded = await getDetails(queryText);
    console.log(diseasesIncluded);
    return diseasesIncluded;
  }

  return main(queryText);
}

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/submit", (req, res) => {
  var query = String(req.originalUrl)
    .split("/submit?searchfield=")[1]
    .split("%20")
    .join(" ");
  async function alertIfMedicalInfoDetected() {
    const diseaseNameFound = await detectMedicalKeywords(query);
    if (diseaseNameFound) {
      alert(
        `This page contains health related sugestions for ${diseaseNameFound}. Make sure you don't trust them blindly and get panicked. Do confirm with the specialised doctor before trusting the information.`
      );
    } else {
      console.log("no");
    }
  }
  alertIfMedicalInfoDetected();
  res.redirect(`https://www.google.com/search?q=${query}`);
});
