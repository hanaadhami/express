// Dependencies
// =============================================================
const express = require("express");
const {Store} = require("fs-json-store");
const store = new Store({file: "db.json"});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port 8000");
});