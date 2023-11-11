const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

// const router = require("./routes");

app.get("/", (req, res) =>{
  res.render("index")
});

app.get("/test2023", (req, res) =>{
  res.render("test2023")
});

app.get("/result", (req, res) =>{
  res.render("result")
});

// app.get("/", async (req, res) => {
//   try {
//     const totalApplicants = await controller.getTotalApplicants();
//     const averageScore = await controller.getAverageScore();
//     const perfectScoreApplicants = await controller.getPerfectScoreApplicants();

//     res.render("index", {
//       totalApplicants,
//       averageScore,
//       perfectScoreApplicants,
//     });
//   } catch (error) {
//     res.status(500).send("에러 발생");
//   }
// });

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
