const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({credentials: true, origin: ["http://localhost:3000"]}));

app.get("/", (req, res) => {
    return res.status(200).json({msg: "test message"});
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server started at ${PORT}`))