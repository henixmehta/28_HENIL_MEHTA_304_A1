const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");

const zipPath = path.join(__dirname, "file1.zip");      
const extractPath = path.join(__dirname, "extracted");     

if (!fs.existsSync(extractPath)) {
  fs.mkdirSync(extractPath, { recursive: true });
}

// Extract the zip file
fs.createReadStream(zipPath)
  .pipe(unzipper.Extract({ path: extractPath }))
  .on("close", () => {
    console.log("Extraction complete!");
  })
  .on("error", (err) => {
    console.error("Error during extraction:", err.message);
  });
