const router = require("express").Router();
// const { check, validationResult } = require("express-validator");
const user = require("../models/user");

router
  .route("/")
  .get((req, res) => {
    res.render("signup");
  })
  .post(
    // [
    //   check("name").isLength({ min: 2 }),
    //   check("email").isEmail(),
    //   check("password").isLength({ min: 3 }),
    //   check("phone").isMobilePhone(),
    // ],
    async (req, res) => {
      const { email, password, name, phone, city } = req.body;
      console.log("2345234");
      const user = new User({ email, password, name, phone, city });
      await user.save();
      req.session.user = user.name;
      res.redirect("/signUp");
    }
  );

module.exports = router;
