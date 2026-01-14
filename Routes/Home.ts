import { execSync } from "node:child_process";
import * as fs from "node:fs";

export namespace InstalledPackages {
  export const readFiles = (fileName: string) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        throw new Error("Cannot run Code");
      }

      execSync("npm install " + data);

      console.log(data);
    });
  };
}
