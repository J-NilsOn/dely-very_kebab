const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http");
const server = http.createServer(app);
const { appConfig } = require("./middleware/appConfig");
const { sessionConfig } = require("./middleware/session");
const { routerConfig } = require("./middleware/routerConfig");
const { dbConnect } = require("./misc/mongoose");

appConfig(app);
// sessionConfig(app);
routerConfig(app);
// partialsReg();
dbConnect();

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
