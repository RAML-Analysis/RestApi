#Author: jyoita.roy@capgemini.com
@test
Feature:  Access to Fakerestapi
  I want to use this template for my feature file

@validate
  Scenario: For Valid Post Field
    Given I want details of author
    When I pull all valid details
    Then all details should be retrieved successfully
    
  Scenario: For blank Post Field
    Given I want details of author
    When I not put any details
    Then It should show Bad request error
    
  Scenario: For missing id Field
    Given I want details of author
    When I miss id field
    Then all details should be retrieved successfully
    
  Scenario: For missing idBook Field
    Given I want details of author
    When I miss idBook field
    Then all details should be retrieved successfully
      
  Scenario: For firstName Field
    Given I want details of author
    When I miss firstName field
    Then all details should be retrieved successfully
    
   Scenario: For lastName Field
    Given I want details of author
    When I miss lastName field
    Then all details should be retrieved successfully  
      

  