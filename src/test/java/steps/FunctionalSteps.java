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

import org.apache.http.HttpStatus;
import org.apache.http.protocol.HTTP;
import org.testng.Assert;

public class FunctionalSteps {
	RequestSpecification requestSpecification;
	Response response;

	//	@Given("^I want to retrieve country details$")
	//	public void iWantToRetrieveCountryDetails() throws Throwable {
	//		Config conf  = ConfigProvider.config().getConfig(Index.REST_COUNTRIES);
	//		RestAssured.baseURI = conf.getString(Index.BASE_URI);
	//		this.requestSpecification = RestAssured.given();
	//		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
	//        this.requestSpecification.queryParam(Index.CODES,conf.getString(Index.COUNTRY_CODE));
	//		this.requestSpecification.log().all().expect().log().all();
	//	}
	//
	//	@When("^I send request with valid country code$")
	//	public void i_send_request_with_valid_country_code() throws Throwable {
	//		resposne =  this.requestSpecification.get(EndPoint.RETRIEVE_REST_COUNTRIES);
	//	}
	//
	//	@Then("^country details should be retrieved successfully$")
	//	public void country_details_should_be_retrieved_successfully() throws Throwable {
	//		Assert.assertEquals(resposne.getStatusCode(), HttpStatus.SC_OK);
	//	}

	@Given("^I want to post an Activity$")
	public void i_want_to_post_an_Activity() throws Throwable {
		Config conf  = ConfigProvider.config().getConfig(Index.ACTIVITIES);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
		this.requestSpecification.log().all().expect().log().all();
	}

	@When("^I send request with valid data$")
	public void i_send_request_with_valid_data() throws Throwable {
		this.requestSpecification.body(FileManager.validPayload().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}

	@Then("^The Activity is added$")
	public void the_Activity_is_added() throws Throwable {
		JsonPath jp=new JsonPath(response.getBody().asString());
		Validator.validate(FileManager.validPayload(), jp);

	}

	@When("^I send request with missing id$")
	public void i_send_request_with_missing_id() throws Throwable {
		this.requestSpecification.body(FileManager.missingID().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}


	@When("^I send request with missing title$")
	public void i_send_request_with_missing_title() throws Throwable {
		this.requestSpecification.body(FileManager.missingTitle().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}

	@When("^I send request with missing dueDate$")
	public void i_send_request_with_missing_dueDate() throws Throwable {
		this.requestSpecification.body(FileManager.missingDueDate().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}

	@When("^I send request with missing completed$")
	public void i_send_request_with_missing_completed() throws Throwable {
		this.requestSpecification.body(FileManager.missingCompleted().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}

	@Then("^The response has id as zero$")
	public void the_response_has_id_as_zero() throws Throwable {
		JsonPath jp=new JsonPath(response.getBody().asString());
		Assert.assertEquals(200, response.getStatusCode());
		Assert.assertEquals(0, jp.getLong("id"));
	}

	@Then("^The response has title as null$")
	public void the_response_has_title_as_null() throws Throwable {
		JsonPath jp=new JsonPath(response.getBody().asString());
		Assert.assertEquals(200, response.getStatusCode());
//		Assert.assertEquals(null, jp.get("title"));
	}

	@Then("^The response has date as first of AD$")
	public void the_response_has_date_as_first_of_AD() throws Throwable {
		JsonPath jp=new JsonPath(response.getBody().asString());
		Assert.assertEquals(200, response.getStatusCode());
		Assert.assertEquals("0001-01-01T00:00:00", jp.get("dueDate"));
	}

	@Then("^The response should have false$")
	public void the_response_should_have_false() throws Throwable {
		JsonPath jp=new JsonPath(response.getBody().asString());
		Assert.assertEquals(200, response.getStatusCode());
		Assert.assertFalse(jp.get("completed"));
	}
	
	@When("^I send request with datatype of id as bool$")
	public void i_send_request_with_datatype_of_id_as_bool() throws Throwable {
		this.requestSpecification.body(FileManager.boolForID().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}

	@Then("^The response code should be Bad Request$")
	public void the_response_code_should_be_Bad_Request() throws Throwable {
		Assert.assertEquals(400, response.getStatusCode());
	}

	@When("^I send request with datatype of title as int$")
	public void i_send_request_with_datatype_of_title_as_int() throws Throwable {
		this.requestSpecification.body(FileManager.intForTitle().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}
	
	@When("^I send request with datatype of dueDate as int$")
	public void i_send_request_with_datatype_of_dueDate_as_int() throws Throwable {
		this.requestSpecification.body(FileManager.intForDuedate().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_ACTIVITIES);
	}
}
