const mainRouter = require("../routes/main");
const loginRouter = require("../routes/login");
const logoutRouter = require("../routes/logout");
const signupRouter = require("../routes/signup");

module.exports.routerConfig = (application) => {
  application.use("/", mainRouter);
  application.use("/login", loginRouter);
  application.use("/logout", logoutRouter);
  application.use("/signUp", signupRouter);
  // application.use("/", router);
};
