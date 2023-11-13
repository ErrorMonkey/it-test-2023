const express = require("express");
const router = express.Router();
const controller = require("../controller/Capplicants");
const controller = require("../controller/Ccomment");

// 메인 화면
router.get("/", controller.home);

// // 테스트 시작 화면
router.get("/test2023", controller.testStart);

// // 결과 보기
router.post("/test2023", controller.getResult);

// 댓글조회
router.post("/comments",controller.comments);

// 댓글 등록
router.post("/comment",controller.createComments);

module.exports = router;
