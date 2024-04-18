const path = require('path');
const converter = require('json-2-csv');
const fs = require('fs');
const transformedData = require('./transformedData.json');

//IFFIE
(async () => {

  const csv = await converter.json2csv(transformedData);

  const filePath = path.join(__dirname, 'transformedData.csv');

    fs.writeFileSync(filePath, csv);
})();