const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
    },
    url: {
        type: String
    }
});


const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
