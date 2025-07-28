const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

unlinkAsync("file1.txt")
  .then(() => {
    console.log("File deleted successfully");
  })
  .catch((err) => {
    console.error("Error deleting file:", err.message);
  });
