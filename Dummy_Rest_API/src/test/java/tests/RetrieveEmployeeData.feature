#Author: your.email@your.domain.com
@test
Feature: Retrieve employee data

@functionalTest
Scenario: All employee data successfully retrieved
Given I want to retrieve employee data
When I send request to retrieve data
Then All employee data should be retrieved successfully

Scenario: Employee data successfully retrieved with valid id
Given I want to retrieve single employee data
When I send request with valid id
Then Employee data should be retrieved successfully

Scenario: Retrieve employee data with invalid id
Given I want to retrieve the single employee data
When I send request with invalid id
Then Not found error should be displayed