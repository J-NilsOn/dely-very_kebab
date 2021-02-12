const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
// const path = require('path');

module.exports.appConfig = function (application) {
  // application.use(express.static(path.join(__dirname,"public")));
  application.set("view engine", "hbs");
  application.set(logger("dev"));
  application.use(cookieParser());
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
};
