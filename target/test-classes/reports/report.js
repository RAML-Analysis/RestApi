$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestingActivitiesPost.feature");
formatter.feature({
  "line": 2,
  "name": "Retrieve rest countries",
  "description": "",
  "id": "retrieve-rest-countries",
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
  "name": "Post Successfully with valid data",
  "description": "",
  "id": "retrieve-rest-countries;post-successfully-with-valid-data",
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
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send request with valid data",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The Activity is added",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 525166100,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_valid_data()"
});
formatter.result({
  "duration": 1611070100,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_Activity_is_added()"
});
formatter.result({
  "duration": 382640000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Post successful with missing ID",
  "description": "",
  "id": "retrieve-rest-countries;post-successful-with-missing-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I send request with missing id",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The response has id as zero",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 1010900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_missing_id()"
});
formatter.result({
  "duration": 1015242400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_has_id_as_zero()"
});
formatter.result({
  "duration": 8124400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Post successful with missing Title",
  "description": "",
  "id": "retrieve-rest-countries;post-successful-with-missing-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I send request with missing title",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The response has title as null",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 953400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_missing_title()"
});
formatter.result({
  "duration": 1003318900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_has_title_as_null()"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Post successful with missing dueDate",
  "description": "",
  "id": "retrieve-rest-countries;post-successful-with-missing-duedate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I send request with missing dueDate",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "The response has date as first of AD",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 870800,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_missing_dueDate()"
});
formatter.result({
  "duration": 1030870200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_has_date_as_first_of_AD()"
});
formatter.result({
  "duration": 6909400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Post successful with missing completed",
  "description": "",
  "id": "retrieve-rest-countries;post-successful-with-missing-completed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I send request with missing completed",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The response should have false",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 515200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_missing_completed()"
});
formatter.result({
  "duration": 1060004300,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_should_have_false()"
});
formatter.result({
  "duration": 6680400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Post unsuccessful with bool datatype for id",
  "description": "",
  "id": "retrieve-rest-countries;post-unsuccessful-with-bool-datatype-for-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I send request with datatype of id as bool",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The response code should be Bad Request",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 529700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_datatype_of_id_as_bool()"
});
formatter.result({
  "duration": 1166443900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_code_should_be_Bad_Request()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Post unsuccessful with int datatype for title",
  "description": "",
  "id": "retrieve-rest-countries;post-unsuccessful-with-int-datatype-for-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I want to post an Activity",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I send request with datatype of title as int",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The response code should be Bad Request",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_post_an_Activity()"
});
formatter.result({
  "duration": 560400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_request_with_datatype_of_title_as_int()"
});
formatter.result({
  "duration": 1029784200,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.the_response_code_should_be_Bad_Request()"
});
formatter.result({
  "duration": 13600,
  "status": "passed"
});
});