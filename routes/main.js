const router = require("express").Router();
const { sessionVariables } = require("../middleware/session");

router.route("/").get(sessionVariables, (req, res) => {
  // if(req.session.user){
  res.render("main");
  // }else{
  // res.redirect('/login')
  // }
});

module.exports = router;
