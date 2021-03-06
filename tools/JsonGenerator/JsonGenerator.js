const fs = require("fs");
const path = require("path");
const parseJson = require("parse-json");

const app = require("../lib/StrokesPlusDotnet");
const { onCreateOrUpdate, raw, readFile, safeWrite } = require("../lib");

const input = require.resolve("./JsonFromGetMethods.sp");
const output = path.join(__dirname, "output.json");

(async () => {
  console.log("Parsing the contents of `sp.GetMethods`");
  console.log("to write JSON schema for the methods' signatures");

  onCreateOrUpdate(output, async (path) => {
    const contents = await readFile(output);

    try {
      parseJson(contents, output);
      const data = JSON.parse(contents);

      await safeWrite(path, JSON.stringify(data));
      console.log(`Wrote ${path}`);
    } catch (err) {
      throw Error(err);
    }
  });

  app.runScript(`eval(File.ReadAllText(${raw(input)}))(${raw(output)});`);
})();
