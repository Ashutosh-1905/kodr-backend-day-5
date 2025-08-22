const express = require("express");
const app = express();

const multer = require("multer");

// const cors = require("cors");
const uploadFile = require("./services/post.service");
const postModel = require("./models/post.model");
// app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post("/posts",upload.single("avatar"), async (req, res) => {
    try {
        const caption = req.body.caption;
        const file = req.file.buffer;
        const result = await uploadFile(file, "test");
        if (!result) {
            return res.status(500).json({
                message:"result error"
            })
        }
        const post = await postModel.create({
            caption: caption,
            url: result.url
        });

        res.json({
            message: "post Created successfully",
            post:post
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
})

module.exports = app;