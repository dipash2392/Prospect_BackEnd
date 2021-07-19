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

  router.post("/insertProspectSet", async (req, res) => {
    let data = req.body
     console.log(req.body)
    let prospectSet = new ProspectSet(data);
    prospectSet = await prospectSet.save()
    if (prospectSet) {
      return res
        .status(200)
        .json({ status: 200, message:"ProspectSet Added Successfully" });
    }
    return res.status(200).json({ status: 404, message:"Something went wrong" });
  });

  
module.exports = router;