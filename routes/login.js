const router = require("express").Router();
const { sessionChecker } = require("../middleware/session");
const User = require("../models/user");
const bcrypt = require("bcrypt");

router
  .route("/")
  .get(sessionChecker, (req, res) => {
    // res.send('Hello, it\'s login page!');
    res.render("login");
  })

  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.email = user.email;
      console.log("OK");
      res.redirect("/");
    } else {
      res.render("login", { mes: "Incorrect login/password" });
    }
  });
// app.post('/form', [
//   check('name').isLength({ min: 3 }),
//   check('email').custom(email => {
//   if (alreadyHaveEmail(email)) {
//   throw new Error('Email already registered')
//   }
//   }),
//   check('age').isNumeric()
//   ], (req, res) => {
//   const name
//   = req.body.name
//   const email = req.body.email
//   const age
//   = req.body.age
//   })
// })
module.exports = router;
