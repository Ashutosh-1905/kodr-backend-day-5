const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cors = require("cors");

const uploadFile = require("./services/post.service");
const postModel = require("./models/post.model");

app.use(cors());
app.use(express.json());

// Serve static files from public
app.use(express.static("public"));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create post
app.post("/api/posts", upload.single("avatar"), async (req, res) => {
    try {
        const caption = req.body.caption;
        const file = req.file?.buffer;

        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await uploadFile(file, "test");
        if (!result) {
            return res.status(500).json({ message: "Error uploading file" });
        }

        const post = await postModel.create({
            caption,
            url: result.url,
        });

        res.json({
            message: "Post created successfully",
            post,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// Get posts
app.get("/api/posts", async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json({
            message: "Posts fetched successfully",
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// Catch-all route for React frontend
app.get("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

module.exports = app;
