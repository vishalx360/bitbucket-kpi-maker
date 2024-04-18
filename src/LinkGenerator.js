const config = require("../config.json")

const params = {
  "fields": [
      "values.title",
      "values.destination.branch.name",
      "values.destination.repository.name",
      "values.closed_on",
      "values.links.html.href"
  ],
  "page": 1,
  "pagelen": 80,
  "state": "MERGED",
  "projectUUID": "",
  "accountID": ""
}
const decodedURL = new URL (decodeURI(config.url))

const projectUUID = decodedURL.searchParams.get("project").split("{")[1].split("}")[0]
const accountID = decodedURL.searchParams.get("author")

params.accountID = accountID
params.projectUUID = projectUUID

console.log(params);


function generateBitbucketURL(params) {
  const baseURL =
    "https://bitbucket.org/!api/internal/workspaces/listed-inc/pullrequests/";
  const { fields, page, pagelen, state, projectUUID, accountID } = params;

  if (!fields || !page || !pagelen || !state || !projectUUID || !accountID) {
    console.error("ERROR: Missing required params");
    process.exit(1);
  }

  const fieldsParam = `fields=${fields.join(",")}`;
  const pageParam = `page=${page}`;
  const pagelenParam = `pagelen=${pagelen}`;
  const qParam = `q=state=${`"${state}"`} AND source.repository.project.uuid=${`"{${projectUUID}}"`} AND (author.account_id=${`"${accountID}"`})`;

  const queryParams = [fieldsParam, pageParam, pagelenParam, qParam].join("&");
  const generatedURL = `${baseURL}?${encodeURI(queryParams)}`;

  return generatedURL;
}


// const generatedURL = generateBitbucketURL(params);
// console.log(generatedURL);

