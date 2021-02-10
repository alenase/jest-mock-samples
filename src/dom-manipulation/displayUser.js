// Copyright 2004-present Facebook. All Rights Reserved.

const $ = require("jquery");
const fetchCurrentUser = require("./fetchCurrentUser.js");

$("#button").click(() => {
  var loggedText = "";
  const resp = fetchCurrentUser();
  if (resp) {
    loggedText += resp.fullName + " - Logged " + (resp.loggedIn ? "In" : "Out");
    $("#username").text(loggedText);
  }
});
