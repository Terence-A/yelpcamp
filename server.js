//Imports
const express = require("express");
const app = express();

//Test endpoint
app.get("/", (req, res) => {
  res.send("Hello Yelp Camp");
});

//Server listen
app.listen(3000, () => {
  console.log("Serving on port 3000...");
});
