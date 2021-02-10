const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

module.exports.appConfig = function (application) {
  application.set("view engine", "hbs");
  application.set(logger("dev"));
  application.use(cookieParser());
  application.use(express.static("public"));
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
};
