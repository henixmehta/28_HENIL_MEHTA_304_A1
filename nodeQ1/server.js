const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);

  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "resources/view/index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading index.html");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  } else if (req.method === "GET" && req.url === "/resources/js/script.js") {
    const jsPath = path.join(__dirname, "resources/js/script.js");
    fs.readFile(jsPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("JS file not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });

  } else if (req.method === "GET" && req.url === "/resources/css/style.css") {
    const cssPath = path.join(__dirname, "resources/css/style.css");
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("CSS file not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });

  } else if (req.method === "GET" && req.url === "/gethello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello NodeJS !!");

  } else {
    res.writeHead(404); 
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
