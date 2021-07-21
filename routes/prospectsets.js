const { json } = require("body-parser");
const express = require("express");
const { ProspectSet } = require("../Models/prospectSet");
const router = express.Router();

router.get("/getProspectSet", async (req, res) => {
  const prospectSet = await ProspectSet.find({}).sort({
    _id: -1,
  });;
  if (ProspectSet.length > 0) {
    return res.status(200).json({ status: 200, prospectSet: prospectSet });
  }
  return res.status(200).json({ status: 404, prospectSet: [] });
});

router.post("/insertProspectSet", async (req, res) => {
  let data = req.body;
  let prospectSet = new ProspectSet(data);
  prospectSet = await prospectSet.save();
  if (prospectSet) {
    return res
      .status(200)
      .json({ status: 200, message: "ProspectSet Added Successfully" });
  }
  return res.status(200).json({ status: 404, message: "Something went wrong" });
});

router.post("/editProspectSet", async (req, res) => {
  let data = req.body;
  console.log(req.body);
  let prospectSet = await ProspectSet.findByIdAndUpdate(
    data.id,
    {
      $set: {
        prospectName: data.prospectName,
        demographic: data.demographic,
        source: data.source,
        addedBy: data.addedBy,
        dateAdded: data.dateAdded,
        setType: data.setType,
        howMany: data.howMany,
        details: data.details,
      },
    },
    {
      new: true,
    }
  );
  if (prospectSet) {
    return res.status(200).json({
      status: 200,
      message: "Prospect Set Updated",
    });
  }
  return res.status(404).json({
    status: 404,
    message: "Bad Request",
  });
});

router.post("/deleteProspectSet", async (req, res) => {
  let data = req.body;
  console.log(req.body);
  let prospectSet = await ProspectSet.findByIdAndDelete(data.id);
  if (prospectSet) {
    return res.status(200).json({
      status: 200,
      message: "Prospect Set Delete",
    });
  }
  return res.status(404).json({
    status: 404,
    message: "Bad Request",
  });
});

router.get("/searchProspect/:letter", async (req, res) => {
  const letter = req.params.letter;
  console.log(letter);
  const pattern = `\\b(.*${letter}.*)\\b`;
  const regex = new RegExp(pattern, "gi");
  console.log(regex);
  // let prospectSet = [];

  prospectSet = await ProspectSet.findOne({
    prospectName: letter,
  });
  console.log(prospectSet);
  return res.status(200).json({
    prospectSet,
  });
});
module.exports = router;
