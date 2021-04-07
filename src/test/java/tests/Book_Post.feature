@test
Feature: Book Store

@functionalTest
Scenario: book added with valid details
Given I want to add details of book
When I send data of book with valid fields
Then book should be created 

Scenario: book added with invalid title 
Given I want to add details of book
When I send data of book with invalid title
Then book should not be created and errors thrown

Scenario: book added with invalid description
Given I want to add details of book
When I send data of book with invalid description
Then book should not be created and errors thrown

Scenario: book added with invalid excerpt 
Given I want to add details of book
When I send data of book with invalid excerpt
Then book should not be created and errors thrown

Scenario: book added with invalid publishdate 
Given I want to add details of book
When I send data of book with invalid publishdate
Then book should not be created and errors thrown
