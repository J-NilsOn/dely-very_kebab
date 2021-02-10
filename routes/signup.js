const router = require("express").Router();
// const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const { sessionChecker } = require("../middleware/session");
const bcrypt = require("bcrypt");
const salt = 10;

router
  .route("/")
  .get(sessionChecker, (req, res) => {
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
      const user = new User({
        email,
        password: await bcrypt.hash(password, salt),
        name,
        phone,
        city,
      });
      await user.save();
      req.session.email = user.email;
      res.redirect("/signup");
    }
  );

module.exports = router;
