import http from "http";
import "dotenv/config";
import fs from "fs";

// Grab the port number from environment
const port = process.env.PORT || 8080;

// Build the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  // When we receive a http request, check the URL,
  // then serve HTML accordingly.
  switch (req.url) {
    case "/index.html":
    case "/home":
    case "/":
      res.end(readHTML("./index.html"));
      break;
    case "/about":
    case "/about.html":
      res.end(readHTML("./about.html"));
      break;
    case "/contact-me":
    case "/contact-me.html":
      res.end(readHTML("./contact-me.html"));
      break;
    default:
      res.end(readHTML("./404.html"));
      break;
  }
});

// Grab the contents of the html file for serving.
const readHTML = (filename) => {
  let result;

  try {
    const data = fs.readFileSync(filename, "utf8");
    result = data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

// Activate the server.
server.listen(port, () => {
  console.log("Server is listening...");
});
