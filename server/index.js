const http = require("http");
const path = require("path");
const fs = require("fs");

const express = require("express");
const { strict } = require("assert");

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
console.log(__dirname);
// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'build',"/index.html")));

