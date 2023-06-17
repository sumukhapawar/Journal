const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors({ methods: ["GET", "POST"] }));
app.use(express.json());

const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log(error));

const posts = require("./routes/posts");

app.use("/", posts);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
