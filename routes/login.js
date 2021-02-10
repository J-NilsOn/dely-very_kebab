const router = require("express").Router();
const { sessionChecker } = require('../middleware/session');
const User = require('../models/user');

router.route('/')
  .get(sessionChecker, (req, res) => {
    // res.send('Hello, it\'s login page!');
    res.render('login')
  })

  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      req.session.user = user.name;
      res.redirect('/');
    } else {
      res.redirect('/login')
    }
  })
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
