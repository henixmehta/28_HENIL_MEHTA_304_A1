const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.txt");

fs.writeFileSync(filePath, "Hello, this is a test file.");
console.log("File created.");

const data = fs.readFileSync(filePath, "utf-8");
console.log("File content:", data);

fs.appendFileSync(filePath, "\nAppended line.");
console.log("Text appended.");

if (fs.existsSync(filePath)) {
  console.log("File exists.");
}

const newPath = path.join(__dirname, "renamed.txt");
fs.renameSync(filePath, newPath);
console.log("✏ File renamed.");

fs.unlinkSync(newPath);
console.log("File deleted.");
