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
    Reference: reference,
  };
}

function concatDataByDate(data) {
  const concatenatedData = [];
  Object.keys(data).forEach((date) => {
      data[date].forEach((item) => {
          const title = item.Title;
          const description = item['Long Description'];
          const reference = item.Reference;
      
          const existingItem = concatenatedData.find((item) => item.Date === date);
      
          if (existingItem) {
              existingItem.Title = `${existingItem.Title},
${title}`;
              existingItem['Long Description'] = `${existingItem['Long Description']},
${description}`;
              existingItem.Reference = `${existingItem.Reference},
${reference}`;
          } else {
              concatenatedData.push({
                  Date: date,
                  Title: title,
                  'Long Description': description,
                  Reference: reference
              });
          }
      });
  });

  return concatenatedData;
}


module.exports = { transformer, convertObject, concatDataByDate };