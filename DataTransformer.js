const data = require('./data.json');
const fs = require('fs');

const transformer = (data) => data.values.map(convertObject);
function convertObject(inputObj) {
    const date = new Date(inputObj.closed_on).toDateString();
    const title = inputObj.title;
    const description = `${title}\n on ${inputObj.destination.branch.name} branch for \n ${inputObj.destination.repository.name} repository.`;
    const reference = inputObj.links.html.href;

    return {
        Date: date,
        Title: title,
        "Long Description": description,
        Reference: reference
    };
}

const transformedData = transformer(data);

console.log(transformedData);

// write transformed data to a file called transformedData.json

fs.writeFileSync('transformedData.json', JSON.stringify(transformedData, null, 2));


