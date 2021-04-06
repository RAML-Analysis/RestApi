$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authore_Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: jyoita.roy@capgemini.com"
    }
  ],
  "line": 3,
  "name": "Access to Fakerestapi",
  "description": "I want to use this template for my feature file",
  "id": "access-to-fakerestapi",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "For Valid Post Field",
  "description": "",
  "id": "access-to-fakerestapi;for-valid-post-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@validate"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I pull all valid details",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "all details should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 2387695200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_pull_all_valid_details()"
});
formatter.result({
  "duration": 3435683300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_details_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 3478000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "For blank Post Field",
  "description": "",
  "id": "access-to-fakerestapi;for-blank-post-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I not put any details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "It should show Bad request error",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 4026200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_not_put_any_details()"
});
formatter.result({
  "duration": 2487079100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.it_should_show_bad_request_error()"
});
formatter.result({
  "duration": 2836000,
  "error_message": "java.lang.AssertionError: expected [200] but found [400]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat steps.Steps.it_should_show_bad_request_error(Steps.java:57)\r\n\tat ✽.Then It should show Bad request error(authore_Post.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "For missing id Field",
  "description": "",
  "id": "access-to-fakerestapi;for-missing-id-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I miss id field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "all details should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 2556000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_miss_id_field()"
});
formatter.result({
  "duration": 1513922100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_details_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 96100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "For missing idBook Field",
  "description": "",
  "id": "access-to-fakerestapi;for-missing-idbook-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I miss idBook field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "all details should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 2618800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_miss_idbook_field()"
});
formatter.result({
  "duration": 1626140700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_details_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "For firstName Field",
  "description": "",
  "id": "access-to-fakerestapi;for-firstname-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I miss firstName field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "all details should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 2391400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_miss_firstname_field()"
});
formatter.result({
  "duration": 2138881800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_details_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 100300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "For lastName Field",
  "description": "",
  "id": "access-to-fakerestapi;for-lastname-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I want details of author",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I miss lastName field",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "all details should be retrieved successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_details_of_author()"
});
formatter.result({
  "duration": 1752600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_miss_lastname_field()"
});
formatter.result({
  "duration": 1628821800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.all_details_should_be_retrieved_successfully()"
});
formatter.result({
  "duration": 129500,
  "status": "passed"
});
});