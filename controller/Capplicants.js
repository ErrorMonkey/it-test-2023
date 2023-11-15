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
        [
          db.sequelize.fn(
            "TRUNCATE",
            db.sequelize.fn("AVG", db.sequelize.col("score")),
            0
          ),
          "averageScore",
        ],
      ],
    });
    const averageScore = result.getDataValue("averageScore");
    return averageScore;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

const getComments = async () => {
  try {
    const comments = await db.comment.findAll({
      order:[["maxID","DESC"]]
    });
    return comments;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

const getQuestion = async (req, res) => {
  try {
    const questioncount = req.body.count;
    const questionlist = quizModel.getCorrectAnswers;

    for (let i = 0; i < questioncount.length; i++) {
      if (questioncount === questionlist[i]) {
        const currentQuestion = questionlist[i].question;
        return res.send(currentQuestion);
      }
    }
  } catch (error) {
    console.error("에러 발생: ", error);
    res.status(500).send("에러 발생");
  }
};

// 결과 보기 버튼 누른 후 사용자 답안과 정답 비교
function checkAnswers(req, res) {
  const userAnswers = req.body.score; // 사용자의 답안
  const correctAnswers = quizModel.getCorrectAnswers(); // 모델에서 정답 가져오기

  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i].answer) {
      score += 10;
    }
  }
  // 점수에 따른 결과 페이지 이미지 변경 - resultValue
  let resultImage = getResultInfo(score);

  res.render("result", { resultImage });
  return score;
}

// 메인 화면
exports.home = async (req, res) => {
  try {
    const totalApplicants = await getTotalApplicants();
    const averageScore = await getAverageScore();
    const perfectScoreApplicants = await getPerfectScoreApplicants();
    const totalComment = await getComments();
    res.render("index", {
      totalApplicants,
      averageScore,
      perfectScoreApplicants,
      totalComment,
    });
  } catch (error) {
    res.status(500).send("에러 발생");
  }
};

// 메인 화면 정보 가져오기

// 테스트 시작 화면
exports.testStart = async (req, res) => {
  try {
    const questionlist = await getQuestion(req, res);

    res.render("test2023", {
      questionlist,
    });
  } catch (error) {
    res.status(500).send("에러 발생");
  }
};

// 결과 보기
exports.getResult = async (req, res) => {
  try {
    let data = {
      applicantsid: req.body.applicantsid,
      score: checkAnswers(req, res), // checkAnswers에 req, res 전달
    };

    const createScore = await applicants.create(data);

    if (createScore) {
      res.send({ return: true });
    } else {
      res.status(500).send({ return: false });
    }
  } catch (error) {
    console.error("에러 발생: ", error);
    res.status(500).send("에러 발생");
  }
};
