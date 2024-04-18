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

module.exports = { transformer, convertObject };