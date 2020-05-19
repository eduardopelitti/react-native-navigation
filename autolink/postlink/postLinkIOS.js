// @ts-check
var { infon } = require("./log");
var AppDelegateLinker = require("./appDelegateLinker");
var PodfileLinker = require("./podfileLinker");

module.exports = () => {
  infon("Running iOS postlink script");
  new AppDelegateLinker().link();
  new PodfileLinker().link();
};
