import http from "http";
import "dotenv/config";

// Grab the port number from environment
const port = process.env.PORT || 8080;

// Build the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end();
});
