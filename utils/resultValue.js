function getResultInfo(score) {
  if (score >= 0 && score <= 20) {
    return {
      grade: "5",
      gradeTitle: "좀 치시네요",
      desc: "잘 치시네요",
      img: "../public/image/grade5.png",
    };
  } else if (score > 20 && score <= 40) {
    return {
      grade: "4",
      gradeTitle: "4444",
      desc: "잘 치시네요",
      img: "../public/image/grade4.png",
    };
  } else if (score > 40 && score <= 60) {
    return {
      grade: "3",
      gradeTitle: "33333",
      desc: "잘 치시네요",
      img: "../public/image/grade3.png",
    };
  } else if (score > 60 && score <= 80) {
    return {
      grade: "2",
      gradeTitle: "22222222",
      desc: "잘 치시네요",
      img: "../public/image/grade2.png",
    };
  } else {
    return {
      grade: "1",
      gradeTitle: "좀 치시네요",
      desc: "잘 치시네요",
      img: "../public/image/grade1.png",
    };
  }
}

module.exports = getResultInfo;
