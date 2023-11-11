const {score} = require("../model")   //index.js 불러오겠음!


exports.calculaateScore= async(req,res)=>{
  const {ApplicantsID , name , answers} =req. body;

  //answers:사용자가 선택한 답변들
  //answers를 배열로 가정.. 정답은 각 질문마다 미리 정의


  //정답
  const correctAnswers = [a,a,a,a,a,a,a,a,a,a];
  
  //문제의 점수
  const questionScore = [ 5,4,5,2,3,5,5,5,4,10];

  let totalScore = 0;

  for(let i = 0; i < answers.length; i++){
    const userAnswers = answers[i];
    const correctAnswers = correctAnswers[i];
    const questionScore = questionScore[i];//각 문제의 점수

    //정답 맞춘경우에만 해당 문제 점수 기록
    if(userAnswers === correctAnswers) {
      totalScore += questionScore;
    }
  };



 
}



//결과값 랜더하기
// exports.totalScore = (req,res) => {
//   //answer값 객체분해해서 가져오기
//   const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10}= req.body;
  

//   //각 answer값을 합산
//   const totalScore = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9+answer10
  
//    res.send({totalScore});
//   }
  ;
