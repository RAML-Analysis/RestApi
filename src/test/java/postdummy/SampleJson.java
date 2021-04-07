package postdummy;

import java.io.File;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Before;
import org.junit.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;


public class SampleJson {
	
	@Test
	 public void functional_test() throws IOException, ParseException 
	 {   
		RestAssured.baseURI="http://dummy.restapiexample.com";
		RequestSpecification httpRequest = RestAssured.given();//sending request for the server
   	 httpRequest.header("content-Type","application/json");
	 httpRequest.header("Retry-After",3600);
	 JSONObject json=new JSONObject();
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader("E:\\javaselenium\\postexample1\\src\\test\\java\\postdummy\\sample.json");
		Object obj=jsonparser.parse(reader);
		json=(JSONObject) obj; 	 
		httpRequest.body(json);
	 Response response= httpRequest.post("/api/v1/create");
	 response.getBody().prettyPrint();	 
	 
}
	@Test
	public void invalidsalarytype() throws IOException, ParseException
	{
		RestAssured.baseURI="http://dummy.restapiexample.com";
		RequestSpecification httpRequest = RestAssured.given();//sending request for the server
   	 httpRequest.header("content-Type","application/json");
	 httpRequest.header("Retry-After",3600);
	 JSONObject json=new JSONObject();
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader("E:\\javaselenium\\postexample2\\src\\test\\java\\postdummy\\invalidtype.json");
		Object obj=jsonparser.parse(reader);
		json=(JSONObject) obj;
		 httpRequest.body(json);
	 Response response= httpRequest.post("/api/v1/create");
	 response.getBody().prettyPrint();	 
		
	}
	@Test
	public void nodata() throws IOException, ParseException
	{
		RestAssured.baseURI="http://dummy.restapiexample.com";
		RequestSpecification httpRequest = RestAssured.given();//sending request for the server
   	 httpRequest.header("content-Type","application/json");
	 httpRequest.header("Retry-After",3600);
	 JSONObject json=new JSONObject();
	 JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader("E:\\javaselenium\\postexample2\\src\\test\\java\\postdummy\\nodata.json");
		Object obj=jsonparser.parse(reader);
		json=(JSONObject) obj;
		 httpRequest.body(json);
	 Response response= httpRequest.post("/api/v1/create");
	 response.getBody().prettyPrint();	 
		
	}
	@Test
	public void invalidnametype() throws IOException, ParseException
	{
		RestAssured.baseURI="http://dummy.restapiexample.com";
		RequestSpecification httpRequest = RestAssured.given();//sending request for the server
   	httpRequest.header("content-Type","application/json");
	 httpRequest.header("Retry-After",3600);
	 JSONObject json=new JSONObject();
	 json.put("name",12345);
	 json.put("salary",30000);
	 json.put("age",23);
	 httpRequest.body(json);
	 Response response= httpRequest.post("/api/v1/create");
	 response.getBody().prettyPrint();	 
		
	}
}