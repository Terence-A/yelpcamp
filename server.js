//Imports
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Test endpoint
app.get("/", (req, res) => {
  res.render("home");
});

//Server listen
app.listen(3000, () => {
  console.log("Serving on port 3000...");
});
