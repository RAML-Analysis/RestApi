$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RetrieveRestCountries_Functional.feature");
formatter.feature({
  "line": 2,
  "name": "Pet Store",
  "description": "",
  "id": "pet-store",
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
  "name": "Users added with valid details",
  "description": "",
  "id": "pet-store;users-added-with-valid-details",
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
  "name": "I want to add users into pet store",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send data of users with valid fields",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "users should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_users_into_pet_store()"
});
formatter.result({
  "duration": 1587848600,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_users_with_valid_fields()"
});
formatter.result({
  "duration": 2185044300,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.users_should_be_created()"
});
formatter.result({
  "duration": 9828600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Users added with invalid details",
  "description": "",
  "id": "pet-store;users-added-with-invalid-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I want to add users into pet store",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I send data of users with invalid fields",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "users should not be created and errors thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_add_users_into_pet_store()"
});
formatter.result({
  "duration": 3739500,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_users_with_invalid_fields()"
});
formatter.result({
  "duration": 1252549700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.users_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 665700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User details retrieved",
  "description": "",
  "id": "pet-store;user-details-retrieved",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want to get the user data",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I request data of users with valid fields",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I get the details of users",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_get_the_user_data()"
});
formatter.result({
  "duration": 1764900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_request_data_of_users_with_valid_fields()"
});
formatter.result({
  "duration": 1298731100,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_get_the_details_of_users()"
});
formatter.result({
  "duration": 1119404700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User details unavailable",
  "description": "",
  "id": "pet-store;user-details-unavailable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I want to get the user data",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I request data of users with invalid fields",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I get an error",
  "keyword": "Then "
});
formatter.match({
  "location": "FunctionalSteps.i_want_to_get_the_user_data()"
});
formatter.result({
  "duration": 1240900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_request_data_of_users_with_invalid_fields()"
});
formatter.result({
  "duration": 1222466700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_get_an_error()"
});
formatter.result({
  "duration": 28221300,
  "status": "passed"
});
});