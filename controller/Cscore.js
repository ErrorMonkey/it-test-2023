const {Score} = require("../model/score")   //score.js 불러오겠음!


//결과값 랜더하기
exports.result = (req,res) => {
  //answer값 객체분해해서 가져오기
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10}= req.body;
  
  //각 answer값을 합산
  const totalScore = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9answer10
  
   res.send({totalScore});
  }
  ;


// req  res -> 종합점수



//홈화면 랜더
// exports.score = (req, res) => {
//   res.render("index");
// };


// const result = ScoreModel.findOne({
//   where: {
//     ApplicantsID: applicantsID,
//   },
//   attributes: [
//     'answer1',
//     'answer2',
//     'answer3',
//     'answer4',
//     'answer5',
//     'answer6',
//     'answer7',
//     'answer8',
//     'answer9',
//     'answer10',
//   ],
// });

// console.log(result;)

// function ScoreSum( Score ){

  


//   const sum = Score.reduce((acc,num)=>acc+num,0);
//   // const avg = sum / 인원수?

//   return sum;
// };

// console.log(sum);