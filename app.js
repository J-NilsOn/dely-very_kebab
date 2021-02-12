const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const http = require("http");
const server = http.createServer(app);
const { appConfig } = require("./middleware/appConfig");
const { sessionConfig } = require("./middleware/session");
const { routerConfig } = require("./middleware/routerConfig");
const { dbConnect } = require("./misc/mongoose");
const { partialsReg } = require("./misc/hbs");
const path = require('path');

app.use(express.static(path.join(__dirname,"public")));
appConfig(app);
sessionConfig(app);
routerConfig(app);
partialsReg();
dbConnect();

server.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
