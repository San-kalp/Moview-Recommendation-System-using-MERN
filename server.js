const express = require("express");
const app = express();
const cors = require("cors");
require("./models/database");

app.use(express.json());
app.use(cors({credentials: true, origin: ["http://localhost:3000"]}));

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");

app.use("/api/v1", userRoutes);
app.use("/api/v1", movieRoutes);

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server started at ${PORT}`));