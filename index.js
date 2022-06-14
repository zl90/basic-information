import http from "http";
import "dotenv/config";
import fs from "fs";
import express from "express";

const app = express(); // Initialise express.

app.get("/", (request, response) => {
  response.send(readHTML("./index.html"));
});

app.get("/home", (request, response) => {
  response.send(readHTML("./index.html"));
});

app.get("/index.html", (request, response) => {
  response.send(readHTML("./index.html"));
});

app.get("/about", (request, response) => {
  response.send(readHTML("./about.html"));
});

app.get("/about.html", (request, response) => {
  response.send(readHTML("./about.html"));
});

app.get("/contact-me", (request, response) => {
  response.send(readHTML("./contact-me.html"));
});

app.get("/contact-me.html", (request, response) => {
  response.send(readHTML("./contact-me.html"));
});

// Handle bad requests
app.use((request, response, next) => {
  response.status(404).send(readHTML("./404.html"));
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

// Grab the port number from environment
const port = process.env.PORT || 8080;

// Activate the server.
app.listen(port, () => {
  console.log("Server is listening...");
});
