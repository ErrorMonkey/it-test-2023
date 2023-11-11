const db = require("../model");
const quizModel = require("../utils/answersolution");
const getResultInfo = require("../utils/resultValue");

// 총 응시자
const getTotalApplicants = async () => {
  try {
    const totalApplicants = await db.applicants.count();
    return totalApplicants;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

// 응시사 중 100점을 획득자
const getPerfectScoreApplicants = async () => {
  try {
    const perfectScoreApplicants = await db.applicants.count({
      where: {
        score: 100,
      },
    });
    return perfectScoreApplicants;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

// 응시자 평균 점수
const getAverageScore = async () => {
  try {
    const result = await db.applicants.findOne({
      attributes: [
        [db.sequelize.fn("TRUNCATE", db.sequelize.fn("AVG", db.sequelize.col("score")), 0), "averageScore"],
      ],
    });
    const averageScore = result.getDataValue("averageScore");
    return averageScore;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

// 메인 화면
exports.home = async (req, res) => {
  try {
    const totalApplicants = await getTotalApplicants();
    const averageScore = await getAverageScore();
    const perfectScoreApplicants = await getPerfectScoreApplicants();

    // const totalApplicants_test = 75;
    // const averageScore_test = 75;
    // const perfectScoreApplicants_test = 75;

    res.render("index", {
      totalApplicants,
      averageScore,
      perfectScoreApplicants,
    });
 
  } catch (error) {
    res.status(500).send("에러 발생");
  }
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
    score: checkAnswers(),
  };

  const createScore = await applicants.create(data);

  if (createScore) {
    res.send({ return: true });
  } else {
    res.status(500).send({ return: false });
  }
};

// 결과 보기 버튼 누른 후 사용자 답안과 정답 비교
// 비교 후 결과에 따른 페이징 렌더
function checkAnswers(req, res) {
  const userAnswers = req.body.score; // 사용자의 답안
  const correctAnswers = quizModel.getCorrectAnswers(); // 모델에서 정답 가져오기

  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score += 10;
    }
  }

  // const resultName = resultValue.resultname();
  // const resulttext = resultValue.resulttext();



  let resultRender=getResultInfo(score);

  
  // let pageToRender;
  // if (score >= 0 && score <= 20) {
  //   pageToRender = "lowScorePage"; // 0~20점 범위
  // } else if (score > 20 && score <= 40) {
  //   pageToRender = "mediumScorePage"; // 21~40점 범위
  // } else if (score > 40 && score <= 60) {
  //   pageToRender = "mediumHighScorePage"; // 41~60점 범위
  // } else if (score > 60 && score <= 80) {
  //   pageToRender = "highScorePage"; // 61~80점 범위
  // } else {
  //   pageToRender = "perfectScorePage"; // 81~100점 범위
  // }
  res.render('result',{resultRender});
  return score;
}

// module.exports = { checkAnswers };
// module.exports = { getTotalApplicants };
// module.exports = { getPerfectScoreApplicants };
// module.exports = { getAverageScore };
