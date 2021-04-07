@test
Feature: Retrieve rest countries

@functionalTest
Scenario: Post Successfully with valid data
Given I want to post an Activity
When I send request with valid data
Then The Activity is added

Scenario: Post successful with missing ID
Given I want to post an Activity
When I send request with missing id
Then The response has id as zero

Scenario: Post successful with missing Title
Given I want to post an Activity
When I send request with missing title
Then The response has title as null

Scenario: Post successful with missing dueDate
Given I want to post an Activity
When I send request with missing dueDate
Then The response has date as first of AD

Scenario: Post successful with missing completed
Given I want to post an Activity
When I send request with missing completed
Then The response should have false

Scenario: Post unsuccessful with bool datatype for id
Given I want to post an Activity
When I send request with datatype of id as bool
Then The response code should be Bad Request

Scenario: Post unsuccessful with int datatype for title
Given I want to post an Activity
When I send request with datatype of title as int
Then The response code should be Bad Request

Scenario: Post unsuccessful with int datatype for dueDate
Given I want to post an Activity
When I send request with datatype of dueDate as int
Then The response code should be Bad Request


