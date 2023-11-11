const express = require("express");
const router = express.Router();
const controller = require("../controller/Capplicants");

// 메인 화면
router.get("/", controller.home);

// // 테스트 시작 화면
router.get("/test2023", controller.testStart);

// // 결과 보기
router.post("/test2023", controller.getResult);

module.exports = router;
