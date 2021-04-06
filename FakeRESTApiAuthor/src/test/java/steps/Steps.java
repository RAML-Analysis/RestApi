package steps;

import org.apache.http.HttpStatus;
import org.json.simple.JSONObject;
import org.testng.Assert;

import com.typesafe.config.Config;

import config.ConfigProvider;
import constants.EndPoint;
import constants.Index;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Steps {
	
	RequestSpecification httprqst;
	Response response;
	JSONObject request=new JSONObject();
	Config conf  = ConfigProvider.config().getConfig(Index.AUTHOR);
	
	  @Given("^I want details of author$")
	    public void i_want_details_of_author() throws Throwable
	    {
		  RestAssured.baseURI = conf.getString(Index.BASEURI);
			httprqst=RestAssured.given();
			httprqst.headers(ConfigProvider.config().getObject(Index.HEADERS).unwrapped());
			httprqst.log().all().expect().log().all();
	    }

	    @When("^I pull all valid details$")
	    public void i_pull_all_valid_details() throws Throwable 
	    {
	    	request.put("id",2);
			request.put("idBook",4);
			request.put("firstName","Jyoita");
			request.put("lastName","Roy");
			httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @When("^I not put any details$")
	    public void i_not_put_any_details() throws Throwable 
	    {
	    	httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @Then("^It should show Bad request error$")
	    public void it_should_show_bad_request_error() throws Throwable
	    {
			Assert.assertEquals(400,response.getStatusCode());
			response.getBody().prettyPrint();	
	    }

	    @When("^I miss id field$")
	    public void i_miss_id_field() throws Throwable 
	    {
			request.put("idBook",4);
			request.put("firstName","Jyoita");
			request.put("lastName","Roy");
			httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @When("^I miss idBook field$")
	    public void i_miss_idbook_field() throws Throwable 
	    {
	    	request.put("id",2);
			request.put("firstName","Jyoita");
			request.put("lastName","Roy");
			httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @When("^I miss firstName field$")
	    public void i_miss_firstname_field() throws Throwable 
	    {
	    	request.put("id",2);
			request.put("idBook",4);
			request.put("lastName","Roy");
			httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @When("^I miss lastName field$")
	    public void i_miss_lastname_field() throws Throwable 
	    {
	    	request.put("id",2);
			request.put("idBook",4);
			request.put("firstName","Jyoita");
			httprqst.body(request.toJSONString());
			response =httprqst.request(Method.POST,EndPoint.AUTHORSURI);
	    }

	    @Then("^all details should be retrieved successfully$")
	    public void all_details_should_be_retrieved_successfully() throws Throwable 
	    {
	    	Assert.assertEquals(response.getStatusCode(), HttpStatus.SC_OK);
	    }

}
