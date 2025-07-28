const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

const filePath = path.join(__dirname, "file3.txt"); 

const output = fs.createWriteStream(path.join(__dirname, "file3.zip"));
const archive = archiver("zip", {
  zlib: { level: 9 },
});

output.on("close", () => {
  console.log(`Zip created: ${archive.pointer()} total bytes`);
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);

archive.file(filePath, { name: "file3.txt" });

archive.finalize();
