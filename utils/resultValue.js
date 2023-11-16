function getResultInfo(score) {
  if (score >= 0 && score <= 20) {
    return {
      grade: "5등급",
      gradeTitle: "좀 치시네요",
      desc: "잘 치시네요",
      img: "",
    };
  } else if (score > 20 && score <= 40) {
    return {
      grade: "4등급",
      gradeTitle: "4444",
      desc: "잘 치시네요",
      img: "../public/image/grade3.jpeg",
    };
  } else if (score > 40 && score <= 60) {
    return {
      grade: "3등급",
      gradeTitle: "33333",
      desc: "잘 치시네요",
      img: "../public/image/grade3.jpeg",
    };
  } else if (score > 60 && score <= 80) {
    return {
      grade: "2등급",
      gradeTitle: "22222222",
      desc: "잘 치시네요",
      img: "../public/image/grade2.jpeg",
    };
  } else {
    return {
      grade: "1등급",
      gradeTitle: "좀 치시네요",
      desc: "잘 치시네요",
      img: "../public/image/grade1.jpeg",
    };
  }
}

// export default getResultInfo;

module.exports = getResultInfo;

// 백엔드 commonJS
// 프론트엔드 ES6
