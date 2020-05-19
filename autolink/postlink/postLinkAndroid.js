// @ts-check
var { infon } = require("./log");
var AppLinker = require("./applicationLinker");
var ActivityLinker = require("./activityLinker");
var GradleLinker = require("./gradleLinker");

module.exports = () => {
  infon("Running Android postlink script.");
  new AppLinker().link();
  new ActivityLinker().link();
  new GradleLinker().link();
};
