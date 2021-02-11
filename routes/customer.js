const router = require("express").Router();
const { sessionVariables } = require("../middleware/session");
// const User = require("../models/user");

router.route("/")
  .get(sessionVariables, async (req, res) => {

  const orders = await Order.find();

  orders.forEach((el) => {
    const { 
      components, 
      statusBooked, 
      adress, 
      pricePrimary, 
      priceDiscount } = el;

    // divComp = document.qu
  })

    res.render('main', {components} );
  })
// .post(async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   // console.log(user);

//   if (user && (await bcrypt.compare(password, user.password))) {
//     req.session.email = user.email;
//     // console.log("OK");

//     res.redirect("/");
//   } else {
//     res.render("login", { mes: "Incorrect login/password" });
//   }
// });

module.exports = router;
