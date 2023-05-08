const express = require("express");
const app = express();
const cors = require("cors");
require("./models/database");
// const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api/v1", userRoutes);
app.use("/api/v1", movieRoutes);
app.use("/api/v1", reviewRoutes);

// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started at ${PORT}`));
