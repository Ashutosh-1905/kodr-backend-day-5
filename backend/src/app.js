const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");

const cors = require("cors");
const uploadFile = require("./services/post.service");
const postModel = require("./models/post.model");
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post("/api/posts", upload.single("avatar"), async (req, res) => {
    try {
        const caption = req.body.caption;
        const file = req.file.buffer;
        const result = await uploadFile(file, "test");
        if (!result) {
            return res.status(500).json({
                message: "result error"
            })
        }
        const post = await p
        ostModel.create({
            caption: caption,
            url: result.url
        });

        res.json({
            message: "post Created successfully",
            post: post
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
});

app.get("/api/posts", async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json({
            message: "posts fetched successfully",
            posts: posts,
        });

        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    }
});


app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
});

module.exports = app;