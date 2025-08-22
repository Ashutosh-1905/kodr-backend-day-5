require("dotenv").config();
const connectToDb = require("./db/db");
const app = require("./src/app");

const port = process.env.PORT || 4000
app.listen(port, async () => {
    await connectToDb();
    console.log(`Server is running on port : ${port}`); 
});
