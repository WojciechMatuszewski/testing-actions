import { writeFileSync } from "fs";
import { join } from "path";

const filePath = join(__dirname, "./output.txt");

writeFileSync(filePath, `${Math.random()}`, {
  encoding: "utf-8"
});
