const express = require("express");
const multer = require("multer");

const app = express();
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post("/post",upload.single("avatar"), async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "something went wrong."
        });
    }

})

module.exports = app;