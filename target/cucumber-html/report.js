$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Product Selection",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductSelection"
    }
  ]
});
formatter.scenarioOutline({
  "name": "product selection scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has lunched website",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enter correct username \"\u003cUserName\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be clicks on \"\u003cProduct Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Product should be added to cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Product Name"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.scenario({
  "name": "product selection scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductSelection"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has lunched website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_lunched_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter correct username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_enter_correct_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be clicks on \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "select_product.user_should_be_clicks_on_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product should be added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "select_product.product_should_be_added_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});