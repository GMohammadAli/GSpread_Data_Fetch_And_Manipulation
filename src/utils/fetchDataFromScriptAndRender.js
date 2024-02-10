export const fetchDataFromScriptAndRender = () => {
  const fs = require("fs");

  const data = fs.readFileSync("./spreadsheetData.json");
  console.log("data ", data);
  return data
}
