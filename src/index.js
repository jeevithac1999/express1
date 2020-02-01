const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("hello");
});
app.get("/profile", (request, response) => {
  response.send("profile");
});
const server = app.listen("8080", () => {
  console.log(`Server Running on port: ${server.address().port}.`);
});
