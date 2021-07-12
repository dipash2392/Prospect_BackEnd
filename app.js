const express = require("express");
const config = require("config");
const app = express();
require("./Initials/cors")(app);
require("./Initials/db")();


const port = config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}...`));