require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const sampleRoutes = require("./routes/sample");
// database connection
// connection();
// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/sample", sampleRoutes);



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));