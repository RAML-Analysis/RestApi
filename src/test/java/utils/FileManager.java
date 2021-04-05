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
	
	public static JSONArray getInValidPayLoad() throws Throwable
	{
		JSONArray array = new JSONArray();
		JSONObject user = new JSONObject();
		JSONParser jsonparser =new JSONParser();
		FileReader reader = new FileReader("src\\test\\resources\\Datafile\\MissingData.json");
		Object obj1 = jsonparser.parse(reader);
		array = (JSONArray)obj1;
		return array;
	}

}
