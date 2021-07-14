const { json } = require("body-parser");
const express = require("express");
const { ProspectSet } = require("../Models/prospectSet");
const router = express.Router();

router.get("/getProspectSet", async (req, res) => {
    const prospectSet = await ProspectSet.find({});
    if (ProspectSet.length > 0) {
      return res
        .status(200)
        .json({ status: 200, prospectSet: prospectSet });
    }
    return res.status(200).json({ status: 404, prospectSet: [] });
  });

  
module.exports = router;