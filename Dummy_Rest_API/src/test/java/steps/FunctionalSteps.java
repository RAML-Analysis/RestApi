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
import utils.PayLoad;
import validators.ResponseValidator;

import org.apache.http.HttpStatus;
import org.apache.http.protocol.HTTP;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.testng.Assert;

public class FunctionalSteps {
	RequestSpecification requestSpecification;
	Response response;

	@Given("^I want to retrieve employee data$")
    public void i_want_to_retrieve_employee_data() throws Throwable {
		Config conf  = ConfigProvider.config().getConfig(Index.DUMMY_API);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
        this.requestSpecification.log().all().expect().log().all();
    }

    @When("^I send request to retrieve data$")
    public void i_send_request_to_retrieve_data() throws Throwable {
    	response =  this.requestSpecification.get(EndPoint.RETRIEVE_EMPLOYEE_DATA);
    }

    @Then("^All employee data should be retrieved successfully$")
    public void all_employee_data_should_be_retrieved_successfully() throws Throwable {
    	Assert.assertEquals(response.getStatusCode(), HttpStatus.SC_OK);
    	
    }
    
    @Given("^I want to retrieve single employee data$")
    public void i_want_to_retrieve_single_employee_data() throws Throwable {
    	Config conf  = ConfigProvider.config().getConfig(Index.DUMMY_API);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
        this.requestSpecification.queryParam(Index.ID,conf.getString(Index.EMPLOYEE_ID));
		this.requestSpecification.log().all().expect().log().all();
    }

    @When("^I send request with valid id$")
    public void i_send_request_with_valid_id() throws Throwable {
    	//this.requestSpecification.body(PayLoad.getValidPayLoad().toJSONString());
    	response =  this.requestSpecification.get(EndPoint.RETRIEVE_SINGLE_EMPLOYEE);
    	
    }

    @Then("^Employee data should be retrieved successfully$")
    public void employee_data_should_be_retrieved_successfully() throws Throwable {
    	/*JsonPath jp=new JsonPath(response.body().asString());
    	JSONArray validator=PayLoad.getValidPayLoad();
 	   	JSONObject user1= (JSONObject) validator.get(0);
 	   	ResponseValidator.validateResult(user1,jo);*/
    	Assert.assertEquals(response.getStatusCode(), HttpStatus.SC_OK);
    	/*Assert.assertEquals(0, jp.getLong("id"));
    	//Assert.assertEquals(1, jp.get("employee_name"));
    	Assert.assertEquals(2, jp.getLong("employee_salary"));
    	Assert.assertEquals(3, jp.getLong("employee_age"));
    	Assert.assertEquals(4, jp.getLong("profile_image"));
    	/*JsonPath jp=new JsonPath(response.getBody().asString());
		ResponseValidator.validateResult(PayLoad.getValidPayLoad(), jp);*/
    }
    
    @Given("^I want to retrieve the single employee data$")
    public void i_want_to_retrieve_the_single_employee_data() throws Throwable {
    	Config conf  = ConfigProvider.config().getConfig(Index.DUMMY_API);
		RestAssured.baseURI = conf.getString(Index.BASE_URI);
		this.requestSpecification = RestAssured.given();
		this.requestSpecification.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
        this.requestSpecification.queryParam(Index.ID,conf.getString(Index.INVALID_EMPLOYEE_ID));
		this.requestSpecification.log().all().expect().log().all();
    }

    @When("^I send request with invalid id$")
    public void i_send_request_with_invalid_id() throws Throwable {
    	response =  this.requestSpecification.get(EndPoint.RETRIEVE_SINGLE_EMPLOYEE);
    }

    @Then("^Not found error should be displayed$")
    public void not_found_error_should_be_displayed() throws Throwable {
    	Assert.assertEquals(response.getStatusCode(), HttpStatus.SC_NOT_FOUND);
    }
}
