Feature: Login validation 	

Scenario: I want to see the home page
    Given I go to the website "https://www.myntra.com/login?referer=https://www.myntra.com/"
    Then I expect the title of the page "Login"
    When I fill "email" field with "test@abc.com"
    And I fill "password" field with "invalid"
    And I click on the button "login"
    Then I should get error message
	Then close the browser