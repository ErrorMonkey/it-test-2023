const db = require("../model");

// 댓글 조회
exports.comments = (req, res) => {
  db.comment.findAll().then((result) => {
    console.log("댓글창", result);
    res.render("result", { data: result });
  });
};

// 댓글작성
exports.createComments = async (req, res) => {
  const dbData = {
    username: req.body.userName,
    comment: req.body.comment,
  };

  await db.comment.create(dbData);

  req.session.destroy((err) => {
    if (err) {
      console.error("세션 파괴 에러: ", err);
    }
  });

  await db.comment
    .findAll({
      order: [["maxID", "DESC"]],
      limit: 5,
    })
    .then((result) => {
      console.log("댓글 length: ", result.length);
      let data = {
        totalComment: result,
      };
      res.send({ data });
    });
};

