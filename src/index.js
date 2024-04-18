const data = require("../input/data.json");
const fs = require("fs");
const converter = require("json-2-csv");
const path = require("path");
const { transformer } = require("./utils");

async function main() {
  console.log("Transforming Data...");
  const transformedData = transformer(data);
  
  const jsonFilePath = path.join(__dirname, "../output/transformedData.json");
  console.log(`Generating JSON file at ${jsonFilePath}`);
  fs.writeFileSync(jsonFilePath, JSON.stringify(transformedData, null, 2));
  
  const csv = await converter.json2csv(transformedData);
  const csvFilePath = path.join(__dirname, "../output/transformedData.csv");
  console.log(`Generating CSV file at ${csvFilePath}`);
  fs.writeFileSync(csvFilePath, csv);

  console.log(
    `Done : Check the output folder}`
  );
}

main();
