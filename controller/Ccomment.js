const db = require("../model");

//댓글 조회..
exports.comments = (req, res) => {
  db.comment.findAll().then((result) => {
    console.log("댓글창", result);
    res.render("result", { data: result });
  });
};

//댓글작성
exports.createComments = async (req, res) => {
  const data = {
    // maxid: req.body.maxid,
    username: req.body.userName,
    comment: req.body.comment,
  };

  const createComment = await db.comment.create(data);
  res.send(createComment);
};

//댓글 작성폼 표시
exports.showCreateForm = (req,res) => {
  res.render("create-comment-form")
}
