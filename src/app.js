const express = require("express");
const app = express();

// state query param func 
app.get("/states/:abbreviation", (req, res, next) => {
    const abbreviation = req.params.abbreviation;
    if (abbreviation.length !== 2) {
      next("State abbreviation is invalid.");
    } else {
      res.send(`${abbreviation} is a nice state, I'd like to visit.`);
    }
  });


// Not-found handler
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist!`);
});

// Error handler 
app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
});

module.exports = app;
