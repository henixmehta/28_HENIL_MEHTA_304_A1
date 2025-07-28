const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8000;
const resourceDir = path.join(__dirname, "resources");

const minetype = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".jpg": "image/jpg",
};

const server = http.createServer((req, res) => {
  const filePath = path.join(
    resourceDir,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);
  const constentType = minetype[ext] || "text/plain";
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.end("not Found");
    }
    res.writeHead(200, { "content-type": constentType });
    res.end(content);
  });
});
server.listen(port, (req, res) => {
  console.log(`Listen Port ${port}`);
});
