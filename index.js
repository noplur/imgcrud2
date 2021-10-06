const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});