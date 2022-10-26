const mongoose = require("mongoose");

const PackagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const PackagesModel = mongoose.model("packages", PackagesSchema);

module.exports = PackagesModel;