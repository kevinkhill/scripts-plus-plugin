const stringify = require("json-stringify-safe");

function payload(obj) {
  const { UTF8 } = clr.System.Text.Encoding;
  const { StringContent } = http.System.Net.Http;

  return new StringContent(stringify(obj), UTF8, "application/json");
}

module.exports = {
  stringify,
  payload,
};
