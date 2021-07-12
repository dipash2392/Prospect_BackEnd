const mongoose = require("mongoose");

const prospectSetSchema = new mongoose.Schema({
    prospectName: { type: String, required: true },
    demographic: { type: String, required: true },
    source: { type: String, required: true },
    addedBy: { type: String, required: true },
    dateAdded: {
        type: Date,
        default: Date.now(), required: true
    },
    setType: { type: String, required: true },
    howMany: { type: Number, required: true },
    details: { type: String, required: true },
});

const ProspectSet = mongoose.model("Prospectset", prospectSetSchema);
exports.ProspectSet = ProspectSet;
