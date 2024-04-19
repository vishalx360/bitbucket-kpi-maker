const data = require("../input.json");
const fs = require("fs");
const converter = require("json-2-csv");
const path = require("path");
const { transformer, concatDataByDate } = require("./utils");

async function main() {
  console.log("Transforming Data...");
  const transformedData = transformer(data);
  
  const newData = {}
  transformedData.forEach((item) => {
    const date = item.Date;
    if (!newData[date]) {
      newData[date] = [];
    }
    newData[date].push(item);
  });

  const finalData =  concatDataByDate(newData);

 
  // const jsonFilePath = path.join(__dirname, "../output/transformedData.json");
  // console.log(`Generating JSON file at ${jsonFilePath}`);
  // fs.writeFileSync(jsonFilePath, JSON.stringify(transformedData, null, 2));
  
  const csv = await converter.json2csv(finalData);
  const csvFilePath = path.join(__dirname, "../output.csv");
  console.log(`Generating CSV file at ${csvFilePath}`);
  fs.writeFileSync(csvFilePath, csv);

  console.log(
    `Done : Check the output folder`
  );
}

main();
