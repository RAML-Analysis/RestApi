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
  "duration": 1318413700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_users_with_valid_fields()"
});
formatter.result({
  "duration": 2431308700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.users_should_be_created()"
});
formatter.result({
  "duration": 7274500,
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
  "duration": 3193400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_send_data_of_users_with_invalid_fields()"
});
formatter.result({
  "duration": 1240471700,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.users_should_not_be_created_and_errors_thrown()"
});
formatter.result({
  "duration": 464900,
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
  "duration": 7083900,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_request_data_of_users_with_valid_fields()"
});
formatter.result({
  "duration": 1334401500,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_get_the_details_of_users()"
});
formatter.result({
  "duration": 648777100,
  "error_message": "java.lang.NumberFormatException: For input string: \"Nithin\"\r\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\r\n\tat java.lang.Long.parseLong(Long.java:589)\r\n\tat java.lang.Long.parseLong(Long.java:631)\r\n\tat java_lang_Long$parseLong.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.common.path.ObjectConverter.convertObjectTo(ObjectConverter.groovy:43)\r\n\tat io.restassured.path.json.JsonPath.getLong(JsonPath.java:340)\r\n\tat validators.Validator.validateResponse(Validator.java:12)\r\n\tat steps.FunctionalSteps.i_get_the_details_of_users(FunctionalSteps.java:117)\r\n\tat ✽.Then I get the details of users(RetrieveRestCountries_Functional.feature:18)\r\n",
  "status": "failed"
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
  "duration": 1116500,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_request_data_of_users_with_invalid_fields()"
});
formatter.result({
  "duration": 1335750400,
  "status": "passed"
});
formatter.match({
  "location": "FunctionalSteps.i_get_an_error()"
});
formatter.result({
  "duration": 36511100,
  "status": "passed"
});
});