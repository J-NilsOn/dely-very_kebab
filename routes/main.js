const router = require("express").Router();
const { sessionVariables } = require("../middleware/session");

router.route("/").get(sessionVariables, (req, res) => {
  // if(req.session.user){

  if (res.locals.customer) {
    res.redirect("/customer");
  } else if (res.locals.courier) {
    res.redirect("/courier");
  }
  res.render("main");
});

module.exports = router;
