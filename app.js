const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes");
const ps = process.env;
const dotenv = require("dotenv");
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
dotenv.config({
  path: path.join(__dirname, `./config/envs/${ps.NODE_ENV}.env`),
});
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", router);

// app.use("/", (req, res) => {
//   res.render("index");
// });

// app.get("/", async (req, res) => {
// try {
//   const totalApplicants = await controller.getTotalApplicants();
//   const averageScore = await controller.getAverageScore();
//   const perfectScoreApplicants = await controller.getPerfectScoreApplicants();

//   res.render("index", {
//     totalApplicants,
//       averageScore,
//       perfectScoreApplicants,
//   });
// } catch (error) {
//   res.status(500).send("에러 발생");
// }
// });

// app.get("/result", (req, res) => {
//   const userAnswers = req.query.userAnswers;
//   res.render("result", { userAnswers });
// });

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
