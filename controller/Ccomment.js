const db = require("../model");

// 댓글 조회
exports.comments = (req, res) => {
  Comment.findAll().then((result) => {
    console.log("댓글창", result);
    res.render("result", { data: result });
  });
};

// 댓글작성
exports.createComments = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };

  const createComment = await Comment.creat(data);
  res.send(createComment);
};
