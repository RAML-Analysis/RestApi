package utils;

import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class PayLoad 
{
	public static JSONObject getValidPayLoad() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\datafiles\\validSingleEmp.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);
		return obj;
	}
}
