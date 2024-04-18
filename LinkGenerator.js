const { encode } = require("url-encode-decode");

function generateBitbucketURL(params) {
  const baseURL =
    "https://bitbucket.org/!api/internal/workspaces/listed-inc/pullrequests/";
  const { fields, page, pagelen, state, projectUUID, accountID } = params;

  const fieldsParam = `fields=${fields.join(",")}`;
  const pageParam = `page=${page}`;
  const pagelenParam = `pagelen=${pagelen}`;
  const qParam = `q=state=${`"${state}"`} AND source.repository.project.uuid=${`"{${projectUUID}}"`} AND (author.account_id=${`"${accountID}"`})`;

  const queryParams = [fieldsParam, pageParam, pagelenParam, qParam].join("&");
  const generatedURL = `${baseURL}?${encodeURI(queryParams)}`;

  return generatedURL;
}

// Example usage:
const params = {
  fields: [
    "values.title",
    "values.destination.branch.name",
    "values.destination.repository.name",
    "values.closed_on",
    "values.links.html.href",
  ],
  page: 1,
  pagelen: 70,
  state: "MERGED",
  projectUUID: "4642198d-cb4d-4d7e-99cf-bd9ed9872dbd",
  accountID: "712020:fd66d7a9-e1ce-478d-9e34-9d0f7e1f212c",
};

const generatedURL = generateBitbucketURL(params);
console.log(generatedURL);
