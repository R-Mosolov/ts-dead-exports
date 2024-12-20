const { readdir, rename, readFileSync } = require("fs");

class App {
  setInput() {
    const dirDivider = "withoutType";
    const nameWithoutExt = "ComponentA";
    const pathWithoutExt = `./components/${dirDivider}/${nameWithoutExt}`;

    const tsxOldPath = `${pathWithoutExt}.tsx`;
    const tsxNesPath = `${pathWithoutExt}.txt`;

    return { tsxOldPath, tsxNesPath, pathWithoutExt };
  }

  startApp() {
    const input = this.setInput();

    this.startMainOperation(input);
  }

  startMainOperation({ tsxOldPath, tsxNesPath, pathWithoutExt }) {
    this.getRepoHighLevelStructure();

    rename(tsxOldPath, tsxNesPath, async () => {
      console.log("STEP 1. Extension was changed");

      const readTxt = this.readTxt(pathWithoutExt);
      const splittedStrings = this.getSplittedStrings(readTxt);
      const stringsWithoutEmptyLines =
        this.getStringsWithoutEmptyLines(splittedStrings);

      this.checkingForType(stringsWithoutEmptyLines);
      this.restoreExtension(tsxNesPath, tsxOldPath);
    });
  }

  getRepoHighLevelStructure() {
    readdir(".", { withFileTypes: true }, (err, files) => {
      if (err) {
        console.log(err);
      } else {
        const fileNames = files.map(({ name }) => name);
        const dirName = fileNames.filter((item) => !item.includes("."));

        console.log("STEP 0.1. Get full root structure:", fileNames);
        console.log("STEP 0.2. Get full root structure (dirs only):", dirName);
      }
    });
  }

  readTxt(pathWithoutExt) {
    const readTxt = readFileSync(`${pathWithoutExt}.txt`, "utf-8");

    console.log("STEP 2. Read txt:", readTxt);

    return readTxt;
  }

  getSplittedStrings(readTxt) {
    const splittedStrings = readTxt.split("\r\n");

    console.log("STEP 3. Splitted strings:", splittedStrings);

    return splittedStrings;
  }

  getStringsWithoutEmptyLines(splittedStrings) {
    const stringsWithoutEmptyLines = splittedStrings.filter(
      (item) => item !== ""
    );

    console.log(
      "STEP 4. Strings without empty lines:",
      stringsWithoutEmptyLines
    );

    return stringsWithoutEmptyLines;
  }

  checkingForType(stringsWithoutEmptyLines) {
    const hasType = stringsWithoutEmptyLines.some((item) =>
      item.includes(".Main")
    );

    console.log("STEP 5. Has type?", hasType);
  }

  restoreExtension(tsxNesPath, tsxOldPath) {
    rename(tsxNesPath, tsxOldPath, () => {
      console.log("STEP 6. Extension was restored");
    });
  }
}

const app = new App();

app.startApp();
