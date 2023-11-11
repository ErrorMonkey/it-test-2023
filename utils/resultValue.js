const resultName = ["똥바보", "바보", "일반인", "똑똑해", "천재"];
const resultText = ["0<점수<20에 대한 설명","20<점수<40에 대한 설명","40<점수<60에 대한 설명","60<점수<80에 대한 설명","80<점수<100에 대한 설명"];

function getResultInfo(score) {
  let index;

  if (score >= 0 && score < 20) {
    index = 0;
  } else if (score >= 20 && score < 40) {
    index = 1;
  } else if (score >= 40 && score < 60) {
    index = 2;
  } else if (score >= 60 && score < 80) {
    index = 3;
  } else {
    index = 4;
  }

  return {
    name: resultName[index],
    text: resultText[index]
  };
}

module.exports = getResultInfo;
