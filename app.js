const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "./config/env/.env") });
const ps = process.env;

dotenv.config({
  path: path.join(__dirname, `./config/env/${ps.NODE_ENV}.env`),
});

const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

const router = require("./routes");
app.use("/", router);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
