const mongoose = require("mongoose");
const config = require("config");
module.exports = function () {
    const db = config.get("db");
      mongoose
        .connect(db, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
        })
        .then(() => {
          console.log(`Connected to ${db}...`)
        }).catch((err) => {
         console.log(`Db not connected..Node is Exiting...! ${db}`,err);
          process.exit(1);
        });
};
