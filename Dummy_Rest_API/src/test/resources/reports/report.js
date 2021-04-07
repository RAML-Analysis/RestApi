$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RetrieveEmployeeData.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 3,
  "name": "Retrieve employee data",
  "description": "",
  "id": "retrieve-employee-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "All employee data successfully retrieved",
  "description": "",
  "id": "retrieve-employee-data;all-employee-data-successfully-retrieved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@functionalTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to retrieve employee data",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I send request to retrieve data",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "All employee data should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_retrieve_employee_data()"
});
formatter.result({
  "duration": 2397654400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_to_retrieve_data()"
});
formatter.result({
  "duration": 3296648000,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.all_employee_data_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 8039000,
  "error_message": "java.lang.AssertionError: expected [200] but found [429]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat steps.FunctionalSteps.all_employee_data_should_be_retrieved_successfully(FunctionalSteps.java:44)\r\n\tat ✽.Then All employee data should be retrieved successfully(RetrieveEmployeeData.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Employee data successfully retrieved with valid id",
  "description": "",
  "id": "retrieve-employee-data;employee-data-successfully-retrieved-with-valid-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I want to retrieve single employee data",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I send request with valid id",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Employee data should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_retrieve_single_employee_data()"
});
formatter.result({
  "duration": 26070300,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_valid_id()"
});
formatter.result({
  "duration": 1273198200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.employee_data_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 566100,
  "error_message": "java.lang.AssertionError: expected [200] but found [404]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat steps.FunctionalSteps.employee_data_should_be_retrieved_successfully(FunctionalSteps.java:71)\r\n\tat ✽.Then Employee data should be retrieved successfully(RetrieveEmployeeData.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Retrieve employee data with invalid id",
  "description": "",
  "id": "retrieve-employee-data;retrieve-employee-data-with-invalid-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I want to retrieve the single employee data",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I send request with invalid id",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Not found error should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_retrieve_the_single_employee_data()"
});
formatter.result({
  "duration": 4243900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_invalid_id()"
});
formatter.result({
  "duration": 1146956600,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.not_found_error_should_be_displayed()"
});
formatter.result({
  "duration": 110300,
  "status": "passed"
});
});