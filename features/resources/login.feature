Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the forgot password link

  Scenario: Password reset link is sent to dummy user
    When User enter the email as "tanuja@mail.com"
    And User click on contiue button
    Then Verify email sent message is displayed

  Scenario: Error message when invalid email id is provided for password restet
    When User enter the email as "tanuja"
    And User click on contiue button
    Then error message is displayed
