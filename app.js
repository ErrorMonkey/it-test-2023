const express = require("express");
const path = require("path");
const app = express();
// const session = require("express-session");
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

const router = require("./routes");
app.use("/", (req, res) => {
  res.render("index")
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
