function getResultInfo(score) {
  if (score >= 0 && score <= 20) {
    return "rank5.jpg"; // 0~20점 범위의 이미지 파일
  } else if (score > 20 && score <= 40) {
    return "rank4.jpg"; // 21~40점 범위의 이미지 파일
  } else if (score > 40 && score <= 60) {
    return "rank3.jpg"; // 41~60점 범위의 이미지 파일
  } else if (score > 60 && score <= 80) {
    return "rank2.jpg"; // 61~80점 범위의 이미지 파일
  } else {
    return "rank1.jpg"; // 81~100점 범위의 이미지 파일
  }
}

module.exports = getResultInfo;
