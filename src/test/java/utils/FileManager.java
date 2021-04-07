package utils;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;



public class FileManager {
	public static JSONArray getValidPayLoad() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\ValidData.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}
	
	public static JSONArray getInValidTitle() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\InValidTitle.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}
	
	public static JSONArray getInValidDesc() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\InValidDesc.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}
	
	public static JSONArray getInValidexc() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\InValidexc.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}
	
	public static JSONArray getInValidDate() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\MissingDate.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}

}
