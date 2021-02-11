const mainRouter = require("../routes/main");
const loginRouter = require("../routes/login");
const logoutRouter = require("../routes/logout");
const signupRouter = require("../routes/signup");
const courierRouter = require("../routes/courier");

module.exports.routerConfig = (application) => {
  application.use("/", mainRouter);
  application.use("/login", loginRouter);
  application.use("/logout", logoutRouter);
  application.use("/signup", signupRouter);
  application.use("/courier", courierRouter);
  // application.use("/", router);
};
