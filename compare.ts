import { readFileSync } from "fs";
import { join } from "path";

const currentPath = join(__dirname, "./output.txt");
const onMainPath = join(__dirname, "./main/output.txt");

try {
  const currentContent = readFileSync(currentPath).toString();
  const onMainContent = readFileSync(onMainPath).toString();
  console.log({
    currentContent,
    onMainContent
  });
} catch (e) {
  console.log(e);
}
