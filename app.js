const fs = require("fs");

const changeAndRead = async () => {
  const dirDivider = "withoutType";
  const nameWithoutExt = "ComponentA";
  const pathWithoutExt = `./components/${dirDivider}/${nameWithoutExt}`;

  const tsxOldPath = `${pathWithoutExt}.tsx`;
  const tsxNesPath = `${pathWithoutExt}.txt`;

  fs.rename(tsxOldPath, tsxNesPath, async () => {
    console.log("STEP 1. Extension was changed");

    const readTxt = fs.readFileSync(`${pathWithoutExt}.txt`, "utf-8");
    console.log("STEP 2. Read txt:", readTxt);

    const splittedStrings = readTxt.split("\r\n");
    console.log("STEP 3. Splitted strings:", splittedStrings);

    const stringsWithoutEmptyLines = splittedStrings.filter(
      (item) => item !== ""
    );
    console.log(
      "STEP 4. Strings without empty lines:",
      stringsWithoutEmptyLines
    );

    const hasType = stringsWithoutEmptyLines.some((item) =>
      item.includes(".Main")
    );
    console.log("STEP 5. Has type?", hasType);

    fs.rename(tsxNesPath, tsxOldPath, () => {
      console.log("STEP 6. Extension was restored");
    });
  });
};

changeAndRead();
