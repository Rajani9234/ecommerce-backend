const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

dotenv.config();

connectDB(); // <- ye line MUST hai
app.use(cors());

app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});