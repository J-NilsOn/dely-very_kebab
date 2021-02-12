const router = require("express").Router();
const { sessionVariables } = require("../middleware/session");
const Order = require("../models/order");

router.route("/")
  .get(sessionVariables, async (req, res) => {
    const notOrderedList = await Order.find({statusSold: 'false', statusBooked: 'false'});
    const orderedList = await Order.find({statusSold: 'false', statusBooked: 'true'});
    
    res.render('main', {notOrderedList, orderedList});
  })

  .post(async (req, res) => {
    const sentId  = req.body;
    console.log( sentId);
    const findOrder = await Order.findOne({number: sentId});
    console.log(findOrder);
    findOrder.statusBooked = true;
    await findOrder.save();

    res.json({success: true});
  })

module.exports = router;
