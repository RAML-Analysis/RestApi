package steps;

import com.typesafe.config.Config;

import config.ConfigProvider;
import constants.EndPoint;
import constants.Index;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utils.FileManager;
import validators.Validator;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;

import java.io.File;

import org.apache.http.HttpStatus;
import org.apache.http.protocol.HTTP;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.testng.Assert;

public class FunctionalSteps {
	RequestSpecification requestSpecification;
	Response response;

/*	@Given("^I want to retrieve country details$")
	public void iWantToRetrieveCountryDetails() throws Throwable {
		Config conf  = ConfigProvider.config().getConfig(Index.REST_COUNTRIES);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
        this.requestSpecification.queryParam(Index.CODES,conf.getString(Index.COUNTRY_CODE));
		this.requestSpecification.log().all().expect().log().all();
	}

	@When("^I send request with valid country code$")
	public void i_send_request_with_valid_country_code() throws Throwable {
		resposne =  this.requestSpecification.get(EndPoint.RETRIEVE_REST_COUNTRIES);
	}

	@Then("^country details should be retrieved successfully$")
	public void country_details_should_be_retrieved_successfully() throws Throwable {
		Assert.assertEquals(resposne.getStatusCode(), HttpStatus.SC_OK);
	}*/
	
	
	@Given("^I want to add users into pet store$")
	public void i_want_to_add_users_into_pet_store() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Config conf  = ConfigProvider.config().getConfig(Index.STORE);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
		this.requestSpecification.log().all().expect().log().all();
	}

	@When("^I send data of users with valid fields$")
	public void i_send_data_of_users_with_valid_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getValidPayLoad().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_USERS);
	    
	}

	@Then("^users should be created$")
	public void users_should_be_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.prettyPrint();
		Assert.assertEquals(200, response.getStatusCode());
	    
	}

	@When("^I send data of users with invalid fields$")
	public void i_send_data_of_users_with_invalid_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getValidPayLoad().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_USERS);
	    
	}

	@Then("^users should not be created and errors thrown$")
	public void users_should_not_be_created_and_errors_thrown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.prettyPrint();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Given("^I want to get the user data$")
	public void i_want_to_get_the_user_data() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Config conf  = ConfigProvider.config().getConfig(Index.STORE);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
		this.requestSpecification.log().all().expect().log().all();
	    
	}

	@When("^I request data of users with valid fields$")
	public void i_request_data_of_users_with_valid_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response =  this.requestSpecification.get(EndPoint.GET_VALID);
	}

	@Then("^I get the details of users$")
	public void i_get_the_details_of_users() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		JsonPath jp = new JsonPath(response.body().asString());
		JSONArray validator = FileManager.getValidPayLoad();
		JSONObject user = (JSONObject) validator.get(0);
		
		Validator.validateResponse(user, jp);
		response.then().assertThat().body(matchesJsonSchema(new File(".\\src\\test\\resources\\schemas\\getUserResponse.jsd")));
	    
	}

	@When("^I request data of users with invalid fields$")
	public void i_request_data_of_users_with_invalid_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response =  this.requestSpecification.get(EndPoint.GET_INVALID);
	    
	}

	@Then("^I get an error$")
	public void i_get_an_error() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		JsonPath jp=new JsonPath(response.body().asString());
		Assert.assertEquals("error", jp.get("type"));
		Assert.assertEquals("User not found", jp.get("message"));
		Assert.assertEquals(404, response.getStatusCode());
	}

}
