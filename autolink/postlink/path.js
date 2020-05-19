var glob = require("glob");
var ignoreFolders = { ignore: ["node_modules/**", "**/build/**"] };

var mainActivityJava = glob.sync("**/MainActivity.java", ignoreFolders)[0];
var mainActivityKotlin = glob.sync("**/MainActivity.kt", ignoreFolders)[0];
var mainApplicationJava = glob.sync("**/MainApplication.java", ignoreFolders)[0];
var rootGradle = mainApplicationJava.replace(/android\/app\/.*\.java/, "android/build.gradle");

var appDelegate = glob.sync("**/AppDelegate.m", ignoreFolders)[0];
var podFile = glob.sync("**/Podfile", ignoreFolders)[0];

module.exports = {
  mainActivityJava,
  mainActivityKotlin,
  mainApplicationJava,
  rootGradle,
  appDelegate,
  podFile
};
