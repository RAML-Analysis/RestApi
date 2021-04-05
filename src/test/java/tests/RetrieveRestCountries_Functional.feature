@test
Feature: Pet Store

@functionalTest
Scenario: Users added with valid details
Given I want to add users into pet store
When I send data of users with valid fields
Then users should be created 

Scenario: Users added with invalid details 
Given I want to add users into pet store
When I send data of users with invalid fields
Then users should not be created and errors thrown

Scenario: User details retrieved
Given I want to get the user data
When I request data of users with valid fields
Then I get the details of users 

Scenario: User details unavailable
Given I want to get the user data
When I request data of users with invalid fields
Then I get an error 