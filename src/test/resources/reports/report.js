$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Book_Post.feature");
formatter.feature({
  "line": 2,
  "name": "Book Store",
  "description": "",
  "id": "book-store",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "book added with valid details",
  "description": "",
  "id": "book-store;book-added-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@functionalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want to add details of book",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send data of book with valid fields",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "book should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_details_of_book()"
});
formatter.result({
  "duration": 1008198700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_book_with_valid_fields()"
});
formatter.result({
  "duration": 1643691200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.book_should_be_created()"
});
formatter.result({
  "duration": 54901900,
  "error_message": "java.lang.AssertionError: expected [400] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:652)\r\n\tat org.testng.Assert.assertEquals(Assert.java:662)\r\n\tat steps.FunctionalSteps.book_should_be_created(FunctionalSteps.java:53)\r\n\tat ✽.Then book should be created(Book_Post.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "book added with invalid title",
  "description": "",
  "id": "book-store;book-added-with-invalid-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I want to add details of book",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I send data of book with invalid title",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "book should not be created and errors thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_details_of_book()"
});
formatter.result({
  "duration": 935300,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_book_with_invalid_title()"
});
formatter.result({
  "duration": 879664200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.book_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 2262800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "book added with invalid description",
  "description": "",
  "id": "book-store;book-added-with-invalid-description",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want to add details of book",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I send data of book with invalid description",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "book should not be created and errors thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_details_of_book()"
});
formatter.result({
  "duration": 638600,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_book_with_invalid_description()"
});
formatter.result({
  "duration": 869498700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.book_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 1630500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "book added with invalid excerpt",
  "description": "",
  "id": "book-store;book-added-with-invalid-excerpt",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I want to add details of book",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I send data of book with invalid excerpt",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "book should not be created and errors thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_details_of_book()"
});
formatter.result({
  "duration": 2741400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_book_with_invalid_excerpt()"
});
formatter.result({
  "duration": 854051200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.book_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 1879600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "book added with invalid publishdate",
  "description": "",
  "id": "book-store;book-added-with-invalid-publishdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I want to add details of book",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I send data of book with invalid publishdate",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "book should not be created and errors thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_details_of_book()"
});
formatter.result({
  "duration": 1057700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_book_with_invalid_publishdate()"
});
formatter.result({
  "duration": 843571500,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.book_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 1492200,
  "status": "passed"
});
});