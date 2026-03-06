require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
app.use(cors());
app.use(express.json());

// Connecting mongoose

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo Connected"))
  .catch((err) => console.log(err));

app.use("/app/tasks", taskRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
