const express = require("express");
const router = express.Router();
const controller = require("../controller/Capplicants");
const controller2 = require("../controller/Ccomment");

// 메인 화면
router.get("/", controller.home);

// // 테스트 시작 화면
router.get("/test2023", controller.testStart);

// 다음 버튼
router.post("/postCorrectAnswers", controller.postCorrectAnswers);

// // 결과 보기
// router.post("/postUserAnswers", controller.getResult);

// 결과 페이지로 이동, 폼 전송으로 요청
router.post("/result", controller.formGetResult);

// 댓글조회
router.post("/comments", controller2.comments);

// 댓글 등록
router.post("/comment", controller2.createComments);

module.exports = router;
