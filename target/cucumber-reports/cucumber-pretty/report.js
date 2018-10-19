$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "User Sessions",
  "description": "A user should be able to log in and log out of the umami drupal site",
  "id": "user-sessions",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User can log out",
  "description": "",
  "id": "user-sessions;user-can-log-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a user is on the umami website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a user is logged in",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the log out button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user will be logged out",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});