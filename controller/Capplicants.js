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

//메인화면에 댓글창 전송
const getComments = async () => {
  try {
    const comments = await db.comment.findAll({
      order: [["maxID", "DESC"]],
      limit: 5,
    });
    return comments;
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

const getQuestion = async (count) => {
  try {
    const questionList = quizModel.getCorrectAnswers();
    const currentQuestion = questionList[count];

    return [
      currentQuestion.question,
      currentQuestion.select1,
      currentQuestion.select2,
      currentQuestion.select3,
      currentQuestion.select4,
    ];
  } catch (error) {
    console.error("에러 발생: ", error);
    throw error;
  }
};

// 결과 보기 버튼 누른 후 사용자 답안과 정답 비교
function checkAnswers(req, res) {
  let score = 0;
  // 배열이었던 답안은 암묵적 형변환으로 문자열이 돼있어서 잘라주기
  const userAnswers = req.body.answerData.split(",");
  const correctAnswers = quizModel.getCorrectAnswers(); // 모델에서 정답 가져오기

  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i].answer) {
      score += 10;
    }
  }

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
    res.status(500).send("메인화면 에러 발생");
  }
};

// 테스트 시작 화면
exports.testStart = async (req, res) => {
  try {
    // 클라이언트에서 넘어온 count 값에 해당하는 문제 가져오기
    const count = req.query.count || 0; // query로 변경

    const questionText = await getQuestion(count);
    const questionSelect1 = await getQuestion(count);
    const questionSelect2 = await getQuestion(count);
    const questionSelect3 = await getQuestion(count);
    const questionSelect4 = await getQuestion(count);

    res.render("test2023", {
      count,
      questionText,
      questionSelect1,
      questionSelect2,
      questionSelect3,
      questionSelect4,
    });
  } catch (error) {
    console.error("테스트 시작 화면 에러 발생: ", error);
    res.status(500).send("테스트 시작 화면 에러 발생");
  }
};

// 다음 버튼 포스트 요청
exports.postCorrectAnswers = (req, res) => {
  try {
    const correctAnswers = quizModel.getCorrectAnswers();
    res.send(correctAnswers);
  } catch (error) {
    console.error("다음 버튼 에러 발생: ", error);
    res.status(500).send("다음 버튼 에러 발생");
  }
};

// 결과 보기
exports.formGetResult = async (req, res) => {
  try {
    let dbData = {
      applicantsid: req.body.applicantsid,
      score: checkAnswers(req, res), // checkAnswers에 req, res 전달
    };
    // 응시자와 점수 등록
    await db.applicants.create(dbData);

    req.session.score = dbData.score;

    data = {
      // 만점자 코멘트 불러오기
      totalComment: await getComments(),
      perfect: dbData.score === 100 ? true : false,
      result: getResultInfo(dbData.score),
    };
    res.render("result", { data });
  } catch (error) {
    console.error("컨트롤러 formGetResult 에러 발생: ", error);
    res.status(500).send("컨트롤러 formGetResult 에러 발생: ");
  }
};
