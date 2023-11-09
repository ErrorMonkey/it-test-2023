const { applicants, score } = require("../model");

// 메인 화면
exports.home = (req, res) => {
  res.render("index");
};

// 메인 화면 정보 가져오기

// 테스트 시작 화면
exports.testStart = (req, res) => {
  res.render("test2023");
};

// 결과 보기
exports.getResult = async (req, res) => {
  let data = {
    applicantsid: req.body.applicantsid,
    name: req.body.name,
    score: req.body.password,
  };

  const createScore = await score.create(data);

  if (createScore) {
    res.send({ return: true });
  } else {
    res.status(500).send({ return: false });
  }
};