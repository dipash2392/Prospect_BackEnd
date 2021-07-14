const express = require("express");
const prospectsets = require("../routes/prospectsets");

module.exports = function (app) {
    app.use("/api/prospectsets", prospectsets);

}