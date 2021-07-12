const { json } = require("body-parser");
const express = require("express");
// const { Products } = require("../models/products");
const router = express.Router();


router.get("/getProspectSet", async (req, res) => {
    res.json("Response")
//   let data = await Products.findOne();
//   return res.json({
//     status: 200,
//     data: data,
//   });
});

module.exports = router;