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
	
	@Given("^I want to add details of book$")
	public void i_want_to_add_details_of_book() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Config conf  = ConfigProvider.config().getConfig(Index.BOOKS);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
		//this.requestSpecification.log().all().expect().log().all();
	    
	}

	@When("^I send data of book with valid fields$")
	public void i_send_data_of_book_with_valid_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getValidPayLoad().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_BOOKS);
	    
	}

	@Then("^book should be created$")
	public void book_should_be_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.prettyPrint();
		Assert.assertEquals(200, response.getStatusCode());
	}

	@When("^I send data of book with invalid title$")
	public void i_send_data_of_book_with_invalid_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getInValidTitle().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_BOOKS);
	    
	}

	@Then("^book should not be created and errors thrown$")
	public void book_should_not_be_created_and_errors_thrown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.prettyPrint();
		Assert.assertEquals(400, response.getStatusCode());
	    
	}

	@When("^I send data of book with invalid description$")
	public void i_send_data_of_book_with_invalid_description() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getInValidDesc().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_BOOKS);
	}

	@When("^I send data of book with invalid excerpt$")
	public void i_send_data_of_book_with_invalid_excerpt() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getInValidexc().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_BOOKS);
	}

	@When("^I send data of book with invalid publishdate$")
	public void i_send_data_of_book_with_invalid_publishdate() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.requestSpecification.body(FileManager.getInValidDate().toJSONString());
		response =  this.requestSpecification.post(EndPoint.POST_BOOKS);
	}

}
