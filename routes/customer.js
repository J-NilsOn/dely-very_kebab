const router = require("express").Router();
const { sessionVariables } = require("../middleware/session");
const Order = require("../models/order");

router.route("/")
  .get(sessionVariables, async (req, res) => {
    const listOfOrders = await Order.find();
    console.log(listOfOrders);

    res.render('main', {listOfOrders});
  })

module.exports = router;
