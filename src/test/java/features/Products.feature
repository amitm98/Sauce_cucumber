@ProductSelection
Feature: Product Selection

  Scenario Outline: product selection scenario
    Given User has lunched website
    When User Enter correct username "<UserName>" and password "<Password>"
    And User clicks on login Button
    And User should be clicks on "<Product Name>"
    Then Product should be added to cart

	    Examples: 
      | UserName      | Password     | Product Name        |
      | standard_user | secret_sauce | Sauce Labs Backpack |