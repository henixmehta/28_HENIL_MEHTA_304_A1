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
      // send error only once
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": constentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Listen Port ${port}`);
});
